
import React from 'react';
import { ArrowRight, Star, Camera, Youtube, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="animate-on-scroll text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-sponsify-primary/10 dark:bg-sponsify-primary/20 text-sponsify-primary dark:text-sponsify-accent px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                <Star className="w-4 h-4 mr-1" /> Featured Partnerships
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Sponsify</span> helps brands, events and content creators easily and efficiently discover valuable <span className="text-gradient">partnerships</span>
            </h1>
            <p className="text-sponsify-secondary dark:text-gray-300 text-lg mb-8 max-w-lg">
              Join thousands of creators who use Sponsify to find and manage brand deals, negotiate better rates, and grow their creative business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-sponsify-primary hover:bg-sponsify-primary/90 dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90">
                <Link to="/register" className="inline-flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/analytics" className="inline-flex items-center justify-center">
                  View Analytics
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Creator" 
                  className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-800"
                />
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Creator" 
                  className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-800"
                />
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Creator" 
                  className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-800"
                />
              </div>
              <p className="text-sm text-sponsify-secondary dark:text-gray-400">
                <span className="font-medium text-foreground">2,500+</span> creators already joined
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block animate-on-scroll delay-200">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Female creator with laptop" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Male content creator" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Content creator working" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Team of creators collaboration" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Male creator working" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative -left-2" />
                <CarouselNext className="relative -right-2" />
              </div>
            </Carousel>
            
            <div className="absolute -bottom-12 -left-12 glass-card dark:glass-card-dark rounded-xl p-3 shadow-lg animate-float">
              <div className="flex items-center gap-3 p-1">
                <div className="flex items-center justify-center w-10 h-10 bg-sponsify-primary/10 dark:bg-sponsify-primary/20 rounded-full">
                  <Camera className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Photography</p>
                  <p className="text-xs text-sponsify-secondary dark:text-gray-400">240+ brands</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 -right-8 glass-card dark:glass-card-dark rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: "1s"}}>
              <div className="flex items-center gap-3 p-1">
                <div className="flex items-center justify-center w-10 h-10 bg-sponsify-primary/10 dark:bg-sponsify-primary/20 rounded-full">
                  <Youtube className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Video Content</p>
                  <p className="text-xs text-sponsify-secondary dark:text-gray-400">370+ brands</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 right-10 glass-card dark:glass-card-dark rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: "2s"}}>
              <div className="flex items-center gap-3 p-1">
                <div className="flex items-center justify-center w-10 h-10 bg-sponsify-primary/10 dark:bg-sponsify-primary/20 rounded-full">
                  <Palette className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Digital Art</p>
                  <p className="text-xs text-sponsify-secondary dark:text-gray-400">180+ brands</p>
                </div>
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
