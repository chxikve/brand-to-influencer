
import React from 'react';
import { Users, Search, FileCheck, Zap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-sponsify-light dark:bg-slate-800/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Sponsify Works</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Our platform makes it easy to connect brands with the perfect creator partners, simplifying the entire sponsorship process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card dark:glass-card-dark p-6 rounded-xl animate-on-scroll delay-100">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
              <Users className="text-sponsify-primary dark:text-sponsify-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Create Profile</h3>
            <p className="text-sponsify-secondary dark:text-gray-400 text-center">
              Build detailed profiles showcasing your brand or creator identity, audience, and partnership goals.
            </p>
          </div>
          
          <div className="glass-card dark:glass-card-dark p-6 rounded-xl animate-on-scroll delay-200">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
              <Search className="text-sponsify-primary dark:text-sponsify-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Find Matches</h3>
            <p className="text-sponsify-secondary dark:text-gray-400 text-center">
              Our AI-powered algorithm connects brands with creators based on audience demographics and partnership goals.
            </p>
          </div>
          
          <div className="glass-card dark:glass-card-dark p-6 rounded-xl animate-on-scroll delay-300">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
              <FileCheck className="text-sponsify-primary dark:text-sponsify-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Manage Deals</h3>
            <p className="text-sponsify-secondary dark:text-gray-400 text-center">
              Negotiate terms, create contracts, and track campaign deliverables - all in one streamlined platform.
            </p>
          </div>
          
          <div className="glass-card dark:glass-card-dark p-6 rounded-xl animate-on-scroll delay-400">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
              <Zap className="text-sponsify-primary dark:text-sponsify-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Grow Together</h3>
            <p className="text-sponsify-secondary dark:text-gray-400 text-center">
              Track performance, manage payments securely, and build lasting partnerships that drive results.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-block glass-card dark:glass-card-dark p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="AI Matching" 
                className="w-full md:w-64 h-auto rounded-lg shadow-md"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Powered by Smart AI</h3>
                <p className="text-sponsify-secondary dark:text-gray-400 mb-4">
                  Our advanced recommendation engine analyzes thousands of data points to suggest ideal partnership matches based on audience alignment, content quality, and past performance.
                </p>
                <a href="#" className="text-sponsify-primary dark:text-sponsify-accent hover:underline inline-flex items-center">
                  Learn more about our technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/50 to-transparent dark:from-slate-900/30 dark:to-transparent -z-10"></div>
    </section>
  );
};

export default HowItWorks;
