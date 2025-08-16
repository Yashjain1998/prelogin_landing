import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-shadow">
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      {/* Blog Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{blog.description}</p>

        {/* Tags */}
        <div className="flex gap-2 mt-3">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 px-2 py-1 rounded-full text-xs text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author + Date */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <span className="font-medium">{blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
}
