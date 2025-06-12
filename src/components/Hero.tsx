
import React from 'react';
import HeroContent from './hero/HeroContent';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 rounded-lg transform rotate-12 opacity-80"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-gray-700 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gray-800 rounded-lg transform rotate-45"></div>
      </div>
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
