var blogs = [
    {
        title: "2023 Travel: Las Vegas",
        date: "08-2024",
        description: "Visit Las Vegas!",
        image: "",
        imageAlt: "las vegas",
        slug: "travel_las_vegas",
    },
    {
        title: "2023/24 Travel: New York City",
        date: "12/2023-01/2024",
        description: "Visit New York City!",
        image: "",
        imageAlt: "New York City",
        slug: "travel_nyc",
    },
    {
        title: "2024 Travel: Lake Tahoe",
        date: "01/2024",
        description: "Visit Lake Tahoe!",
        image: "",
        imageAlt: "Lake Tahoe",
        slug: "travel_tahoe",
    },
    {
        title: "2024 Travel: Japan",
        date: "09/2024",
        description: "Visit Japan!",
        image: "",
        imageAlt: "Japan",
        slug: "travel_japan",
    }
];
// create a fucntion to dynamically append each blog to a container in an html page
var blogContainer = document.getElementById("blog-container");
function displayBlogs() {
    blogs.forEach(function (blog) {
        // logic for creatin and appending blog elements
        var blogDiv = document.createElement("div");
        blogDiv.classList.add("blog-post");
        var title = document.createElement("h1");
        var titleLink = document.createElement('a');
        titleLink.href = "blogs/".concat(blog.slug, ".html");
        titleLink.textContent = blog.title;
        title.appendChild(titleLink);
        blogDiv.appendChild(title);
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogDiv.appendChild(image);
        var description = document.createElement("p");
        description.textContent = blog.description;
        blogDiv.appendChild(description);
        blogContainer.appendChild(blogDiv);
    });
}
displayBlogs();
