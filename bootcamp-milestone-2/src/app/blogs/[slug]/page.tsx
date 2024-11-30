'use client';

import { useParams } from 'next/navigation';  // Import useRouter from next/navigation
import blogs from '@/app/blogData';  // Import the blog data
import Link from 'next/link';
import Image from 'next/image'; 
import style from './blogs.module.css';

export default function BlogPostPage() {
  const { slug } = useParams();  // Get the dynamic slug from the URL

  // If slug is not available yet (e.g., during server-side rendering), return loading state
  if (!slug) {
    return <p>Loading...</p>;
  }

  // Find the blog post based on the slug
  const blog = blogs.find((b) => b.slug === slug);

  // If no blog post is found, display a "not found" message
  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
        <main>
          <h1 className="page-title">{blog.title}</h1>
          <p><strong>Date: </strong>{blog.date}</p>
          <div className={style.imageContainer}>
            <Image src={blog.image1} alt={blog.imageAlt} width={500} height={300} className={style.image} />
            <Image src={blog.image2} alt={blog.imageAlt} width={500} height={300} className={style.image} />
            <Image src={blog.image3} alt={blog.imageAlt} width={500} height={300} className={style.image} />
          </div>
            <p>{blog.content}</p>
          <Link href="/blogs" className={style.return}>Return to other blogs</Link>
      </main>
    </div>
  );
}
