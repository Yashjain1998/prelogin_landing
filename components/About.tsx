import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-15">
        <div className="flex flex-col items-center gap-10">
          {/* Main Headline */}
          <h2 className="text-5xl font-semibold text-[#353535] text-center leading-[1.253] font-serif">
            Check Out Our Resources
          </h2>

          {/* Resource Cards Grid */}
          <div className="flex items-center gap-6">
            {/* Blog Component */}
            <div
              className="flex-1 h-[308px] border border-[#D1D1D1] rounded-3xl p-8 flex flex-col gap-4"
              style={{
                background:
                  "linear-gradient(128.74deg, #FFFFFF 25.96%, #F6E7FF 153.72%)",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14">
                <Image
                  src="/images/Glyph.svg"
                  alt="glyph"
                  width={8}
                  height={4}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#42175B] leading-[1.371] font-serif max-w-[249px]">
                  75% of our blogs rank on Google
                </h3>
                <p className="text-lg text-[#2A2A2A] leading-[1.2] font-lato max-w-[287px]">
                  We adhere to Google's E-E-A-T guidelines and always curate
                  user-centric content, which helps us rank on Google, every
                  time!
                </p>
              </div>
            </div>

            {/* Case Study Component */}
            <div
              className="hidden xl:flex h-[308px] border border-[#D1D1D1] rounded-3xl p-8 flex-1 flex-col gap-4"
              style={{
                background:
                  "linear-gradient(128.74deg, #FFFFFF 25.96%, #FEF1D1 153.72%)",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14">
                <Image
                  src="/images/file_icon.svg"
                  alt="file"
                  width={8}
                  height={4}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#EDAD0B] leading-[1.371] font-serif max-w-[249px]">
                  Case studies designed to celebrate success
                </h3>
                <p className="text-lg text-[#2A2A2A] leading-[1.2] font-lato max-w-[287px]">
                  Easy-to-understand and thoughtfully designed case studies to
                  understand the importance of content writing.
                </p>
              </div>
            </div>

            {/* Samples Component */}
            <div
              className="hidden xl:flex h-[308px] border border-[#D1D1D1] rounded-3xl p-8 flex-1 flex-col gap-4"
              style={{
                background:
                  "linear-gradient(128.74deg, #FFFFFF 25.96%, #F6E7FF 153.72%)",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14">
                <Image
                  src="/images/read.svg"
                  alt="read"
                  width={8}
                  height={4}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#3070E2] leading-[1.371] font-serif max-w-[249px]">
                  Content samples that our clients loved
                </h3>
                <p className="text-lg text-[#2A2A2A] leading-[1.2] font-lato max-w-[287px]">
                  100+ content samples to go through, curated in different
                  tonalities, styles, and voices, using various content writing
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
