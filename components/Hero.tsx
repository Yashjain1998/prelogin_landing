import BrandLogos from "./BrandLogos";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-15">
        <div className="flex flex-col items-center gap-14">
          {/* Main Content */}
          <div className="flex flex-col items-center gap-6">
            {/* "We bring you," text */}
            <div className="text-center">
              <span className="text-[#EBA800] font-inter text-2xl font-medium leading-[1.15]">
                We bring you,
              </span>
            </div>

            {/* Main headline and description */}
            <div className="flex flex-col items-center gap-8 max-w-6xl">
              <h1
                className="text-6xl md:text-7xl font-bold text-center leading-[1.35] bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #42175B 0%, #811861 18%, #BB2A5D 36%, #E44E49 55%, #FA8333 75%, #FBBB18 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Textual Content Solutions For
                <br />
                All Business Communications!
              </h1>

              <p className="text-xl md:text-2xl text-[#636363] font-medium leading-[1.35] text-center max-w-4xl">
                We provide professional content writing, SEO content, and
                translation services for effective communication, maximum reach,
                and global impact.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className="bg-[#42175B] hover:bg-[#5a1f7a] transition-colors px-9 py-4 rounded-[10px] text-white font-inter text-base font-medium leading-[1.15]"
            >
              Connect With Us
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-[#000000] font-[Roboto] text-xl font-bold leading-[100%] text-center align-middle">
              <span>Trusted by</span>{" "}
              <span className="text-[#FBBA18]"> 2,000+ Brands</span>
            </p>

            {/* Brand Logos Grid */}
            <BrandLogos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
