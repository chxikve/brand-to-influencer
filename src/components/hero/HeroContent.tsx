
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800">
        <Sparkles className="w-4 h-4" />
        AI-Powered Sponsorship Platform
      </div>
      
      {/* Main headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
        Connect brands with creators,{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          effortlessly
        </span>
      </h1>
      
      {/* Description */}
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        We connect brands with athletes, events, and content creators to create impactful sponsorships and authentic partnerships.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Button 
          size="lg" 
          className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white px-8 py-4 text-lg rounded-2xl font-semibold h-14 shadow-lg"
          asChild
        >
          <Link to="/register">
            Find Sponsors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg rounded-2xl font-semibold h-14"
          asChild
        >
          <Link to="/register">
            Become a Sponsor
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">10k+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active Creators</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Brands</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">$2M+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Deals Closed</div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
