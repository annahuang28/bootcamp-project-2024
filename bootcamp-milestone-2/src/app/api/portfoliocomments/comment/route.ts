import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import PortfolioComment from '@/database/portfolioCommentSchema';

export async function GET() {
  await connectDB(); // Ensure DB connection

  try {
    // Fetch all comments from the 'portfoliocomments' collection
    const comments = await PortfolioComment.find().sort({ time: -1 });

    return NextResponse.json({ comments });
  } catch (err) {
    console.error('Error fetching comments:', err);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    await connectDB();  // Ensure DB connection

    try {
        const { user, comment } = await req.json();  // Extract data from request body

        // Validate input
        if (!user || !comment) {
            return NextResponse.json({ error: "User and comment are required" }, { status: 400 });
        }

        // Create a new comment for the portfolio
        const newComment = {
            user,
            comment,
            time: new Date(),  // Set the time to the current date
            collection: "portfoliocomments",  // Ensure it's marked as part of portfolio comments
        };

        // Save the new comment in the database
        const savedComment = new PortfolioComment(newComment);
        await savedComment.save();

        // Respond with the newly created comment (you could return all comments if needed)
        return NextResponse.json({ comments: [savedComment] }, { status: 200 });
    } catch (err) {
        console.error("Error saving comment:", err);
        return NextResponse.json({ error: "Comment unsaved" }, { status: 500 });
    }
}

  