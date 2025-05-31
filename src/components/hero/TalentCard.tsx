
import React from 'react';
import { Star, Users, Play } from 'lucide-react';

interface TalentCardProps {
  talent: {
    id: number;
    name: string;
    category: string;
    rating: number;
    image: string;
    specialties: string[];
  };
  delay?: number;
}

const TalentCard = ({ talent, delay = 0 }: TalentCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl overflow-hidden border border-slate-600/30 hover:border-sponsify-primary/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={talent.image}
          alt={talent.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-yellow-400 font-medium">{talent.rating}</span>
          <span className="text-gray-400 text-sm">Stars</span>
        </div>

        {/* Name and Category */}
        <h3 className="text-white font-semibold text-lg mb-1">{talent.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{talent.category}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1">
          {talent.specialties.map((specialty, index) => (
            <span 
              key={index}
              className="bg-sponsify-primary/20 text-sponsify-accent text-xs px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-600/30">
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Users className="w-3 h-3" />
            <span>2.5K+</span>
          </div>
          <div className="text-sponsify-accent text-xs font-medium">
            Available
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
