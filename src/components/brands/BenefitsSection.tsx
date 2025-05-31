
import React from 'react';
import { Target, Users, BarChart3, Shield, Zap, Sparkles } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Targeted Matching",
      description: "AI-powered algorithm finds creators perfectly aligned with your brand values and target audience.",
      color: "from-sponsify-primary to-sponsify-accent"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Verified Creators",
      description: "Access to vetted content creators with proven track records and authentic engagement.",
      color: "from-sponsify-lime to-sponsify-primary"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Track campaign performance with detailed insights and ROI measurements.",
      color: "from-sponsify-accent to-sponsify-pink"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payments",
      description: "Protected transactions with milestone-based payments and dispute resolution.",
      color: "from-sponsify-pink to-sponsify-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sponsify-dark to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-sponsify-lime/10 border border-sponsify-lime/20 text-sponsify-lime px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" /> 
              Platform Benefits
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose 
            <span className="bg-gradient-to-r from-sponsify-lime to-sponsify-accent bg-clip-text text-transparent">
              {" "}Sponsify
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Everything you need to build successful creator partnerships and scale your brand presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:border-sponsify-accent/30 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
