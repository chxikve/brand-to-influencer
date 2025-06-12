
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Create Profile',
      description: 'Whether you\'re a brand or a creator, getting up your profile to share with the audience you\'re looking for.',
      color: 'bg-yellow-400 text-black'
    },
    {
      number: '2', 
      title: 'Discover & Connect',
      description: 'Browse profiles, use our smart filters, or let our matching algorithm suggest relevant partners. Send or receive proposals seamlessly.',
      color: 'bg-purple-600 text-white'
    },
    {
      number: '3',
      title: 'Collaborate & Grow',
      description: 'Once a partnership is agreed, use Sponsify to manage the collaboration. Track progress, communicate effectively, and achieve your goals together.',
      color: 'bg-pink-500 text-white'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="text-yellow-400">Sponsify</span> Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <div className="bg-yellow-100 rounded-2xl p-8 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Person working on laptop"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Right side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
