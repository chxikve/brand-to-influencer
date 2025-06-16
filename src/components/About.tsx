import React from 'react';

const About = () => {
  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
              About Sponsify
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Simplifying sponsorship for the modern world
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Sponsify revolutionizes how brands and creators connect. Our AI-powered platform eliminates the complexity of traditional sponsorship deals, making partnerships accessible to everyone.
              </p>
              
              <div className="grid grid-cols-1 gap-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">For Brands</h3>
                    <p>Connect with authentic creators who align with your values and reach your target audience effectively.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">For Creators</h3>
                    <p>Monetize your content and grow your brand through meaningful partnerships with companies you believe in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Creator working"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-6 right-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ✨ AI Powered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
