'use client';

import React from 'react'

interface AboutSectionProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imagePlaceholder?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'About Growskill',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officio deserunt mollit anim id est laborum.',
  imageUrl,
  imagePlaceholder = true,
}) => {
  return (
    <section className="bg-black text-white px-[20px] md:px-[70px] py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt="About" 
                className="w-full h-80 md:h-96 rounded-3xl object-cover"
              />
            ) : imagePlaceholder ? (
              <div className="w-full h-80 md:h-96 bg-gray-300 rounded-3xl"></div>
            ) : null}
          </div>

          {/* Content Section */}
          <div className="border-2 border-[#3B82F6] rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection