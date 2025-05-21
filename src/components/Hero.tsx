
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCarousel from './hero/HeroCarousel';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left side content */}
          <HeroContent />
          
          {/* Right side carousel - only visible on large screens */}
          <div className="hidden lg:block animate-on-scroll delay-200">
            <HeroCarousel />
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sponsify-light/50 to-transparent dark:from-slate-800/30 dark:to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;
