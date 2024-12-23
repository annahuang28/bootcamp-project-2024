import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";

export async function GET(req: NextRequest) {
    try {
        await connectDB(); // Ensure database connection
        const portfolios = await Portfolio.find().sort({ date: -1 }); // Sorting by date (or adjust as needed)
    
        return NextResponse.json({ portfolios });
    } catch (err) {
        console.error('Error fetching portfolios:', err);
        return NextResponse.json({ error: 'Failed to fetch portfolios' }, { status: 500 });
    }
}

