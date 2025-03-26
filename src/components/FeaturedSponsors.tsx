
import React from 'react';

const FeaturedSponsors = () => {
  // Sample logos with more realistic placeholder images
  const sponsors = [
    { name: 'Tech Brand 1', logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=50&q=80' },
    { name: 'Tech Brand 2', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=50&q=80' },
    { name: 'Fashion Brand', logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=50&q=80' },
    { name: 'Travel Company', logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=50&q=80' },
    { name: 'Food Brand', logo: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=50&q=80' },
    { name: 'Finance App', logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=50&q=80' },
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
                className="h-8 md:h-10 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
