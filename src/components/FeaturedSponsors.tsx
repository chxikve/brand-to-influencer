
import React from 'react';

const FeaturedSponsors = () => {
  // Sample logos - in a real implementation, these would be actual logos
  const sponsors = [
    { name: 'Tech Brand 1', logo: 'https://via.placeholder.com/150x50/e0e0e0/808080?text=LOGO+1' },
    { name: 'Tech Brand 2', logo: 'https://via.placeholder.com/150x50/e0e0e0/808080?text=LOGO+2' },
    { name: 'Fashion Brand', logo: 'https://via.placeholder.com/150x50/e0e0e0/808080?text=LOGO+3' },
    { name: 'Travel Company', logo: 'https://via.placeholder.com/150x50/e0e0e0/808080?text=LOGO+4' },
    { name: 'Food Brand', logo: 'https://via.placeholder.com/150x50/e0e0e0/808080?text=LOGO+5' },
    { name: 'Finance App', logo: 'https://via.placeholder.com/150x50/e0e0e0/808080?text=LOGO+6' },
  ];

  return (
    <section className="py-16 border-y border-sponsify-secondary/10 dark:border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-sponsify-secondary dark:text-gray-400 text-lg">
            Trusted by leading brands and creators
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-on-scroll">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-8 md:h-10 w-auto" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
