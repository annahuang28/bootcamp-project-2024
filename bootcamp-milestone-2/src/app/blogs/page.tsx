import BlogPreview from '@/components/blogPreview'; // Import BlogPreview component
import BlogModel,{ Blog } from '@/database/blogSchema';
import connectDB from '@/database/db';
import React from "react";

async function getBlogs() {
  await connectDB() // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();  // Fetch the blogs using the getBlogs function
  console.log(blogs); 

  if (!blogs) {
    return <div>No blogs found</div>;  // Handle the case where no blogs are found
  }


  return (
    <div id="blog-container">
      <h1 className = "page-title">My Blogs</h1>
      {blogs.map((blog) => (
        <BlogPreview {...(blog as any)._doc} key={blog.slug} />      ))}
    </div>
  );
}
