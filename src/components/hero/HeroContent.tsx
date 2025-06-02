
import React from 'react';
import { ArrowRight, Zap, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="animate-on-scroll text-left space-y-8 max-w-2xl">
      {/* Clean Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-12 h-12 bg-gradient-to-br from-sponsify-accent to-sponsify-primary rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
            SPONSIFY
          </span>
          <span className="block text-xs text-gray-400 font-medium tracking-wider">
            AI-POWERED PLATFORM
          </span>
        </div>
      </div>
      
      {/* Simple Badge */}
      <div className="inline-flex items-center gap-2 bg-sponsify-accent/10 border border-sponsify-accent/20 text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
        <div className="w-2 h-2 bg-sponsify-accent rounded-full"></div>
        AI-Powered Talent Discovery
      </div>
      
      {/* Clean Typography */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
        Connect brands with creators{' '}
        <span className="bg-gradient-to-r from-sponsify-accent to-sponsify-primary bg-clip-text text-transparent">
          effortlessly
        </span>
      </h1>
      
      {/* Improved Description */}
      <p className="text-gray-300 text-lg mb-10 leading-relaxed font-normal max-w-lg">
        Streamline partnerships with AI-powered matching. Connect, manage, and grow your business with the right creator collaborations.
      </p>
      
      {/* Clean Feature List */}
      <div className="flex flex-wrap gap-3 mb-12">
        <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 text-gray-300 px-3 py-2 rounded-full text-sm">
          <CheckCircle className="w-4 h-4 text-green-400" />
          Instant Matching
        </div>
        <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 text-gray-300 px-3 py-2 rounded-full text-sm">
          <Star className="w-4 h-4 text-blue-400" />
          Verified Creators
        </div>
        <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 text-gray-300 px-3 py-2 rounded-full text-sm">
          <Zap className="w-4 h-4 text-purple-400" />
          Real-time Analytics
        </div>
      </div>
      
      {/* Simplified Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button 
          size="lg" 
          asChild 
          className="bg-sponsify-accent hover:bg-sponsify-accent/90 text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link to="/register" className="inline-flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="border-slate-600 text-gray-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-base rounded-xl"
        >
          <Link to="/for-creators">
            For Creators
          </Link>
        </Button>
      </div>
      
      {/* Clean Social Proof */}
      <div className="flex items-center space-x-6">
        <div className="flex -space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-10 h-10 rounded-full border-2 border-slate-700"
          />
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-10 h-10 rounded-full border-2 border-slate-700"
          />
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-10 h-10 rounded-full border-2 border-slate-700"
          />
          <div className="w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center text-white font-medium text-sm">
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
            <span className="font-semibold text-sponsify-accent">2,500+</span> creators joined
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
