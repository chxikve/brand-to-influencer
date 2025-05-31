
import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sponsify-dark via-slate-800 to-sponsify-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-sponsify-primary to-sponsify-accent rounded-xl flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sponsify-lime to-sponsify-accent bg-clip-text text-transparent">
              SPONSIFY
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-sponsify-accent/10 border border-sponsify-accent/20 text-sponsify-accent px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" /> 
              Ready to Get Started?
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Start Your Creator
            <br />
            <span className="bg-gradient-to-r from-sponsify-lime to-sponsify-accent bg-clip-text text-transparent">
              Partnership Journey
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of brands already connecting with top creators. 
            Create your account and find your perfect creator match today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-sponsify-primary to-sponsify-accent hover:from-sponsify-primary/90 hover:to-sponsify-accent/90 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link to="/register" className="inline-flex items-center justify-center">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-sponsify-lime text-sponsify-lime hover:bg-sponsify-lime hover:text-sponsify-dark px-10 py-4 text-lg rounded-full transition-all">
              <Link to="/pricing" className="inline-flex items-center justify-center">
                View Plans
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-sponsify-accent rounded-full mr-2"></div>
              No setup fees
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-sponsify-lime rounded-full mr-2"></div>
              Cancel anytime
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-sponsify-pink rounded-full mr-2"></div>
              24/7 support
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sponsify-lime/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-sponsify-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sponsify-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
