import mongoose, { Schema } from "mongoose";
import { IComment } from "@/database/comment";

// Define the PortfolioComment schema
const portfolioCommentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, default: Date.now },
  });
  
  // Create the PortfolioComment model
  const PortfolioComment = mongoose.models['portfoliocomments'] || mongoose.model('portfoliocomments', portfolioCommentSchema);
  
  export default PortfolioComment;