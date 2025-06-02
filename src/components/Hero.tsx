
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCarousel from './hero/HeroCarousel';
import { Zap, Target, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden min-h-screen bg-gradient-to-br from-sponsify-dark via-slate-800 to-sponsify-dark">
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
      
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sponsify-primary/10 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sponsify-lime/5 to-transparent -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sponsify-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-sponsify-pink/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Floating Brand Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gradient-to-r from-sponsify-lime to-sponsify-accent rounded-2xl flex items-center justify-center opacity-20">
          <Target className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-sponsify-primary to-sponsify-pink rounded-xl flex items-center justify-center opacity-20">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-10 bg-gradient-to-r from-sponsify-accent to-sponsify-orange rounded-lg flex items-center justify-center opacity-15">
          <Zap className="w-5 h-5 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
