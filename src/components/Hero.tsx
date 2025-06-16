
import React from 'react';
import HeroContent from './hero/HeroContent';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-transparent text-gray-900 dark:text-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
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
