
import React from 'react';
import { ArrowRight, Sparkles, Zap, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="animate-on-scroll text-left space-y-8">
      {/* Enhanced Logo and Brand */}
      <div className="flex items-center gap-3 mb-8">
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-sponsify-primary via-sponsify-accent to-sponsify-lime rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-sponsify-lime rounded-full border-2 border-sponsify-dark animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-black bg-gradient-to-r from-sponsify-lime via-sponsify-accent to-sponsify-primary bg-clip-text text-transparent tracking-tight">
            SPONSIFY
          </span>
          <span className="text-xs text-sponsify-accent/80 font-medium tracking-wider">
            AI-POWERED PLATFORM
          </span>
        </div>
      </div>
      
      {/* Enhanced Badge */}
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-gradient-to-r from-sponsify-primary/15 to-sponsify-accent/15 backdrop-blur-sm border border-sponsify-primary/30 text-sponsify-accent px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Sparkles className="w-4 h-4 mr-2 animate-pulse" /> 
          AI-Powered Talent Discovery
          <div className="ml-2 w-2 h-2 bg-sponsify-lime rounded-full animate-ping"></div>
        </div>
      </div>
      
      {/* Enhanced Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] text-white tracking-tight">
        Connect brands with creators{' '}
        <div className="relative inline-block">
          <span className="bg-gradient-to-r from-sponsify-lime via-sponsify-accent to-sponsify-primary bg-clip-text text-transparent">
            effortlessly
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-sponsify-lime/60 via-sponsify-accent/60 to-sponsify-primary/60 rounded-full"></div>
        </div>
        {' '}with AI
      </h1>
      
      {/* Enhanced Description */}
      <p className="text-gray-300 text-xl mb-10 max-w-lg leading-relaxed font-medium">
        AI-powered tools that streamline bookings and keep you in control. 
        Connect brands with creators, manage partnerships, and{' '}
        <span className="text-sponsify-accent font-semibold">grow your business</span>.
      </p>
      
      {/* Enhanced Feature List */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
          <CheckCircle className="w-4 h-4" />
          Instant Matching
        </div>
        <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
          <Star className="w-4 h-4" />
          Verified Creators
        </div>
        <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
          <Zap className="w-4 h-4" />
          Real-time Analytics
        </div>
      </div>
      
      {/* Enhanced Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button 
          size="lg" 
          asChild 
          className="group bg-gradient-to-r from-sponsify-primary via-sponsify-accent to-sponsify-lime hover:from-sponsify-primary/90 hover:via-sponsify-accent/90 hover:to-sponsify-lime/90 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20"
        >
          <Link to="/register" className="inline-flex items-center justify-center relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="group border-2 border-sponsify-lime/50 text-sponsify-lime hover:bg-sponsify-lime hover:text-sponsify-dark px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 bg-sponsify-lime/5 backdrop-blur-sm shadow-lg hover:shadow-xl"
        >
          <Link to="/for-creators" className="inline-flex items-center justify-center">
            For Creators
          </Link>
        </Button>
      </div>
      
      {/* Enhanced Social Proof */}
      <div className="flex items-center space-x-6">
        <div className="flex -space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-12 h-12 rounded-full border-3 border-sponsify-accent shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-12 h-12 rounded-full border-3 border-sponsify-lime shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-12 h-12 rounded-full border-3 border-sponsify-pink shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <div className="w-12 h-12 rounded-full border-3 border-sponsify-orange bg-gradient-to-br from-sponsify-orange to-sponsify-primary flex items-center justify-center text-white font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-300">
            +1K
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-400 ml-1">5.0</span>
          </div>
          <p className="text-sm text-gray-400">
            <span className="font-bold text-sponsify-accent">2,500+</span> creators already joined
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
