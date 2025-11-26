// src/components/Banner.tsx
import React from "react";
import type { BannerProps } from "../../../shared/types/interfaces";

const Banner: React.FC<BannerProps> = ({
  preHeading,
  heading,
  linkText,
  imageUrl,
  imageAlt,
  linkHref = "#", // Default link to a hash
}) => {
  return (
    <div className="flex max-w-7xl mx-auto shadow-lg overflow-hidden bg-white border mb-12">
      {/* LEFT SIDE: Text Content Block 
        Uses flex-1 for equal width distribution and p-16 for padding
      */}
      <div className="flex flex-col justify-center flex-1 p-16 bg-white">
        {/* Pre-Heading (OUR BESTSELLERS) */}
        <div className="flex items-center space-x-4 mb-2">
          {/* Simple line decoration */}
          <div className="w-8 h-px bg-gray-500"></div>
          <p className="uppercase text-xs tracking-widest text-gray-700 font-medium">
            {preHeading}
          </p>
          {/* Simple line decoration */}
          <div className="w-8 h-px bg-gray-500"></div>
        </div>

        {/* Main Heading (Latest Arrivals) */}
        <h1 className="text-5xl font-serif text-gray-900 mb-6">{heading}</h1>

        {/* Link/Call to Action (SHOP NOW) */}
        <a
          href={linkHref}
          className="flex items-center space-x-4 text-sm font-medium uppercase tracking-widest text-gray-800 hover:text-black transition duration-300 w-fit"
        >
          <p>{linkText}</p>
          {/* Simple line decoration */}
          <div className="w-12 h-px bg-gray-800"></div>
        </a>
      </div>

      {/* RIGHT SIDE: Image Block 
        Uses flex-1 for equal width, custom background color for the simple backdrop, 
        and an image that covers the block.
      */}
      <div
        className="flex-1 min-h-full"
        style={{ backgroundColor: "#F8E9E7" /* Light pink/peach background */ }}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover mix-blend-multiply"
          /* The mix-blend-multiply here simulates the slight color shift from the background color */
        />
      </div>
    </div>
  );
};

export default Banner;
