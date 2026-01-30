'use client';

import React from 'react'

interface HeroProps {
  title: string;
  highlightedWords?: { text: string; color: 'blue' | 'green' }[];
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl?: string;
  imagePlaceholder?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  highlightedWords = [],
  buttonText = 'Join Sekarang!!',
  onButtonClick,
  imageUrl,
  imagePlaceholder = true,
}) => {
  const renderTitle = () => {
    let parts = title.split(' ');
    
    return parts.map((word, idx) => {
      const highlighted = highlightedWords.find(hw => hw.text === word);
      
      if (highlighted) {
        const colorClass = highlighted.color === 'blue' ? 'text-[#3B82F6]' : 'text-green-500';
        return <span key={idx} className={colorClass}>{word}</span>;
      }
      
      return <span key={idx}>{word}</span>;
    }).reduce((acc, el, idx) => {
      if (idx === 0) return [el];
      return [...acc, ' ', el];
    }, [] as React.ReactNode[]);
  };

  return (
    <section className="bg-black text-white px-[30px] pt-12 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold leading-tight mb-12">
            {renderTitle()}
          </h1>

          {/* Image Placeholder or Image */}
          <div className="w-full mb-12 md:mx-auto md:w-[1080px]">
            {imageUrl ? (
              <img src={imageUrl} alt="Hero" className="w-full h-64 md:h-[478px] rounded-3xl object-cover" />
            ) : imagePlaceholder ? (
              <div className="w-full h-64 md:h-[478px] md:w-[1080px] bg-gray-300 rounded-3xl"></div>
            ) : null}
          </div>

          {/* CTA Button */}
          <button 
            onClick={onButtonClick}
            className="bg-[#3B82F6] hover:opacity-90 transition-opacity text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero