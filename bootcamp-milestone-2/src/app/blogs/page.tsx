import BlogPreview from '@/components/blogPreview'; // Import BlogPreview component
import blogs from '@/app/blogData';

export default function BlogsPage() {
  return (
    <div id="blog-container">
      <h1 className = "page-title">My Blogs</h1>
      {blogs.map((blog) => (
        <BlogPreview key={blog.slug} {...blog} />
      ))}
    </div>
  );
}
