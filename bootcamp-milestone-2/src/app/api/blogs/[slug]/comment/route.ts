import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"
import { IComment } from "@/database/comment"

// Handle GET request to fetch comments
export async function GET(req: NextRequest) {
  await connectDB(); // Ensure database connection

  try {
    // Extract the slug from the URL
    const url = new URL(req.url);
    const slug = url.pathname.split('/')[3];  // Extract slug from URL
    
    // Find the blog by slug
    const blog = await blogSchema.findOne({ slug });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Return the comments array as JSON
    return NextResponse.json({ comments: blog.comments });
  } catch (err) {
    console.error('Error fetching comments:', err);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connectDB();
  
  try {
    // Extract slug from URL
    const url = new URL(req.url);
    const slug = url.pathname.split('/')[3];  // Extract slug

    const { user, comment } = await req.json();
  
    // Validate input
    if (!user || !comment) {
      return NextResponse.json({ error: "User and comment are required" }, { status: 400 });
    }
  
    // Find blog by slug
    const blog = await blogSchema.findOne({ slug });
  
    // If blog not found, return an error response
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
  
    // Create new comment with default time if necessary
    const newComment = {
      user,
      comment,
      time: new Date(),
    };
  
    blog.comments.push(newComment);

  
    // Save the updated blog document
    await blog.save();
  
    return NextResponse.json({ comments: blog.comments }, { status: 200 });

  } catch (err) {
    console.error("Error saving comment:", err);
    return NextResponse.json({ error: "Comment unsaved" }, { status: 500 });
  }
  //testing
}
