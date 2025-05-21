
import React from 'react';
import { Youtube, Calendar } from 'lucide-react';
import CarouselCard from './CarouselCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

const HeroCarousel = () => {
  // TikTok icon SVG
  const TikTokIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {/* YouTube Creators */}
          <CarouselItem>
            <CarouselCard
              imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              imageAlt="Influencer at technology event"
              iconComponent={<Youtube className="h-4 w-4 text-red-600" />}
              label="YouTube Creator"
            />
          </CarouselItem>
          <CarouselItem>
            <CarouselCard
              imageSrc="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
              imageAlt="Content creator with creative lighting"
              iconComponent={<Youtube className="h-4 w-4 text-red-600" />}
              label="Video Content"
            />
          </CarouselItem>

          {/* TikTok Creators */}
          <CarouselItem>
            <CarouselCard
              imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              imageAlt="Social media content creators working together"
              iconComponent={<TikTokIcon />}
              label="TikTok Creator"
            />
          </CarouselItem>
          <CarouselItem>
            <CarouselCard
              imageSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
              imageAlt="Smartphone content creator"
              iconComponent={<TikTokIcon />}
              label="Short Form"
            />
          </CarouselItem>

          {/* Events */}
          <CarouselItem>
            <CarouselCard
              imageSrc="https://images.unsplash.com/photo-1531058020387-3be344556be6"
              imageAlt="Marketing event with audience"
              iconComponent={<Calendar className="h-4 w-4 text-blue-600" />}
              label="Live Events"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative -left-2" />
          <CarouselNext className="relative -right-2" />
        </div>
      </Carousel>
      
      {/* Floating cards */}
      <FloatingCard 
        position="absolute -bottom-12 -left-12" 
        icon={<Youtube className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" />}
        title="Video Content"
        subtitle="370+ brands"
      />
      
      <FloatingCard 
        position="absolute top-10 -right-8" 
        icon={<TikTokIcon />}
        title="Short Form"
        subtitle="240+ brands"
        delay="1s"
      />
      
      <FloatingCard 
        position="absolute bottom-20 right-10" 
        icon={<Calendar className="w-5 h-5 text-sponsify-primary dark:text-sponsify-accent" />}
        title="Events"
        subtitle="180+ brands"
        delay="2s"
      />
    </div>
  );
};

// FloatingCard component defined within HeroCarousel
const FloatingCard = ({ 
  position, 
  icon, 
  title, 
  subtitle, 
  delay 
}: { 
  position: string, 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string, 
  delay?: string 
}) => {
  return (
    <div className={`${position} glass-card dark:glass-card-dark rounded-xl p-3 shadow-lg animate-float`} style={delay ? {animationDelay: delay} : {}}>
      <div className="flex items-center gap-3 p-1">
        <div className="flex items-center justify-center w-10 h-10 bg-sponsify-primary/10 dark:bg-sponsify-primary/20 rounded-full">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-sponsify-secondary dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
