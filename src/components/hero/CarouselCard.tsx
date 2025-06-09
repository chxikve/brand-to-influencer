
import React from 'react';

interface CarouselCardProps {
  imageSrc: string;
  imageAlt: string;
  iconComponent: React.ReactNode;
  label: string;
}

const CarouselCard = ({ imageSrc, imageAlt, iconComponent, label }: CarouselCardProps) => {
  return (
    <div className="group relative">
      <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
            {iconComponent}
            <span className="text-sm font-medium text-gray-900">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
