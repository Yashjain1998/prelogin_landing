import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl flex justify-center gap-12 px-15 m-auto">
        <div className="flex flex-col xl:flex-row items-center gap-[70px] w-full p-8">
          {/* Left Side - Testimonial Card */}
          <div className="w-[460.61px] h-[466.97px] flex justify-center">
            {/* Main Card */}
            <div className="relative w-[355.78px] h-[440.76px] bg-white border border-[#BCBCBC] rounded-[15.88px] p-8 flex flex-col justify-between">
              {/* Profile Picture */}
              <div className="absolute top-2 left-2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/comaicon.svg"
                  alt="coma"
                  width={8}
                  height={4}
                  className="w-full h-full"
                />
              </div>

              {/* Quote Marks */}
              <div className="absolute top-[50%] -left-12 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
                </svg>
              </div>

              <div className="absolute top-[50%] -right-12 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                </svg>
              </div>

              {/* Testimonial Text */}

              <p className="text-[19.06px] font-bold text-[#42175B] leading-[1.2] font-lato mt-[20%]">
                Lörem ipsum kyl nihävis på begösode. Antiposäde evirar fastän
                neng nifesk. Binar funde. Spesade dohilogi ultrapätt, ponur. Bin
                krodår fastän niv. Du kan vara drabbad.
              </p>

              {/* Customer Info */}
              <div className="mb-0 mt-auto text-xs">
                <div className="text-[19.06px] font-bold text-black font-lato">
                  Samrth Iyer
                </div>
                <div className="flex gap-[154.16px] mt-2">
                  <span className="text-[12.71px] font-bold text-black font-lato">
                    2022.03.06
                  </span>
                  <span
                    className="text-[12.71px] font-bold text-black font-lato"
                    style={{ textDecoration: "underline" }}
                  >
                    Read more
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Reviews Section */}
          <div className="flex flex-col gap-[45.61px]">
            {/* Header */}
            <div className="flex flex-col gap-[22.8px]">
              <h2 className="text-[51.08px] font-bold text-black leading-[1.2] font-lato">
                Don't Just Take Our Word for it
              </h2>
              <p className="text-xl font-medium text-black leading-[1.2] font-lato">
                We've been reviewed more than 20,000 times with an average of
                4.5 out 5 rating.
              </p>
            </div>

            {/* Rating Displays */}
            <div className="flex justify-center items-center gap-[34.66px] h-[149.66px]">
              {/* First Rating */}
              <div className="flex flex-col items-center gap-[18.24px] w-[148.67px]">
                <div className="flex flex-col items-center gap-[4.99px]">
                  <div className="flex flex-col items-center gap-[-4.16px]">
                    <div className="flex flex-col items-center gap-[8.32px]">
                      {/* Star Rating */}
                      <div className="">
                        <Image
                          src="/images/clutch.svg"
                          alt="clutch"
                          width={8}
                          height={4}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="text-[26.63px] font-bold text-[#42175B] font-lato">
                        4.5
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform Logos */}
                <div className="h-6">
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={8}
                    height={4}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-[0.83px] h-[125.65px] bg-[#42175B] opacity-20"></div>

              {/* Second Rating */}
              <div className="flex flex-col items-center gap-[18.24px] w-[148.67px]">
                <div className="flex flex-col items-center gap-[4.99px]">
                  <div className="flex flex-col items-center gap-[-4.16px]">
                    <div className="flex flex-col items-center gap-[8.32px]">
                      {/* Platform Logo */}
                      <div className="">
                        <Image
                          src="/images/goodFirms.svg"
                          alt="clutch"
                          width={8}
                          height={4}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="text-[26.63px] font-bold text-[#42175B] font-lato">
                        4.5
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform Logos */}
                <div className="h-6">
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={8}
                    height={4}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-[0.83px] h-[125.65px] bg-[#42175B] opacity-20"></div>

              {/* Third Rating */}
              <div className="flex flex-col items-center gap-[18.24px] w-[148.67px]">
                <div className="flex flex-col items-center gap-[4.99px]">
                  <div className="flex flex-col items-center gap-[-4.16px]">
                    <div className="flex flex-col items-center gap-[8.32px]">
                      {/* Platform Logo */}
                      <div className="">
                        <Image
                          src="/images/trust.svg"
                          alt="clutch"
                          width={8}
                          height={4}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="text-[26.63px] font-bold text-[#42175B] font-lato">
                        4.5
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform Logos */}
                <div className="h-6">
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={8}
                    height={4}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
