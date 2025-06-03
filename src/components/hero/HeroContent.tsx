
import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Zap } from 'lucide-react';
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
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-sponsify-accent/10 border border-sponsify-accent/20 text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
        <Sparkles className="w-4 h-4" />
        AI-Powered Platform
      </div>
      
      {/* Main headline */}
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
        Connect brands with creators{' '}
        <span className="bg-gradient-to-r from-sponsify-accent to-sponsify-primary bg-clip-text text-transparent">
          effortlessly
        </span>
      </h1>
      
      {/* Description */}
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-normal">
        Streamline partnerships with AI-powered matching. Connect, manage, and grow your business with the right creator collaborations.
      </p>
      
      {/* Feature highlights */}
      <div className="flex flex-wrap gap-4 mb-12">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="font-medium">Instant Matching</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="font-medium">Verified Creators</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <CheckCircle className="w-5 h-5 text-purple-500" />
          <span className="font-medium">Real-time Analytics</span>
        </div>
      </div>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Button 
          size="lg" 
          asChild 
          className="bg-sponsify-accent hover:bg-sponsify-accent/90 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
          className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg rounded-xl font-semibold"
        >
          <Link to="/for-creators">
            For Creators
          </Link>
        </Button>
      </div>
      
      {/* Social proof */}
      <div className="flex items-center gap-8">
        <div className="flex -space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-12 h-12 rounded-full border-3 border-white dark:border-gray-800 shadow-sm"
          />
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-12 h-12 rounded-full border-3 border-white dark:border-gray-800 shadow-sm"
          />
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Creator" 
            className="w-12 h-12 rounded-full border-3 border-white dark:border-gray-800 shadow-sm"
          />
          <div className="w-12 h-12 rounded-full border-3 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 font-semibold text-sm shadow-sm">
            +1K
          </div>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Join <span className="font-semibold text-sponsify-accent">2,500+ creators</span> already using Sponsify
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
