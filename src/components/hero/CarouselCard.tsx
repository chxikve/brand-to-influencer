
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
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
            {iconComponent}
            <span className="text-sm font-semibold text-gray-900">{label}</span>
          </div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
