
import React from 'react';
import TalentCard from './TalentCard';

const TalentShowcase = () => {
  const talents = [
    {
      id: 1,
      name: "Alex Rivera",
      category: "YouTube Creator",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Tech Reviews", "Gaming"]
    },
    {
      id: 2,
      name: "Sarah Chen",
      category: "Instagram Influencer", 
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c2?w=400&h=400&fit=crop&crop=face",
      specialties: ["Fashion", "Lifestyle"]
    },
    {
      id: 3,
      name: "Marcus Johnson",
      category: "TikTok Creator",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialties: ["Comedy", "Dance"]
    },
    {
      id: 4,
      name: "Event Collective",
      category: "Live Events",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=400&fit=crop&crop=center",
      specialties: ["Corporate", "Music"]
    },
    {
      id: 5,
      name: "Creative Studio",
      category: "Content Production",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=center",
      specialties: ["Video", "Photography"]
    },
    {
      id: 6,
      name: "Digital Agency",
      category: "Brand Partnerships",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=center",
      specialties: ["Strategy", "Campaigns"]
    }
  ];

  return (
    <div className="animate-on-scroll delay-200">
      <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talents.map((talent, index) => (
            <TalentCard 
              key={talent.id} 
              talent={talent} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentShowcase;
