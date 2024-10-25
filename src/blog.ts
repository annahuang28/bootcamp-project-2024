type Blog = {
  title: string;
  date: string;
  description: string;
  // might need to add to image
  image: string;
  imageAlt: string;
  slug: string; // slug is a url name used to redirect to a specific page
};

const blogs: Blog[] = [
  {
    title: "2024 Travel: Japan",
    date: "09/2024",
    description: "Visit Japan!",
    image: "img/japan.png",
    imageAlt: "Japan",
    slug: "travel_japan",
  },
  {
    title: "2024 Travel: Lake Tahoe",
    date: "01/2024",
    description: "Visit Lake Tahoe!",
    image: "img/tahoe.png",
    imageAlt: "Lake Tahoe",
    slug: "travel_tahoe",
  },
  {
    title: "2023/24 Travel: New York City",
    date: "12/2023-01/2024",
    description: "Visit New York City!",
    image: "img/nyc2.png",
    imageAlt: "New York City",
    slug: "travel_nyc",
  },
  {
    title: "2023 Travel: Las Vegas",
    date: "08-2024",
    description: "Visit Las Vegas!",
    image: "img/vegas3.png",
    imageAlt: "Las Vegas",
    slug: "travel_las_vegas",
  }
];

// create a fucntion to dynamically append each blog to a container in an html page
const blogContainer = document.getElementById("blog-container");

function displayBlogs() {
  blogs.forEach((blog) => {
    // logic for creatin and appending blog elements
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    const title = document.createElement("h1");
    const titleLink = document.createElement("a");
    titleLink.href = `blogs/${blog.slug}.html`;
    titleLink.textContent = blog.title;
    title.appendChild(titleLink);
    blogDiv.appendChild(title);

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.style.transform = 'rotate(90deg)'; 
    image.style.width = '200px';
    image.style.height = 'auto';
    image.style.margin = '10px -10px';

    blogDiv.appendChild(image);

    const description = document.createElement("p");
    description.textContent = blog.description;
    blogDiv.appendChild(description);

    blogContainer.appendChild(blogDiv);
  });
}

displayBlogs();