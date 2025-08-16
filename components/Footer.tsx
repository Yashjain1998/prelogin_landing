import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-20">
      <div className="max-w-7xl mx-auto px-15">
        <div className="max-w-[1000px] mx-auto bg-white border border-[#D5D5D5] rounded-[32px] p-14 shadow-[0px_0px_100px_0px_rgba(244,226,255,1)]">
          <div className="flex flex-col items-center gap-7">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-6 w-full">
              {/* Icon */}
              <div className="w-14 h-14 bg-white flex items-center justify-center">
                <Image
                  src="/images/whatsapp.svg"
                  width={8}
                  height={6}
                  className="w-full h-full"
                  alt="whatsapp"
                />
              </div>

              {/* Headline */}
              <h2 className="text-[40px] font-semibold text-black text-center leading-[1.253] font-serif">
                So, let's start, shall we?
              </h2>
            </div>

            {/* CTA Button */}
            <div className="bg-[#42175B] rounded-[10px] px-[35px] py-4 flex justify-center items-center">
              <div
                className="text-white font-inter text-[16.62px] font-medium leading-[1.15]"
              >
                Connect me to an expert!
              </div>
            </div>

            {/* Feature Badges */}
            <div className="flex gap-16 items-center">
              {/* Best Quality */}
              <div className="flex items-center gap-2.5">
                <div className="w-[25px] h-[25px] bg-white flex items-center justify-center">
                  <Image
                    src="/images/raitcon.svg"
                    width={8}
                    height={6}
                    className="w-full h-full"
                    alt="whatsapp"
                  />
                </div>
                <span className="text-lg font-semibold text-black leading-[1.2] font-lato">
                  Best quality
                </span>
              </div>

              {/* Top Experts */}
              <div className="flex items-center gap-2.5">
                <div className="w-[25px] h-[25px] bg-white flex items-center justify-center">
                  <Image
                    src="/images/raitcon.svg"
                    width={8}
                    height={6}
                    className="w-full h-full"
                    alt="whatsapp"
                  />
                </div>
                <span className="text-lg font-semibold text-black leading-[1.2] font-lato">
                  Top experts
                </span>
              </div>

              {/* Quickest Delivery */}
              <div className="flex items-center gap-2.5">
                <div className="w-[25px] h-[25px] bg-white flex items-center justify-center">
                  <Image
                    src="/images/raitcon.svg"
                    width={8}
                    height={6}
                    className="w-full h-full"
                    alt="whatsapp"
                  />
                </div>
                <span className="text-lg font-semibold text-black leading-[1.2] font-lato">
                  Quickest delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
