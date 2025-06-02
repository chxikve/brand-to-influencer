
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
      <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 shadow-md">
            {iconComponent}
            <span className="text-sm font-medium text-gray-900">{label}</span>
          </div>
          <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
