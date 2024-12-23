import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // Connect to the database before querying

  const { slug } = await params; // Destructure slug from params

  try {
    // Try to find the blog post by slug
    const blog = await blogSchema.findOne({ slug }).orFail();

    // If blog is not found, return a 404
    if (!blog) {
      return NextResponse.json('Blog not found.', { status: 404 });
    }

    // If blog found, return the blog data as JSON
    return NextResponse.json(blog);
  } catch (err) {
    // Catch any other errors (such as DB connection issues)
    console.error("Error fetching blog:", err);
    return NextResponse.json('Error fetching blog.', { status: 500 });
  }
}
