
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCarousel from './hero/HeroCarousel';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-slate-950 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
      
      {/* Minimal geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-sponsify-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-sponsify-primary/5 rounded-full blur-xl"></div>
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left side - Hero Content */}
            <div className="order-2 lg:order-1">
              <HeroContent />
            </div>
            
            {/* Right side - Hero Carousel */}
            <div className="order-1 lg:order-2">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
