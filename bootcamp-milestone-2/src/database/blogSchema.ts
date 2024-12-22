import mongoose, { Schema } from "mongoose";

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
    slug: string; // slug is a URL-friendly name used to redirect to a specific page
    content: string;
    comments: IComment[];
  };

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

const commentSchema = new Schema<IComment>({
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: { type: Date, required: true, default: new Date()}
})

// mongoose schema
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
})

// defining the collection and model
const BlogModel = mongoose.models['blogs'] || 
    mongoose.model('blogs', blogSchema);

export default BlogModel;