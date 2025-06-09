
import React from 'react';
import { Instagram, Youtube, Facebook, Twitter, Linkedin, Github, Apple } from 'lucide-react';

const FeaturedSponsors = () => {
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
    <section className="py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with top creators across all major platforms
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {sponsors.map((sponsor, index) => {
            const IconComponent = sponsor.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <IconComponent 
                  color={sponsor.color} 
                  size={24} 
                  strokeWidth={1.5}
                  className="mb-2"
                />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
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
