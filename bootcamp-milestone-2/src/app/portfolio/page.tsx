import ProjectModel from '@/database/portfolioSchema';
import connectDB from '@/database/db';
import style from './portfolioPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import CommentSection from "@/components/commentSection"

async function getProjects() {
  await connectDB(); // Function to connect to the DB

  try {
    const projects = await ProjectModel.find().orFail(); // orFail will throw if no projects are found
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null; // Return null if no projects are found or an error occurs
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();  // Fetch the projects using the getProjects function

  if (!projects) {
    return <div>No projects found</div>;  // Handle the case where no projects are found
  }

  return (
    <div id="project">
      <h1 className="page-title">My Portfolio</h1>
      <div className={style.projectContainer}>
        {projects.map((project) => (
            <div key={project._id} className={style.projectDetails}>
              <div className={style.imageContainer}>
                <Image 
                  src={project.image}  // Dynamically use project image
                  alt={project.imageAlt}  // Dynamically use project imageAlt
                  width={500}  // Adjusted size for responsiveness
                  height={300} // Adjusted size for responsiveness
                  layout="responsive"
                  className={style.projectImage}
                />
              </div>
            <p className={style.projectName}>{project.name}</p>
            <p className={style.projectDescription}>{project.description}</p>
            {project.link && project.link !== "#" ? (
            <Link href={project.link} target="_blank" className={style.projectLink}>Click Here!</Link>
          ) : (
            <span className={style.projectLinkSoon}>Link Coming Soon!</span>
          )}
          </div>

        ))}
        <div className={style.portfolioComments}>
              <h2 className={style.comments}>Comment Section</h2>
          <CommentSection collection= "portfoliocomments" />
        </div>
      </div>
    </div>
  );
}