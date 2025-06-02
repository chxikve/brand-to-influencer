
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCarousel from './hero/HeroCarousel';
import { Zap, Target, Sparkles, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden min-h-screen bg-gradient-to-br from-sponsify-dark via-slate-900 to-sponsify-dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
      
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sponsify-primary/10 via-sponsify-accent/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sponsify-lime/8 via-sponsify-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sponsify-accent/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sponsify-pink/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sponsify-lime/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Enhanced Floating Brand Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-sponsify-lime via-sponsify-accent to-sponsify-primary rounded-3xl flex items-center justify-center opacity-25 shadow-2xl border border-white/10">
          <Target className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-sponsify-primary via-sponsify-accent to-sponsify-pink rounded-2xl flex items-center justify-center opacity-25 shadow-xl border border-white/10">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 bg-gradient-to-br from-sponsify-accent via-sponsify-orange to-sponsify-pink rounded-xl flex items-center justify-center opacity-20 shadow-lg border border-white/10">
          <Zap className="w-7 h-7 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-12 h-12 bg-gradient-to-br from-sponsify-pink via-sponsify-orange to-sponsify-lime rounded-lg flex items-center justify-center opacity-15 shadow-lg">
          <Users className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-10 h-10 bg-gradient-to-br from-sponsify-orange via-sponsify-lime to-sponsify-accent rounded-md flex items-center justify-center opacity-15 shadow-md">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-sponsify-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-sponsify-lime/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-sponsify-pink/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
