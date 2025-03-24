
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Hear from brands and creators who have found success through Sponsify's platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="glass-card dark:glass-card-dark p-6 rounded-xl animate-on-scroll delay-100">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" 
                alt="Jane Smith" 
                className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white dark:border-slate-700"
              />
              <div>
                <h4 className="font-medium text-lg">Jane Smith</h4>
                <p className="text-sponsify-secondary dark:text-gray-400 text-sm">Tech Influencer</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sponsify-secondary dark:text-gray-300">
              "Sponsify transformed how I work with brands. The platform made it easy to find companies that align with my values, and the contract management tools streamlined the entire process."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="glass-card dark:glass-card-dark p-6 rounded-xl animate-on-scroll delay-200">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" 
                alt="Mark Johnson" 
                className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white dark:border-slate-700"
              />
              <div>
                <h4 className="font-medium text-lg">Mark Johnson</h4>
                <p className="text-sponsify-secondary dark:text-gray-400 text-sm">Marketing Director, TechGear</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sponsify-secondary dark:text-gray-300">
              "As a brand, finding the right creators was always challenging until we found Sponsify. The quality of matches and the detailed analytics have significantly improved our ROI on influencer campaigns."
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="glass-card dark:glass-card-dark p-6 rounded-xl animate-on-scroll delay-300">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" 
                alt="Sarah Chen" 
                className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white dark:border-slate-700"
              />
              <div>
                <h4 className="font-medium text-lg">Sarah Chen</h4>
                <p className="text-sponsify-secondary dark:text-gray-400 text-sm">Lifestyle Creator</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sponsify-secondary dark:text-gray-300">
              "The secure payment system and milestone tracking gave me confidence in every partnership. Sponsify has helped me grow my creator business by 200% in just one year!"
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#" className="btn-primary inline-flex items-center justify-center">
            Read More Success Stories
          </a>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-sponsify-light/50 to-transparent dark:from-slate-800/30 dark:to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-sponsify-light/50 to-transparent dark:from-slate-800/30 dark:to-transparent -z-10"></div>
    </section>
  );
};

export default Testimonials;
