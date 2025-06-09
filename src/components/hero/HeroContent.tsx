
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="max-w-2xl">
      {/* Logo and brand */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-sponsify-accent to-sponsify-primary rounded-xl flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
          SPONSIFY
        </span>
      </div>
      
      {/* Main headline */}
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
        Connect brands with creators{' '}
        <span className="bg-gradient-to-r from-sponsify-accent to-sponsify-primary bg-clip-text text-transparent">
          effortlessly
        </span>
      </h1>
      
      {/* Description */}
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
        Streamline partnerships with AI-powered matching. Connect, manage, and grow your business with the right creator collaborations.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Button 
          size="lg" 
          asChild 
          className="bg-sponsify-accent hover:bg-sponsify-accent/90 text-white px-8 py-4 text-lg rounded-xl font-semibold"
        >
          <Link to="/register" className="inline-flex items-center justify-center">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-8 py-4 text-lg rounded-xl font-semibold"
        >
          <Link to="/for-creators">
            For Creators
          </Link>
        </Button>
      </div>
      
      {/* Simple social proof */}
      <div className="text-gray-600 dark:text-gray-400 text-sm">
        Join <span className="font-semibold text-sponsify-accent">2,500+ creators</span> already using Sponsify
      </div>
    </div>
  );
};

export default HeroContent;
