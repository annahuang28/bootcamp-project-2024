import Link from 'next/link';
import Image from 'next/image'; 
import style from './blogs.module.css';
import { Blog } from "@/database/blogSchema";

type Props = {
  params: { slug: string }
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",  // Disable cache for fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.error(`Error: ${err}`);
    return null;
  }
}

// Ensure the component is async to handle server-side rendering
export default async function BlogPostPage({ params: { slug } }: Props) {

  // Fetch blog post data based on the slug
  const blog: Blog = await getBlog(slug);

  // If no blog post is found, display a "not found" message
  if (!blog) {
    return (
      <div className={style.errorMessage}>
        <h1>Blog Not Found</h1>
        <p>Sorry, we couldn't find the blog you're looking for.</p>
        <Link href="/blogs" className={style.return}>Return to other blogs</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">{blog.title}</h1>
      <main className={style.mainContent}>
        <p><strong>Date: </strong>{blog.full_date}</p>
        
        <div className={style.imageContainer}>
          {/* Dynamically render images based on availability */}
          {blog.image1 && <Image src={blog.image1} alt={blog.imageAlt || 'Image 1'} width={500} height={300} className={style.image} />}
          {blog.image2 && <Image src={blog.image2} alt={blog.imageAlt || 'Image 2'} width={500} height={300} className={style.image} />}
          {blog.image3 && <Image src={blog.image3} alt={blog.imageAlt || 'Image 3'} width={500} height={300} className={style.image} />}
        </div>

        <div className={style.contentContainer}>
          <p>{blog.content}</p>
        </div>
        
        <Link href="/blogs" className={style.return}>Return to other blogs</Link>
      </main>
    </div>
  );
}
