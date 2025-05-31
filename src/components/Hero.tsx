
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCarousel from './hero/HeroCarousel';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero Content */}
          <HeroContent />
          
          {/* Right side - Hero Carousel */}
          <div className="animate-on-scroll delay-300">
            <HeroCarousel />
          </div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sponsify-primary/10 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sponsify-accent/5 to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;
