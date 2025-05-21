
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="animate-on-scroll text-left">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-sponsify-primary/10 dark:bg-sponsify-primary/20 text-sponsify-primary dark:text-sponsify-accent px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
          <Star className="w-4 h-4 mr-1" /> Featured Partnerships
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <span className="text-gradient">Sponsify</span> helps brands, events and content creators easily and efficiently discover valuable <span className="text-gradient">partnerships</span>
      </h1>
      <p className="text-sponsify-secondary dark:text-gray-300 text-lg mb-8 max-w-lg">
        Join thousands of creators who use Sponsify to find and manage brand deals, negotiate better rates, and grow their creative business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild className="bg-sponsify-primary hover:bg-sponsify-primary/90 dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90">
          <Link to="/register" className="inline-flex items-center justify-center">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/analytics" className="inline-flex items-center justify-center">
            View Analytics
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
        <p className="text-sm text-sponsify-secondary dark:text-gray-400">
          <span className="font-medium text-foreground">2,500+</span> creators already joined
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
