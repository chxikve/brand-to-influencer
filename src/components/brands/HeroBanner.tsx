
import React from 'react';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden min-h-screen bg-gradient-to-br from-sponsify-dark via-slate-800 to-sponsify-dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo and Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-sponsify-primary to-sponsify-accent rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-sponsify-lime to-sponsify-accent bg-clip-text text-transparent">
                SPONSIFY
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-sponsify-primary/10 border border-sponsify-primary/20 text-sponsify-accent px-6 py-3 rounded-full text-sm font-medium inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" /> 
              Brand Partnership Platform
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            Connect with top creators
            <br />
            <span className="bg-gradient-to-r from-sponsify-lime to-sponsify-accent bg-clip-text text-transparent">
              effortlessly
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover verified creators, streamline partnerships, and maximize your brand's reach 
            with our AI-powered matching platform designed for modern brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" asChild className="bg-gradient-to-r from-sponsify-primary to-sponsify-accent hover:from-sponsify-primary/90 hover:to-sponsify-accent/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link to="/register" className="inline-flex items-center justify-center">
                Find Creators <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-sponsify-accent text-sponsify-accent hover:bg-sponsify-accent hover:text-sponsify-dark px-8 py-4 text-lg rounded-full transition-all">
              <Link to="/pricing" className="inline-flex items-center justify-center">
                View Pricing
              </Link>
            </Button>
          </div>
          
          {/* Brand Logos */}
          <div className="flex items-center justify-center gap-8 opacity-60 mb-8">
            <div className="text-sm text-gray-400">Trusted by 500+ brands including:</div>
          </div>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
            {['Nike', 'Adidas', 'Samsung', 'Apple', 'Microsoft'].map((brand) => (
              <div key={brand} className="text-gray-400 font-medium text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sponsify-primary/10 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sponsify-lime/5 to-transparent -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sponsify-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-sponsify-pink/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gradient-to-r from-sponsify-lime to-sponsify-accent rounded-2xl flex items-center justify-center opacity-20">
          <Target className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-sponsify-primary to-sponsify-pink rounded-xl flex items-center justify-center opacity-20">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
