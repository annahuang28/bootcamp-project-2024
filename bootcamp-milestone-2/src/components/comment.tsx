import React from "react"
import { IComment } from "@/database/blogSchema"
import style from './comment.module.css'

/* When we pass props, the name that we use to pass values
		is the key for the type */
type CommentProps = {
    comment: IComment;
}

/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
    function parseCommentTime(time: Date){
        return new Date(time).toDateString();
    }

export default function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>Name: {comment.user}</h4>
            <span>Date: {parseCommentTime(comment.time)}</span>
            <p className = {style.comment}>Comment: {comment.comment}</p>
        </div>
    );
}