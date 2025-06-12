
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {/* Main headline */}
      <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
        Sponsorships, <span className="text-yellow-400">Simplified.</span>
      </h1>
      
      {/* Description */}
      <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        Sponsify connects brands with creators, influencers, and event organizers, making partnerships smart, simple, and accessible.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg rounded-lg font-semibold"
        >
          Find Sponsors
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-2 border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg font-semibold"
        >
          Become a Sponsor
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
