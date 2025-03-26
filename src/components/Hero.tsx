
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect <span className="text-gradient">Brands</span> with <span className="text-gradient">Creators</span> Seamlessly
            </h1>
            <p className="text-sponsify-secondary dark:text-gray-300 text-lg mb-8 max-w-lg">
              Sponsify simplifies sponsorship management with our innovative marketplace. Find perfect partnerships and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/" className="inline-flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/" className="inline-flex items-center justify-center">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block animate-on-scroll delay-200">
            <div className="relative">
              <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sponsify Platform" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 glass-card dark:glass-card-dark rounded-xl p-3 shadow-lg animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Creator Dashboard" 
                  className="w-48 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sponsify-light/50 to-transparent dark:from-slate-800/30 dark:to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;
