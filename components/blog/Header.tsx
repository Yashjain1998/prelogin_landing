import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
          <Image
            src="/blog/logo.svg"
            alt="Suvit Logo"
            width={180}
            height={50}
            priority
          />

        {/* Navigation */}
        
          <nav className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-black font-lato text-base font-normal leading-[1.15]">
                  Modules
                </span>
                <Image
                  src="/images/dropdown-icon.svg"
                  alt="Dropdown"
                  width={8}
                  height={4}
                  className="w-2 h-1"
                />
              </div>
              <div 
                className="text-black font-lato text-base font-normal leading-[1.15] hover:text-primary transition-colors"
              >
                Pricing
              </div>
              <div 
                className="text-black font-lato text-base font-normal leading-[1.15] hover:text-primary transition-colors"
              >
                About
              </div>
              
              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-black font-lato text-base font-normal leading-[1.15]">
                  Resources
                </span>
                <Image
                  src="/images/dropdown-icon.svg"
                  alt="Dropdown"
                  width={8}
                  height={4}
                  className="w-2 h-1"
                />
              </div>
              
             
            </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div
            className="block border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
          >
            Sign up now
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Request Callback
          </button>
        </div>
         {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            // onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            // aria-expanded={isMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Menu icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </div>
    </header>
  );
}
