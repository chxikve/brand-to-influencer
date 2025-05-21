
import React from 'react';

interface CarouselCardProps {
  imageSrc: string;
  imageAlt: string;
  iconComponent: React.ReactNode;
  label: string;
}

const CarouselCard = ({ imageSrc, imageAlt, iconComponent, label }: CarouselCardProps) => {
  return (
    <div className="glass-card dark:glass-card-dark rounded-2xl p-4 overflow-hidden">
      <div className="relative">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[520px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
          {iconComponent}
          <span className="text-sm font-medium">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
