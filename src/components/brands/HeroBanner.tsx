
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect Your Brand with Top Content Creators</h1>
          <p className="text-xl mb-8 opacity-90">
            Drive authentic engagement and increase your ROI with creator partnerships tailored to your brand
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
