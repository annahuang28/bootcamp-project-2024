import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"

// The second argument is the context, which includes params
export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    await connectDB(); // Connect to the database

    // Await the params to get the actual values
    const { slug } = await params;

    try {
        const blog = await blogSchema.findOne({ slug }).orFail();
        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json({ message: 'Blog not found.' }, { status: 404 });
    }
}
