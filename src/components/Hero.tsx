
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-sponsify-primary/10 to-sponsify-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -left-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-sponsify-accent/5 to-sponsify-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={heroRef} className="container mx-auto px-4 relative z-10 transition-all duration-1000 opacity-0 translate-y-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-sponsify-light rounded-full animate-fade-in">
            <span className="text-xs font-medium text-sponsify-primary">Connecting Brands & Creators</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{animationDelay: '200ms'}}>
            The <span className="text-gradient">Smarter Way</span> to<br />Manage Sponsorships
          </h1>
          
          <p className="text-sponsify-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '400ms'}}>
            Sponsify connects brands with creators through an intuitive platform that simplifies sponsorship management, from discovery to payment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '600ms'}}>
            <Link to="/" className="btn-primary w-full sm:w-auto">
              Start for free
            </Link>
            <Link to="/" className="btn-secondary w-full sm:w-auto">
              How it works <ArrowRight className="inline ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col items-center animate-fade-in" style={{animationDelay: '800ms'}}>
            <p className="text-sm text-sponsify-secondary mb-4">Trusted by leading brands and creators</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <div className="h-8 w-24 bg-sponsify-secondary/10 rounded-md"></div>
              <div className="h-8 w-24 bg-sponsify-secondary/10 rounded-md"></div>
              <div className="h-8 w-24 bg-sponsify-secondary/10 rounded-md"></div>
              <div className="h-8 w-24 bg-sponsify-secondary/10 rounded-md"></div>
              <div className="h-8 w-24 bg-sponsify-secondary/10 rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="relative mt-20 md:mt-32 glass-card rounded-xl shadow-medium overflow-hidden animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="h-[400px] md:h-[500px] bg-sponsify-light flex items-center justify-center">
            <div className="text-sponsify-secondary text-lg font-medium">Platform Preview</div>
          </div>
          
          <div className="absolute -bottom-1 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
