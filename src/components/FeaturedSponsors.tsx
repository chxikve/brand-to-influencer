
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
    <section className="py-20 bg-gray-50 dark:bg-slate-900 border-y border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Trusted by Industry Leaders
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join 500+ Leading Brands
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with top creators across all major platforms and grow your brand presence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {sponsors.map((sponsor, index) => {
            const IconComponent = sponsor.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
              >
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-slate-700 mb-3 transition-all duration-300">
                  <IconComponent 
                    color={sponsor.color} 
                    size={24} 
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {sponsor.name}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
