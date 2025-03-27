
import React from 'react';
import CreatorCard from './CreatorCard';
import { creators } from '@/data/creators';

const CreatorProfiles = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Creators on Our Platform</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Connect with influential content creators who are already finding success through Sponsify.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <CreatorCard 
              key={creator.id} 
              creator={creator} 
              index={index} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <a href="#" className="btn-primary inline-flex items-center justify-center">
            Discover More Creators
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfiles;
