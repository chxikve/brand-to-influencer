
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroHeader = () => {
  return (
    <div className="text-center mb-16 animate-on-scroll">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="bg-sponsify-primary/10 dark:bg-sponsify-primary/20 text-sponsify-primary dark:text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
          <Sparkles className="w-4 h-4 mr-2" /> 
          AI-Powered Talent Discovery
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
        Post gigs or find talent <br />
        <span className="text-gradient">effortlessly</span> with AI
      </h1>
      
      <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
        AI-powered tools that streamline bookings and keep you in control. 
        Connect brands with creators, manage partnerships, and grow your business.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full">
          <Link to="/register" className="inline-flex items-center justify-center">
            FIND TALENT <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full">
          <Link to="/for-creators" className="inline-flex items-center justify-center">
            POST A GIG
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroHeader;
