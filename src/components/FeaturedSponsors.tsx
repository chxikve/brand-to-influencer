
import React from 'react';
import { Zap, MessageSquare, TrendingUp } from 'lucide-react';

const FeaturedSponsors = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Matchmaking',
      description: 'Our algorithm connects brands and creators based on shared values, audience demographics, and goals.'
    },
    {
      icon: MessageSquare,
      title: 'Streamlined Communication',
      description: 'Manage conversations, proposals, and agreements all in one place.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Track performance and get accurate metrics to optimize your partnerships.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Choose <span className="text-yellow-400">Sponsify</span>?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            No more endless emails or complicated negotiations—our platform simplifies everything. Helping both sides save time. Whether you're a brand aiming to make unique or a creator ready for your next big deal, Sponsify is built to make sponsorships <span className="text-yellow-400 font-semibold">effortless</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
