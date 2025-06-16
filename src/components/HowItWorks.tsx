import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Set up your brand or creator profile with your goals, audience, and preferences. Our AI learns what makes perfect matches.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02', 
      title: 'Get Matched',
      description: 'Our intelligent algorithm suggests relevant partnerships based on your criteria, audience overlap, and success metrics.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Collaborate & Grow',
      description: 'Manage your partnerships through our platform. Track performance, communicate seamlessly, and scale your success.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Three simple steps to success
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0">
                {/* Step Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`inline-block bg-gradient-to-r ${step.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-6`}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center text-gray-400 dark:text-gray-600">
                      <span className="text-sm">Next step</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </div>
                
                {/* Step Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 aspect-square flex items-center justify-center`}>
                    <div className="text-8xl font-bold text-white/20">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-200 dark:bg-gray-700 lg:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
