
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What is <span className="text-yellow-400">Sponsify</span>?
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Sponsify is a marketplace designed to revolutionize the sponsorship landscape. We bridge the gap between brands and creative agents, be it content creators, event organizers, or sports teams, fostering meaningful collaborations without the traditional complexities.
              </p>
              
              <div>
                <p className="font-semibold text-white mb-2">For brands:</p>
                <p>
                  Sponsify offers a direct channel to authentic audience engagement through strategic partnerships. Whether you're looking to amplify your brand presence or align with specific content collaborations, we help you find the perfect match.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-white mb-2">For creators and organizers:</p>
                <p>
                  Sponsify is your gateway to securing funding and support from brands that resonate with your goals and values.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium">
                Marketplace
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Creator working"
                className="w-full h-80 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
