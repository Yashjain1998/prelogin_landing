import Image from "next/image";

const FeaturesOverview = () => {
  const features = [
    {
      icon: (
        <div>
          <Image
            src="/images/car.svg"
            alt="Content Whale company Logo"
            width={188}
            height={37}
            className="h-full w-full"
            priority
          />
        </div>
      ),
      title: "Blazing-Fast Content Delivery",
      description:
        "Our process-driven content writing and editing practices enable us to deliver upto 20,000+ words in just 48 hours.",
    },
    {
      icon: (
        <div>
          <Image
            src="/images/down.svg"
            alt="Content Whale company Logo"
            width={188}
            height={37}
            className="h-full w-full"
            priority
          />
        </div>
      ),
      title: "TG-focused Content To Boost Lead Generation",
      description:
        "We use data-driven content writing practices to drive traffic through funneling and ascertain conversions.",
    },
    {
      icon: (
        <div>
          <Image
            src="/images/google.svg"
            alt="Content Whale company Logo"
            width={188}
            height={37}
            className="h-full w-full"
            priority
          />
        </div>
      ),
      title: "Original & Authoritative Content That Always Rank",
      description:
        "Our SMEs and content editors follow Google's E-E-A-T guidelines to ensure every piece of delivered content ranks!",
    },
    {
      icon: (
        <div>
          <Image
            src="/images/tr_icon.svg"
            alt="Content Whale company Logo"
            width={188}
            height={37}
            className="h-full w-full"
            priority
          />
        </div>
      ),
      title: "Translate Your Brand Across All Languages",
      description:
        "With 50+ certified multilingual translators and 1000+ global-to-local SME translators, we help you connect globally.",
    },
  ];

  const stats = [
    { number: "100M+", label: "Words\nWritten" },
    { number: "15+", label: "Countries\ncatered" },
    { number: "100K+", label: "Content Pieces Delivered" },
    { number: "3000+", label: "Businesses Supported" },
  ];

  return (
    <section className="w-full py-20 relative">
      {/* Background with subtle shadow */}
      <div
        className="absolute inset-0 bg-white"
      ></div>

      <div className="max-w-7xl mx-auto px-15 relative z-10">
        <div className="flex flex-col items-center gap-20">
          {/* Main Features Section */}
          <div className="flex flex-col items-center gap-14">
            {/* Main Headline */}
            <div className="flex flex-col items-center gap-2.5 max-w-[860px]">
              <h2 className="text-5xl font-semibold text-[#353535] text-center leading-[1.25]">
                Top Features of Content Whale's Content Writing Services
              </h2>
            </div>

            {/* Features Grid */}
            <div className="flex gap-8 items-center flex-wrap justify-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-6 max-w-[280px]"
                >
                  {feature.icon}
                  <div className="flex flex-col items-center gap-6 w-full">
                    <h3 className="text-2xl font-medium text-black text-center leading-[1.2]">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-black text-center leading-[1.17] opacity-60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col items-center gap-10">
            <h3 className="text-4xl font-semibold text-[#353535] text-center leading-[1.25]">
              We are PROUD to say that we have:
            </h3>

            <div className="flex gap-16 items-center flex-wrap justify-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="text-6xl font-medium bg-gradient-to-r from-[#42175B] via-[#811861] via-[#BB2A5D] via-[#E44E49] via-[#FA8333] to-[#FBBB18] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-medium text-black text-center leading-[1.56] whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
