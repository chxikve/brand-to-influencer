
import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="animate-on-scroll text-left">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-sponsify-primary to-sponsify-accent rounded-xl flex items-center justify-center">
          <Zap className="w-7 h-7 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-sponsify-lime to-sponsify-accent bg-clip-text text-transparent">
          SPONSIFY
        </span>
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-sponsify-primary/10 border border-sponsify-primary/20 text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
          <Sparkles className="w-4 h-4 mr-2" /> 
          AI-Powered Talent Discovery
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
        Connect brands with creators <br />
        <span className="bg-gradient-to-r from-sponsify-lime to-sponsify-accent bg-clip-text text-transparent">
          effortlessly
        </span> with AI
      </h1>
      
      <p className="text-gray-300 text-xl mb-8 max-w-lg leading-relaxed">
        AI-powered tools that streamline bookings and keep you in control. 
        Connect brands with creators, manage partnerships, and grow your business.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild className="bg-gradient-to-r from-sponsify-primary to-sponsify-accent hover:from-sponsify-primary/90 hover:to-sponsify-accent/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
          <Link to="/register" className="inline-flex items-center justify-center">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="border-2 border-sponsify-lime text-sponsify-lime hover:bg-sponsify-lime hover:text-sponsify-dark px-8 py-4 text-lg rounded-full transition-all">
          <Link to="/for-creators" className="inline-flex items-center justify-center">
            For Creators
          </Link>
        </Button>
      </div>
      
      <div className="mt-8 flex items-center space-x-4">
        <div className="flex -space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-9 h-9 rounded-full border-2 border-sponsify-accent"
          />
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-9 h-9 rounded-full border-2 border-sponsify-lime"
          />
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-9 h-9 rounded-full border-2 border-sponsify-pink"
          />
        </div>
        <p className="text-sm text-gray-400">
          <span className="font-medium text-sponsify-accent">2,500+</span> creators already joined
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
