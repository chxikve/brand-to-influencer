
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-sponsify-primary dark:text-white">About Us</h2>
          
          <div className="space-y-6 text-sponsify-secondary dark:text-gray-300">
            <p>
              Sponsify is a marketplace that makes sponsorships simple, smart, and accessible. We connect brands with creators, influencers, and event organizers, helping both sides find the right partnerships without the usual hassle.
            </p>
            
            <p>
              For brands, Sponsify is a way to reach the right audience through real, engaging collaborations—whether it's social media content, live events, or digital sponsorships. For creators and organizers, it's an easy way to get funding and support from brands that align with their work.
            </p>
            
            <p>
              No more endless emails or complicated negotiations—our platform streamlines everything with smart matchmaking, clear communication tools, and data-driven insights to help both sides get the most out of every partnership.
            </p>
            
            <p>
              Whether you're a brand looking to make an impact or a creator ready to land your next big deal, Sponsify is here to make sponsorships effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
