import mongoose, { Schema } from "mongoose";

export type Portfolio = {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string; 
  };

// mongoose schema
const portfolioSchema = new Schema<Portfolio>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    link: { type: String, minlength: 1 },
})

// defining the collection and model
const Portfolio = mongoose.models['portfolios'] || mongoose.model('portfolios', portfolioSchema);

export default Portfolio;