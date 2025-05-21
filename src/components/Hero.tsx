
import React from 'react';
import { ArrowRight, Star, Youtube, Calendar } from 'lucide-react';
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
                {/* YouTube Creators */}
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                        alt="Influencer at technology event" 
                        className="w-full h-[520px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
                        <Youtube className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium">YouTube Creator</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                        alt="Content creator with creative lighting" 
                        className="w-full h-[520px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
                        <Youtube className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium">Video Content</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* TikTok Creators */}
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                        alt="Social media content creators working together" 
                        className="w-full h-[520px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
                        {/* Using a custom SVG for TikTok instead */}
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                        <span className="text-sm font-medium">TikTok Creator</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167" 
                        alt="Smartphone content creator" 
                        className="w-full h-[520px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
                        {/* Using a custom SVG for TikTok instead */}
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                        <span className="text-sm font-medium">Short Form</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Events */}
                <CarouselItem>
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1531058020387-3be344556be6" 
                        alt="Marketing event with audience" 
                        className="w-full h-[520px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">Live Events</span>
                      </div>
                    </div>
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
                  <Youtube className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Video Content</p>
                  <p className="text-xs text-sponsify-secondary dark:text-gray-400">370+ brands</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 -right-8 glass-card dark:glass-card-dark rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: "1s"}}>
              <div className="flex items-center gap-3 p-1">
                <div className="flex items-center justify-center w-10 h-10 bg-sponsify-primary/10 dark:bg-sponsify-primary/20 rounded-full">
                  {/* Using a custom SVG for TikTok instead */}
                  <svg className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Short Form</p>
                  <p className="text-xs text-sponsify-secondary dark:text-gray-400">240+ brands</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 right-10 glass-card dark:glass-card-dark rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: "2s"}}>
              <div className="flex items-center gap-3 p-1">
                <div className="flex items-center justify-center w-10 h-10 bg-sponsify-primary/10 dark:bg-sponsify-primary/20 rounded-full">
                  <Calendar className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Events</p>
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
