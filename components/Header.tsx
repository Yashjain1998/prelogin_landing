"use client";

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/content-whale-logo.svg"
                alt="Content Whale company Logo"
                width={188}
                height={37}
                className="h-9 w-auto"
                priority
              />
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-black font-lato text-base font-normal leading-[1.15]">
                  Content Solutions
                </span>
                <Image
                  src="/images/dropdown-icon.svg"
                  alt="Dropdown"
                  width={8}
                  height={4}
                  className="w-2 h-1"
                />
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

              <div className="text-black font-lato text-base font-normal leading-[1.15] hover:text-primary transition-colors">
                About Us
              </div>
            </nav>
          </div>

          {/* Right side - Rank On AI and CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Rank On AI */}
            <div className="flex items-center space-x-2.5">
              <span
                className="font-lato text-base font-semibold leading-[1.2] bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #42175B 0%, #811861 18%, #BB2A5D 36%, #E44E49 55%, #FA8333 75%, #FBBB18 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Rank On AI
              </span>
              <div className="relative">
                <div
                  className="w-[32px] h-[32px] inline-flex items-center justify-center !text-[8px] text-white font-bold"
                  style={{
                    backgroundImage: "url('/images/rank-on-ai-icon.svg')",
                  }}
                >
                  NEW
                </div>
              </div>
            </div>

            {/* Let's Talk Button */}
            <button
              className=" px-4 py-2.5 rounded-lg flex items-center space-x-2 text-white font-inter text-base font-medium leading-[1.15]"
              style={{
                background: "linear-gradient(139deg, #42175B 6%, #8C31C1 100%)",
              }}
            >
              <span>Let's Talk</span>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-4"
              >
                <path
                  d="M1 8H17M17 8L10 1M17 8L10 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 px-4 py-2.5 rounded-lg flex items-center space-x-2 text-white font-inter text-base font-medium leading-[1.15]"
            style={{
              background: "linear-gradient(139deg, #42175B 6%, #8C31C1 100%)",
            }}
          >
            Contact us
           
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


