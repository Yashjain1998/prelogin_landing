import Image from "next/image";

export default function AutomationHero() {
  return (
    <section
      className="rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between text-white max-w-7xl mx-10 xl:m-auto px-11"
      style={{
        background:
          "linear-gradient(98.42deg, #2B56D6 1.52%, #499EF0 53.95%, #5CC9FF 85.52%)",
        border: "2px solid",

        borderImageSource:
          "linear-gradient(94.68deg, #2B56D6 4.67%, #5CC9FF 98.55%)",
      }}
    >
      {/* Left Side: Text */}
      <div className="max-w-md">
        <h2 className="text-3xl font-semibold leading-snug">
          Enjoy the Benefits of Suvit&apos;s Smart Automation Firsthand
        </h2>
        <button className="mt-6 px-5 py-3 bg-white text-[#1678f2] rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition">
          Explore Insights
          <span className="w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Right Side: Icons */}
      <div className="relative w-[400px] h-[350px] mt-10 md:mt-0 flex items-center justify-center">
        {/* Center circle */}\
        <div
          className="w-[336px] h-[336px] rounded-full flex items-center justify-center"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(216, 255, 226, 0.2) 100%)",
            boxShadow: "0px 0px 4px 0px #00000014 inset",
          }}
        >
          <div
            className="w-[216px] h-[216px] rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(216, 255, 226, 0.3) 100%)",
              boxShadow: "0px 0px 4px 0px #00000014 inset",
            }}
          >
            <div className="flex justify-center items-center p-2 w-28 h-28 bg-white rounded-xl">
              <Image
                src="/blog/logo3.svg"
                alt="Suvit Icon"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-16 left-16 transform -translate-x-1/2 bg-white rounded-md shadow-md px-4 py-2 text-sm text-gray-800">
          GST automation
        </div>
        <div className="absolute top-8 right-4 bg-white rounded-md shadow-md px-4 py-2 text-sm text-gray-800">
          Client Communication
        </div>
        <div className="absolute bottom-1/4 -right-4 bg-white rounded-md shadow-md px-4 py-2 text-sm text-gray-800">
          Chanakya AI
        </div>
        <div className="absolute bottom-9 left-16 transform -translate-x-1/2 bg-white rounded-md shadow-md px-4 py-2 text-sm text-gray-800">
          Data-entry Automation
        </div>
        <div className="absolute bottom-[55%] right-4 bg-white rounded-md shadow-md p-3 w-14 h-12">
          <Image
            src="/blog/Group.svg"
            alt="Tally"
            width={40}
            height={20}
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[45%] -left-20 bg-white rounded-md shadow-md w-18 h-10 p-2">
          <Image
            src="/blog/tally-solutions.svg"
            alt="WhatsApp"
            width={35}
            height={35}
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 right-1/4 bg-white rounded-md shadow-md w-12 h-12 p-3">
          <Image
            src="/blog/whatapp.svg"
            alt="WhatsApp"
            width={35}
            height={35}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
