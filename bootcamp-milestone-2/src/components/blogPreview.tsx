import React from 'react';
import style from './blogPreview.module.css';
import Link from 'next/link'; 
import Image from 'next/image'; 
import { Blog } from '@/app/blogData'; 

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: Blog) {
  return (
    <main>
        <div className={style.blogPreview}>
            <div className={style.imageContainer}>
                <Image src={image} 
                    alt={imageAlt} 
                    width={10}
                    height={20} 
                    layout="responsive"
                    className={style.blogImage} />
            </div>
            <div className={style.textContainer}>
                <h3 className={style.blogTitle}>{title}</h3>
                <p className={style.blogDate}>{date}</p>
                <p className={style.blogExcerpt}>{description}</p>
                <Link href={`/blogs/${slug}`} className={style.blogLink}>
                Read More
                </Link>
            </div>
        </div>
    </main>
  );
}
