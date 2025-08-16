import Image from "next/image";

export default function SmallBlogCard({ blog }) {
  return (
    <div className="rounded-xl border shadow-sm hover:shadow-md transition-shadow p-4 max-w-xs bg-white">
      {/* Title */}
      <h3 className="text-lg font-semibold">{blog.title}</h3>

      {/* Tags */}
      <div className="flex gap-2 mt-2 flex-wrap">
        {blog.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-3">{blog.description}</p>

      {/* Author & Date */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <Image
            src={blog.authorImage}
            alt={blog.author}
            width={28}
            height={28}
            className="rounded-full w-8 h-8"
          />
          <span className="text-sm font-medium">{blog.author}</span>
        </div>
        <span className="text-xs text-gray-500">{blog.date}</span>
      </div>
    </div>
  );
}
