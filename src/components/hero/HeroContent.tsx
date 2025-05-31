
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="animate-on-scroll text-left">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-sponsify-primary/10 dark:bg-sponsify-primary/20 text-sponsify-primary dark:text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
          <Sparkles className="w-4 h-4 mr-2" /> 
          AI-Powered Talent Discovery
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
        Connect brands with creators <br />
        <span className="text-gradient">effortlessly</span> with AI
      </h1>
      
      <p className="text-gray-300 text-xl mb-8 max-w-lg leading-relaxed">
        AI-powered tools that streamline bookings and keep you in control. 
        Connect brands with creators, manage partnerships, and grow your business.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild className="bg-sponsify-primary hover:bg-sponsify-primary/90 text-white px-8 py-4 text-lg rounded-full">
          <Link to="/register" className="inline-flex items-center justify-center">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full">
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
            className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-800"
          />
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-800"
          />
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-800"
          />
        </div>
        <p className="text-sm text-gray-400">
          <span className="font-medium text-white">2,500+</span> creators already joined
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
