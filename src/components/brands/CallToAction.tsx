
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Campaign?</h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with our team to create a customized creator marketing strategy for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
              Download Media Kit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
