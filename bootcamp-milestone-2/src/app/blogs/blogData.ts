export type Blog = {
  title: string;
  date: string;
  full_date: string;
  description: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  imageAlt: string;
  slug: string; // slug is a URL-friendly name used to redirect to a specific page
  content: string;
};

const blogs: Blog[] = [
  {
    title: "2024 Travel: Japan",
    date: "09/2024",
    full_date: "September 2024",
    description: "Visit Japan!",
    image: "/japan.png", 
    image1: "/japan2.png",
    image2:"/japan.png",
    image3: "/japan3.png",
    imageAlt: "Japan",
    slug: "travel_japan",
    content: "I went to Japan right before the school year started to experience a new culture and environment. Will definitely return!",
  },
  {
    title: "2024 Travel: Lake Tahoe",
    date: "01/2024",
    full_date: "January 2024",
    description: "Visit Lake Tahoe!",
    image: "/tahoe.png",  
    image1: "/tahoe2.png",
    image2: "/tahoe.png",
    image3: "/tahoe3.png",
    imageAlt: "Lake Tahoe",
    slug: "travel_tahoe",
    content: "I traveled to Tahoe after New York for a snow trip with friends.",
  },
  {
    title: "2023/24 Travel: New York City",
    date: "12/2023-01/2024",
    full_date: "December 2023/January 2024",
    description: "Visit New York City!",
    image: "/nyc2.png", 
    image1: "/nyc2.png",
    image2: "/nyc1.png",
    image3: "/nyc3.png",
    imageAlt: "New York City",
    slug: "travel_nyc",
    content: "I traveled to New York City to experience the holiday spirit.",
  },
  {
    title: "2023 Travel: Las Vegas",
    date: "08/2023",
    full_date: "August 2023",
    description: "Visit Las Vegas!",
    image: "/vegas3.png",
    image1: "/vegas2.png",
    image2: "/vegas3.png",
    image3: "/vegas4.png",
    imageAlt: "Las Vegas",
    slug: "travel_las_vegas",
    content: "I traveled to Las Vegas over the 2023 summer to see Blackpink in concert and also explore a new city.",
  },
];

export default blogs; 
