"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Scrollbar, Navigation } from "swiper/modules";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Header and CTA */}
          <div className="flex flex-col justify-center gap-8 w-full lg:w-[40%]">
            <h2 className="text-5xl font-semibold text-[#353535] leading-[1.25] font-serif lg:max-w-[390px]">
              Expert Content Writing Solutions
            </h2>
            <p className="text-xl text-black font-inter leading-[1.21] max-w-[390px]">
              Providing real-world results. Few case studies to look at.
            </p>
            <div className="bg-[#42175B] rounded-[5px] px-4 py-2.5 flex justify-center items-center w-[248px] cursor-pointer">
              <span className="text-white font-poppins text-xl leading-[1.5]">
                Want to Know More?
              </span>
            </div>
          </div>

          {/* Right Side - Swiper Slider */}
          <div className="w-full lg:w-[60%]">
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={20}
              slidesPerView={2} // ✅ Show only 2 cards
              scrollbar={{ draggable: true }}
              loop
            >
              {/* Khatabook Case Study */}
              <SwiperSlide>
                <div className="w-[344px] h-[599px] border border-[#E3E3E3] rounded-2xl overflow-hidden relative group">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(166.98deg, #FFFFFF -1.49%, #FFD5D5 111.96%)",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="relative z-10 p-8 flex flex-col gap-6">
                    {/* Logo */}

                    <div>
                      <Image
                        src="/images/Khatabook.svg"
                        alt="Khatabook"
                        width={188}
                        height={37}
                        className="h-9 w-auto"
                        priority
                      />
                    </div>
                    {/* Title */}
                    <h3 className="text-lg text-[#2A2A2A] font-lato leading-[1.2] max-w-[248px]">
                      KhataBook's Transformation with Content Whale
                    </h3>
                  </div>

                  {/* Phone Mockup */}
                  <div
                    className="absolute left-0 w-full h-[400px] rounded-lg transition-all duration-1000 ease-in-out top-[198px] group-hover:top-[75%]"
                    style={{
                      backgroundImage: "url('/images/NothingPhone.svg')",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>

                  {/* Metrics Cards */}
                  <div className="absolute top-[180px] w-52 h-[124.8px] bg-white border border-[#D9D2DB] rounded-2xl p-4 shadow-lg flex flex-col justify-center items-end gap-1.5 transition-all duration-1000 delay-150 ease-in-out -left-[230px] group-hover:-left-12">
                    <div className="text-right">
                      <div className="text-md text-[#A3131D]">
                        Keywords Ranked
                      </div>
                      <div className="text-2xl font-bold text-[#A3131D]">
                        28,316
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[150px] w-36 h-[125.13px] bg-white border border-[#D9D2DB] rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center gap-1.5 transition-all duration-1000 ease-in-out left-[100%] group-hover:left-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#A3131D]">
                        17x
                      </div>
                      <div className="text-sm text-[#A3131D]">New Heights</div>
                    </div>
                  </div>

                  <div className="absolute bottom-[150px] w-52 h-[124.8px] bg-white border border-[#D9D2DB] rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center gap-1.5 transition-all duration-1000 delay-150 ease-in-out -right-56 group-hover:-right-12">
                    <div className="text-left w-full">
                      <div className="text-sm text-[#A3131D]">
                        Traffic Growth
                      </div>
                      <div className="text-2xl font-bold text-[#A3131D]">
                        1.4 million
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[180px] w-36 h-[125.13px] bg-white border border-[#D9D2DB] rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center gap-1.5 transition-all duration-1000 ease-in-out right-[100%] group-hover:right-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#A3131D]">
                        17x
                      </div>
                      <div className="text-sm text-[#A3131D]">New Heights</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Heritage Hospitals Case Study */}
              <SwiperSlide>
                <div className="w-[344px] h-[599px] border border-[#E3E3E3] rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F3FFFF]"></div>
                  <div className="absolute z-10 px-8 flex flex-col gap-4  transition-all duration-1000 ease-in-out top-[445px] group-hover:top-[480px]">
                    {/* Logo */}
                    <Image
                      src="/images/heritage_logo.svg"
                      alt="Heritage Hosipital"
                      width={188}
                      height={37}
                      className="h-full w-full object-cover"
                      priority
                    />
                    {/* Title */}
                    <h3 className="text-lg text-[#2A2A2A] font-lato leading-[1.2] max-w-[248px]">
                      Putting Heritage Hospitals on the Map
                    </h3>
                  </div>

                  {/* ID Cards Mockup */}
                  <div
                    className="absolute right-[72px] w-[200px] h-[457px] transition-all duration-1000 ease-in-out top-0 group-hover:-top-[235px]"
                    style={{
                      backgroundImage: "url('/images/Realistic ID Cards.svg')",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>

                  {/* Metrics Cards */}
                  <div className="absolute top-[340.44px] w-[186px] h-[111.6px] bg-white border border-[#D9D2DB] rounded-2xl p-5 shadow-lg flex flex-col justify-center items-end gap-2.5 transition-all duration-1000 ease-in-out -left-52 group-hover:-left-8">
                    <div className="text-right">
                      <div className="text-sm text-[#085681]">
                        Keywords Ranked
                      </div>
                      <div className="text-3xl font-bold text-[#085681]">
                        10,047
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[341.04px] w-[185px] h-[111px] bg-white border border-[#D9D2DB] rounded-2xl p-5 shadow-lg flex flex-col justify-center gap-2.5 transition-all duration-1000 ease-in-out -right-52 group-hover:-right-6">
                    <div className="">
                      <div className="text-sm text-[#085681]">
                        Traffic Growth
                      </div>
                      <div className="text-3xl font-bold text-[#085681]">
                        1.5 <span className="text-sm">times</span>
                      </div>
                    </div>
                  </div>

                  {/* Challenge Cards */}
                  <div className="absolute top-[187px] w-36 bg-white border border-[#2B7787] rounded-2xl p-4 flex flex-col justify-center items-end gap-1.5 transition-all duration-1000 ease-in-out -left-52 group-hover:-left-4">
                    <div className="w-10 h-10 bg-[#A7E0FF] rounded-lg mb-2"></div>
                    <div className="text-right">
                      <div className="text-sm text-[#085681]">
                        Digital Regional Presence
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[187px] w-[200px] bg-white border border-[#2B7787] rounded-2xl p-4 flex flex-col justify-center gap-1.5 transition-all duration-1000 ease-in-out -right-52 group-hover:-right-4">
                    <div className="w-10 h-10 bg-[#8DD7FF] rounded-lg mb-2"></div>
                    <div className="text-left">
                      <div className="text-sm text-[#085681]">
                        Lack of Online Healthcare Expertise
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* KnowledgeHut Case Study */}
              <SwiperSlide>
                <div className="w-[344px] h-[599px] border border-[#E3E3E3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/knowledgehutCard.png"
                    alt="know ledge hut"
                    width={188}
                    height={37}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

// const a =<div className="w-[344px] h-[599px] border border-[#E3E3E3] rounded-2xl overflow-hidden relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F3FFFF]"></div>
//                   <div className="relative z-10 p-8 flex flex-col gap-6 mt-[456px]">
//                     {/* Logo */}
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-10 bg-[#085681] rounded"></div>
//                       <span className="text-[#085681] font-semibold text-3xl">
//                         Heritage Hospitals
//                       </span>
//                     </div>
//                     {/* Title */}
//                     <h3 className="text-lg text-[#2A2A2A] font-lato leading-[1.2] max-w-[248px]">
//                       Putting Heritage Hospitals on the Map
//                     </h3>
//                   </div>

//                   {/* ID Cards Mockup */}
//                   <div className="absolute top-[-39px] right-[72px] w-[200.32px] h-[457px] bg-gray-200 rounded-lg shadow-lg"></div>

//                   {/* Metrics Cards */}
//                   <div className="absolute -left-[186px] top-[340.44px] w-[186px] h-[111.6px] bg-white border border-[#D9D2DB] rounded-2xl p-5 shadow-lg flex flex-col justify-center items-end gap-2.5">
//                     <div className="text-right">
//                       <div className="text-3xl font-bold text-[#085681]">
//                         10,047
//                       </div>
//                       <div className="text-sm text-[#085681]">
//                         Keywords Ranked
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute right-0 top-[341.04px] w-[185px] h-[111px] bg-white border border-[#D9D2DB] rounded-2xl p-5 shadow-lg flex flex-col justify-center items-center gap-2.5">
//                     <div className="text-center">
//                       <div className="text-3xl font-bold text-[#085681]">
//                         1.5 times
//                       </div>
//                       <div className="text-sm text-[#085681]">
//                         Traffic Growth
//                       </div>
//                     </div>
//                   </div>

//                   {/* Challenge Cards */}
//                   <div className="absolute -left-[207px] top-[212px] w-[143px] bg-white border border-[#2B7787] rounded-2xl p-4 flex flex-col justify-center items-end gap-1.5">
//                     <div className="w-10 h-10 bg-[#A7E0FF] rounded-lg mb-2"></div>
//                     <div className="text-right">
//                       <div className="text-sm text-[#085681]">
//                         No Digital Regional Presence
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute right-0 top-[212px] w-[214.34px] bg-white border border-[#2B7787] rounded-2xl p-4 flex flex-col justify-center gap-1.5">
//                     <div className="w-10 h-10 bg-[#8DD7FF] rounded-lg mb-2"></div>
//                     <div className="text-left">
//                       <div className="text-sm text-[#085681]">
//                         Lack of Online Healthcare Expertise
//                       </div>
//                     </div>
//                   </div>
//                 </div>

// third card =  <div className="w-[344px] h-[599px] border border-[#E3E3E3] rounded-2xl overflow-hidden relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-white to-[#FFE9FF]"></div>

//                   {/* Content */}
//                   <div className="relative z-10 p-8 flex flex-col gap-6 mt-[146px]">
//                     <div className="text-center">
//                       <p className="text-base text-black font-inter mb-4">
//                         Fintech | Website Content
//                       </p>
//                       <h3 className="text-2xl font-semibold text-[#085681] font-serif leading-[1.15] max-w-[304px]">
//                         Empowering KNOWLEDGEHUT through Strategic Content
//                         Marketing
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Mockups */}
//                   <div className="absolute top-[24px] right-[97px] w-[150px] h-[66.67px] bg-gray-200 rounded-lg"></div>
//                   <div className="absolute top-[308px] left-[-51.33px] w-[446.67px] h-[335px] bg-gray-200 rounded-lg"></div>

//                   {/* Hidden Metrics Cards */}
//                   <div className="absolute opacity-0">
//                     <div className="w-[180.31px] h-[42.32px] bg-white border border-[#D9D2DB] rounded-lg p-3 shadow-lg flex items-center gap-2">
//                       <div className="w-7 h-7 bg-[#B036CE] rounded-lg"></div>
//                       <span className="text-sm text-[#B036CE]">
//                         Limited online visibility
//                       </span>
//                     </div>
//                   </div>
//                 </div>
