import Image from "next/image";

export default function FeaturedBlog() {
  return (
    <div className="max-w-6xl mx-auto px-11 py-8">
      <div className="flex flex-row rounded-xl flex-wrap-reverse overflow-hidden shadow-lg border">
        {/* Left Side - Text */}
        <div className="bg-white p-6 lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Lorem ipsum dolor sit amet consectetur. Lacinia scelerisque massa
              ultrices nec.
            </h2>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {["Tag 1", "Tag 2", "Tag 3"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">
              The earliest evidence of this interest stems from the Ebers
              Papyrus, an Egyptian medical papyrus dating c. 1550 BC, which
              cited clinical depression. Afflictions of the mind were initially
              considered the result of demonic possessions or the work of evil
              spirits.
            </p>
          </div>

          {/* Author + Date */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <Image
                src="/blog/userImage.png"
                alt="Author"
                width={50}
                height={50}
                className="rounded-full w-10 h-10"
              />
              <span className="font-medium text-sm">Rohit Kadam</span>
            </div>
            <span className="text-sm text-gray-500">13th Jan 2020</span>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/blog/Gold.png"
            alt="Featured Blog"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
