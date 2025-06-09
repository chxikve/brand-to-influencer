
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCarousel from './hero/HeroCarousel';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
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
