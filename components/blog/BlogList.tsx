import BlogCard from "./BlogCard";
import SmallBlogCard from "./SmallBlogCard"

export function BlogListPage() {
  const blog = {
    title: "How Automation is Transforming CA Offices",
    description: "Join us for a full day of events sharing best practices from",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    author: "Rohit Kadam",
    date: "13th Jan 2020",
    image: "/blog/cardImage.jpg",
  };

  return (
    <div className="max-w-6xl mx-auto px-11 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <BlogCard key={i} blog={blog} />
      ))}
    </div>
  );
}
export function BlogCardList() {
  const blog = {
    title: "8 Top Open-Source LLMs for 2024 and Their Uses",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    description: "Join us for a full day of events sharing best practices from",
    author: "Rohit Kadam",
    date: "13th Jan 2020",
    authorImage: "/blog/userImage.png", // Place author image in /public/images/
  };
  return (
    <div className="flex justify-center gap-8 p-8 flex-wrap max-w-7xl m-auto px-11">
      {[...Array(12)].map((_, i) => (
        <SmallBlogCard key={i} blog={blog} />
      ))}
    </div>
  );
}
