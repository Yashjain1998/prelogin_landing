import Image from "next/image";

const FeaturedMentions = () => {
  const publicity = [
    { image: "/images/publicity/Get Prospect Logo.svg", alt: "Get Prospect" },
    { image: "/images/publicity/AZ Big Media Logo.svg", alt: "AZ Big Media" },
    { image: "/images/publicity/Bulkly Logo.svg", alt: "Bulkly" },
    { image: "/images/publicity/Featured Logo.svg", alt: "Featured" },
    {
      image: "/images/publicity/College Recruiter Logo.svg",
      alt: "College Recruiter",
    },
    { image: "/images/publicity/All Business Logo.svg", alt: "All Business" },
    { image: "/images/publicity/Forbes Logo.svg", alt: "Forbes" },
    { image: "/images/publicity/Lensa Logo.svg", alt: "Lensa" },
    { image: "/images/publicity/Arizona Edu Logo.svg", alt: "Arizona Edu" },
    { image: "/images/publicity/Light Key Logo.svg", alt: "Light Key" },
    {
      image: "/images/publicity/Lead Grow Develop.svg",
      alt: "Lead Grow Develop",
    },
    { image: "/images/publicity/Grit Daily Logo.svg", alt: "Grit Daily" },
  ];
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-15">
        <div className="flex flex-col items-center gap-14">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-8 max-w-[794px]">
            <h2 className="text-5xl font-semibold text-[#353535] text-center leading-[1.25] font-serif">
              Featured Mentions & Publications
            </h2>
            <p className="text-2xl font-medium text-[#42175B] text-center leading-[1.35] max-w-[794px]">
              From AMA to Forbes, we have been mentioned in many reputed
              journals and publications.
            </p>
          </div>

          {/* Publication Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {publicity.map(({ image, alt }) => (
              <div className="h-20">
                <Image
                  src={image}
                  alt={alt}
                  width={8}
                  height={4}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentions;
