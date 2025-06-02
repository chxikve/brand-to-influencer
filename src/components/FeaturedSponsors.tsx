
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
    <section className="py-16 border-y border-slate-800/50 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-sponsify-accent/10 border border-sponsify-accent/20 text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-sponsify-accent rounded-full"></div>
            Trusted Worldwide
          </div>
          <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto">
            Join <span className="text-sponsify-accent font-semibold">500+ leading brands</span> connecting with top creators
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center animate-on-scroll">
          {sponsors.map((sponsor, index) => {
            const IconComponent = sponsor.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-all duration-300 mb-2">
                  <IconComponent 
                    color={sponsor.color} 
                    size={24} 
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                  {sponsor.name}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
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
