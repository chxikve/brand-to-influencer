
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
      <div className="glass-card dark:glass-card-dark rounded-3xl p-6 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/10 hover:border-white/20">
        <div className="relative overflow-hidden rounded-2xl">
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
            {iconComponent}
            <span className="text-sm font-semibold">{label}</span>
          </div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
