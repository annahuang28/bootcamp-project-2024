import mongoose, { Schema } from "mongoose";
import commentSchema, { IComment } from "@/database/comment";

// Define and export Blog schema
export type Blog = {
  title: string;
  date: string;
  full_date: string;
  description: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  imageAlt: string;
  slug: string;
  content: string;
  comments: IComment[];
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  full_date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image1: { type: String, required: true },
  image2: { type: String, required: true },
  image3: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  content: { type: String, required: true },
  comments: [commentSchema],
});

// Define and export Blog model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;
