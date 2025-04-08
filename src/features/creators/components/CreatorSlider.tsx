
import React from 'react';
import { Creator } from '@/data/creators';
import CreatorCard from '@/components/CreatorCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CreatorSliderProps {
  creators: Creator[];
  title?: string;
  description?: string;
}

const CreatorSlider: React.FC<CreatorSliderProps> = ({ 
  creators,
  title,
  description
}) => {
  return (
    <div className="w-full">
      {(title || description) && (
        <div className="mb-6 text-center">
          {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative px-4"
      >
        <CarouselContent className="-ml-4">
          {creators.map((creator, index) => (
            <CarouselItem key={creator.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <CreatorCard creator={creator} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4 px-4">
          <CarouselPrevious className="static transform-none h-9 w-9" />
          <CarouselNext className="static transform-none h-9 w-9" />
        </div>
      </Carousel>
    </div>
  );
};

export default CreatorSlider;
