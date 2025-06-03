
import React from 'react';
import { Users, Search, FileCheck, Zap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: 'Create Your Profile',
      description: 'Set up your brand profile with goals, target audience, and campaign preferences.',
      number: '01'
    },
    {
      icon: Search,
      title: 'AI-Powered Matching',
      description: 'Our algorithm finds creators that perfectly align with your brand values and audience.',
      number: '02'
    },
    {
      icon: FileCheck,
      title: 'Collaborate & Create',
      description: 'Work directly with creators, manage campaigns, and track deliverables seamlessly.',
      number: '03'
    },
    {
      icon: Zap,
      title: 'Measure Success',
      description: 'Monitor performance with real-time analytics and optimize for better results.',
      number: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-sponsify-accent/10 border border-sponsify-accent/20 text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Simple Process,{' '}
            <span className="bg-gradient-to-r from-sponsify-accent to-sponsify-primary bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From discovery to campaign execution, our platform streamlines every step of the creator partnership journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 z-0"></div>
                )}
                
                <div className="relative bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 hover:border-sponsify-accent/30 dark:hover:border-sponsify-accent/30 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-sponsify-accent to-sponsify-primary rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-gray-200 dark:text-gray-700">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="AI Technology" 
              className="w-24 h-24 rounded-xl object-cover shadow-md"
            />
            <div className="text-left">
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Powered by Advanced AI</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Our machine learning algorithms analyze thousands of data points to ensure perfect brand-creator matches.
              </p>
              <button className="text-sponsify-accent hover:text-sponsify-accent/80 inline-flex items-center text-sm font-semibold transition-colors">
                Learn more about our technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
