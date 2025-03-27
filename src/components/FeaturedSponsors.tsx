
import React from 'react';
import { Instagram, Youtube, Facebook, Twitter, Linkedin, Github, Apple } from 'lucide-react';

const FeaturedSponsors = () => {
  // Using Lucide icons for recognizable tech brands instead of placeholder images
  const sponsors = [
    { name: 'Instagram', icon: Instagram, color: '#E1306C' },
    { name: 'YouTube', icon: Youtube, color: '#FF0000' },
    { name: 'Facebook', icon: Facebook, color: '#1877F2' },
    { name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2' },
    { name: 'GitHub', icon: Github, color: '#333333' },
    { name: 'Apple', icon: Apple, color: '#A2AAAD' },
  ];

  return (
    <section className="py-16 border-y border-sponsify-secondary/10 dark:border-slate-700/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-sponsify-secondary dark:text-gray-400 text-lg font-medium">
            Trusted by leading brands worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 animate-on-scroll">
          {sponsors.map((sponsor, index) => {
            const IconComponent = sponsor.icon;
            return (
              <div 
                key={index} 
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex flex-col items-center"
              >
                <IconComponent 
                  color={sponsor.color} 
                  size={32} 
                  strokeWidth={1.5}
                  className="mb-2"
                />
                <span className="text-xs font-medium text-sponsify-secondary dark:text-gray-400">
                  {sponsor.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
