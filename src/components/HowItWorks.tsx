
import React from 'react';
import { Users, Search, FileCheck, Zap } from 'lucide-react';

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
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Simple Process,{' '}
            <span className="bg-gradient-to-r from-sponsify-accent to-sponsify-primary bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From discovery to campaign execution, our platform streamlines every step
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-sponsify-accent/30 dark:hover:border-sponsify-accent/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-sponsify-accent to-sponsify-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
