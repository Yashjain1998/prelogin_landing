import Image from "next/image";

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-15">
        <div className="flex flex-col items-center gap-10">
          {/* Main Headline */}
          <h2 className="text-4xl font-semibold text-[#353535] text-center leading-[1.25]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(90deg, #42175A 0%, #811861 18.02%, #BB2A5D 35.73%, #E44E49 55%, #FA8333 75.31%, #FBBB18 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Choose the Solution that Best Suits You
            </span>
          </h2>

          {/* Service Cards Grid */}
          <div className="flex gap-10 justify-center flex-wrap">
            {/* Content Writing Card */}
            <div className="w-89 h-[420px] border border-[#B0B0B0] rounded-2xl overflow-hidden relative">
              {/* Background Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(205.03deg, #FFFFFF 22.12%, #F1DAFF 129.66%)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col gap-4">
                {/* Icon */}
                <div className="w-12 h-12">
                  <Image
                    src="/images/edit_icon.svg"
                    alt={"edit"}
                    width={8}
                    height={4}
                    className="w-full h-full"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-3xl font-semibold bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(88.7deg, #42175B -1.34%, #7E08C3 99.64%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Content Writing
                </h3>
              </div>

              {/* Decorative Images */}
              <div className="absolute top-40">
                <Image
                  src="/images/mobile.svg"
                  alt={"mobile"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute bottom-0">
                <Image
                  src="/images/destop.svg"
                  alt={"mobile"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/tablet.svg"
                  alt={"tablet"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* SEO Services Card */}
            <div className="w-89 h-[420px] border border-[#B0B0B0] rounded-2xl overflow-hidden relative">
              {/* Background Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(170.77deg, #FFFFFF 30.95%, #D7EFFE 137.85%)",
                }}
              ></div>
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col gap-4">
                {/* Icon */}
                <div className="w-12 h-8 rounded-lg flex items-center justify-center text-xl font-semibold">
                  SE
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl font-semibold bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(91.9deg, #0D7AB6 0.44%, #3DBAFF 99.56%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SEO Services
                </h3>
              </div>
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/graph1.svg"
                  alt={"graph"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute bottom-0">
                <Image
                  src="/images/graph2.svg"
                  alt={"graph"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute right-0">
                <Image
                  src="/images/graph3.svg"
                  alt={"graph"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
              =
            </div>

            {/* Translation Card */}
            <div className="w-89 h-[420px] border border-[#B0B0B0] rounded-2xl overflow-hidden relative">
              {/* Background Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "background: linear-gradient(163.2deg, #FFFFFF 29.57%, #FDF2D6 121.53%)",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/translation.svg"
                    alt={"translation"}
                    width={8}
                    height={6}
                    className="w-full h-full"
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-semibold bg-gradient-to-r from-[#FBB818] to-[#FCA100] bg-clip-text text-transparent">
                  Translation
                </h3>
              </div>
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/exper.svg"
                  alt={"expert"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute top-20 right-0">
                <Image
                  src="/images/flag.svg"
                  alt={"flag"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 left-0">
                <Image
                  src="/images/translation_icon.svg"
                  alt={"translation fled"}
                  width={8}
                  height={6}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
