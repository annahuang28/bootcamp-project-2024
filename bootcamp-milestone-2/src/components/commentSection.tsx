"use client";
import React, { useState, useEffect } from "react";
import style from "@/components/commentSection.module.css"; // Import your styles
import { IComment } from "@/database/comment";  // Assuming IComment type is correct
import Comment from "@/components/comment";  // Component to display individual comment

type Props = {
  collection: string;  // Blog or Portfolio collection
  slug?: string;  // Slug of the blog or portfolio (optional for portfolios)
};

export default function CommentSection({ collection, slug }: Props) {
  const [user, setUser] = useState("");  // Track user's name
  const [comment, setComment] = useState("");  // Track comment text
  const [comments, setComments] = useState<IComment[]>([]);  // Store comments
  // Fetch initial comments
  useEffect(()=>{
    const fetchComments = async () => {
        try{
          let url = `/api/${collection}/comment`;

          if (slug) {
            url = `/api/${collection}/${slug}/comment`;
          }
          const res = await fetch(url);
          if(!res.ok){
              throw new Error(`Failed to fetch comments: ${res.statusText}`);
          }
          const data = await res.json();
          if (data && data.comments) {
            setComments(data.comments);
          } else {
            setComments([]);
          }
        }catch(err){
            console.error("Error fetching comments: ", err);
            setComments([]);  // Default to empty array on error
        }
    }
      fetchComments();
  }, [slug, collection]);

  // Handle form submission for posting a comment
  const postComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent default form submission

    // Validate inputs
    if (!user || !comment) {
      console.error("Name and Comment are required.");
      return;
    }

    const newComment = {
      user,
      comment,
      time: new Date(),  // Set current time for the comment
    };

    try {
      // Adjust the URL based on collection type and presence of slug
      let url = `/api/portfoliocomments/comment`;  // Default URL for portfolio

      if (slug) {
        url = `/api/${collection}/${slug}/comment`;  // URL for individual blog post
      }

      const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",  // Send JSON payload
          },
          body: JSON.stringify(newComment),  // Send comment data
        });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Update comments list by adding the new comment
      setComments((prevComments) => [...prevComments, newComment]);

      // Clear form fields after submitting
      setUser("");
      setComment("");
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <>
      {/* Form to post a comment */}
      <form className={style.form} onSubmit={postComment}>
        <input
          className={style.field}
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}  // Update user name
        />
        <textarea
          className={style.comment}
          name="message"
          placeholder="Your Message"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}  // Update comment text
        ></textarea>
        <button className={style.button} type="submit">Post</button>
      </form>

      {/* Render existing comments */}
      <div className={style.commentContainer}>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </>
  );
}
