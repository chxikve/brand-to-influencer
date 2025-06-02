
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCarousel from './hero/HeroCarousel';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left side - Hero Content */}
          <div className="relative">
            <HeroContent />
          </div>
          
          {/* Right side - Hero Carousel */}
          <div className="animate-on-scroll delay-300 relative">
            <HeroCarousel />
          </div>
        </div>
      </div>
      
      {/* Simplified Background Graphics */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sponsify-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sponsify-accent/3 to-transparent"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-sponsify-accent/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Minimal Floating Elements */}
      <div className="absolute top-32 right-16 animate-float opacity-10">
        <div className="w-12 h-12 bg-sponsify-accent rounded-2xl"></div>
      </div>
      <div className="absolute bottom-32 left-16 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 bg-sponsify-lime rounded-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
