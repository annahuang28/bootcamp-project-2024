import mongoose, { Schema } from "mongoose";

export type Project = {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string; // slug is a URL-friendly name used to redirect to a specific page
  };

// mongoose schema
const projectSchema = new Schema<Project>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    link: { type: String, minlength: 1 },
})

// defining the collection and model
const ProjectModel = mongoose.models['projects'] || 
    mongoose.model('projects', projectSchema);

export default ProjectModel;