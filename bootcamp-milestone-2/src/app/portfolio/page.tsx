'use client'
import PortfolioModel from '@/database/portfolioSchema';
import PortfolioPreview from '@/components/portfolioPreview';
import connectDB from '@/database/db';
import style from './portfolioPage.module.css';
import React from "react";
import CommentSection from "@/components/commentSection"
import { useEffect, useState } from "react";


async function getPortfolios() {
  await connectDB(); // Function to connect to the DB

  try {
    const portfolios = await PortfolioModel.find().orFail(); // orFail will throw if no projects are found
    return portfolios;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null; // Return null if no projects are found or an error occurs
  }
}

async function getComments() {
  // Fetch all comments from the portfolioComment collection
  try {
    const response = await fetch('/api/portfolio/comment');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching comments:', err);
    return [];
  }
}

export default async function PortfolioPage() {
  const [comments, setComments] = useState([]);
  const portfolios = await getPortfolios();
  console.log(portfolios); 

  useEffect(() => {
    const loadData = async () => {
      const fetchedComments = await getComments();

      setComments(fetchedComments || []); // Fallback to empty array if no comments found
    };

    loadData();
  }, []);

  if (portfolios == null) {
    return <div>No portfolios found</div>; // Handle the case where no portfolios are found
  }

  return (
    <div id="project">
      <h1 className="page-title">My Portfolio</h1>
      <div className={style.projectContainer}>
        {portfolios.map((portfolio) => (
            <div key={portfolio._id} className={style.projectDetails}>
              <PortfolioPreview {...(portfolio as any)._doc} />  
          </div>
          ))}
        <h2 className={style.comments}>Comment Section</h2>
        <CommentSection collection="portfoliocomments" />
      </div>
    </div>
  );
}
