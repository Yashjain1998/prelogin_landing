"use client";
import { useState } from "react";

export function SearchBox() {
  return (
    <div className="inline-flex justify-center p-2 bg-white border border-gray-300 rounded-xl">
      <input
        type="email"
        placeholder="Email Address"
        className=" px-4 py-2 max-w-[12rem] focus:outline-none"
      />
      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-2 lg:px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800">
        Subscribe
      </button>
    </div>
  );
}

export default function SubscribeSection() {
  const [selectedTag, setSelectedTag] = useState("All");
  const tags = ["All", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

  return (
    <section
      className="text-center py-10 px-11"
      style={{
        background: "linear-gradient(180deg, #B9CBFF 0%, #ADE4FF 100%)",
      }}
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">
        Stay Updated with Suvit’s Expert Insights
      </h2>
      <p className="text-gray-600 mb-6">
        Learn about the latest trends in GST, accounting automation, and CA best
        practices.
      </p>

      {/* Email Input */}
      <div className="flex justify-center">
        <SearchBox />
      </div>

      {/* Tags */}
      <h3 className="font-semibold mb-4">Filters based on tags</h3>
      <div className="flex justify-center flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1 rounded-full border ${
              selectedTag === tag
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
