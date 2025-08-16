import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 py-10 px-6">
      <div className="flex justify-between max-w-7xl mx-auto pb-6 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/blog/logo2.svg"
            alt="Suvit Logo"
            width={5}
            height={5}
            className="w-full h-8"
          />
          <span className="text-gray-600" style={{ textWrap: "nowrap" }}>
            Powering CA’s Office
          </span>
        </div>
        {/* Social Icons */}
        <div className="flex justify-end gap-4">
          <a href="#">
            <Image
              src="/blog/ins_fill.svg"
              alt="instagram"
              width={35}
              height={35}
            />
          </a>
          <a href="#">
            <Image
              src="/blog/facebook_fill.svg"
              alt="facebook"
              width={35}
              height={35}
            />
          </a>
          <a href="#">
            <Image
              src="/blog/linkedin_fill.svg"
              alt="linkedin"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-6 gap-16 md:gap-8 items-start mt-4 max-w-[1200px] w-full">
        {/* Logo + Tagline */}
        <div className="col-span-6 md:col-span-2">
          <h2 className="text-3xl font-semibold leading-snug">
            Welcome to the world’s largest <br /> CA Platform
          </h2>
          <button className="mt-6 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition">
            Request Callback{" "}
            <span className="text-lg w-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Product Feature */}
        <div className="col-span-3 md:col-span-1">
          <h3 className="font-semibold mb-3">Product feature</h3>
          <ul className="space-y-2 text-gray-700">
            <li>GST Filing & Compliance</li>
            <li>Client Communication & Practice Management</li>
            <li>Data Automation</li>
          </ul>
        </div>

        {/* Company */}
        <div className="lg:ml-8 col-span-3 md:col-span-1">
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Home</li>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-3 md:col-span-1">
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Blogs</li>
            <li>Webinars</li>
            <li>Calculator</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Pricing */}
        <div className="col-span-3 md:col-span-1">
          <h3 className="font-semibold mb-3">Pricing</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Use cases</li>
            <li>Customers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
