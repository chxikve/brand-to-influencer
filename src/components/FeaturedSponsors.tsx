import React from 'react';
import { Zap, MessageSquare, TrendingUp, Users, Shield, BarChart } from 'lucide-react';

const FeaturedSponsors = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Matching',
      description: 'AI algorithms connect brands with creators based on audience, values, and performance metrics.'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Communication',
      description: 'Built-in messaging and proposal system keeps all conversations organized in one place.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Track campaign performance and ROI with comprehensive analytics and reporting tools.'
    },
    {
      icon: Users,
      title: 'Verified Profiles',
      description: 'All creators and brands are verified to ensure authentic and trustworthy partnerships.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Protected payment processing with escrow services for safe and timely transactions.'
    },
    {
      icon: BarChart,
      title: 'Performance Insights',
      description: 'Detailed metrics and insights help optimize future campaigns and partnerships.'
    }
  ];

  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
            Why Choose Sponsify
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl mx-auto">
            Everything you need for successful sponsorships
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
