
import { Instagram, Youtube, Twitter } from 'lucide-react';

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  niche: string;
  followers: string;
  engagementRate: string;
  avgLikes: string;
  avgComments: string;
  platforms: string[];
  growthData: { month: string; followers: number }[];
  color: string;
  description: string;
}

export const creators: Creator[] = [
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    handle: "@alexcreates",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Tech & Gaming",
    followers: "1.8M",
    engagementRate: "6.2%",
    avgLikes: "112K",
    avgComments: "3.2K",
    platforms: ["instagram", "youtube", "twitter"],
    growthData: [
      { month: "Jan", followers: 1400000 },
      { month: "Feb", followers: 1450000 },
      { month: "Mar", followers: 1530000 },
      { month: "Apr", followers: 1620000 },
      { month: "May", followers: 1680000 },
      { month: "Jun", followers: 1800000 },
    ],
    color: "#8B5CF6",
    description: "Tech reviewer and gaming streamer with a focus on honest product reviews and competitive gaming."
  },
  {
    id: "sophia-chen",
    name: "Sophia Chen",
    handle: "@sophialifestyle",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Fashion & Lifestyle",
    followers: "2.4M",
    engagementRate: "4.8%",
    avgLikes: "97K",
    avgComments: "5.1K",
    platforms: ["instagram", "youtube"],
    growthData: [
      { month: "Jan", followers: 2100000 },
      { month: "Feb", followers: 2180000 },
      { month: "Mar", followers: 2240000 },
      { month: "Apr", followers: 2320000 },
      { month: "May", followers: 2380000 },
      { month: "Jun", followers: 2400000 },
    ],
    color: "#EC4899",
    description: "Fashion creator sharing sustainable style tips and behind-the-scenes looks at the fashion industry."
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    handle: "@marcusfitness",
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Fitness & Wellness",
    followers: "895K",
    engagementRate: "7.5%",
    avgLikes: "68K",
    avgComments: "2.3K",
    platforms: ["instagram", "twitter"],
    growthData: [
      { month: "Jan", followers: 685000 },
      { month: "Feb", followers: 720000 },
      { month: "Mar", followers: 760000 },
      { month: "Apr", followers: 810000 },
      { month: "May", followers: 865000 },
      { month: "Jun", followers: 895000 },
    ],
    color: "#10B981",
    description: "Fitness coach sharing workout routines, nutrition advice, and mental wellness strategies."
  }
];

export const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'instagram':
      return <Instagram size={18} className="text-[#E1306C]" />;
    case 'youtube':
      return <Youtube size={18} className="text-[#FF0000]" />;
    case 'twitter':
      return <Twitter size={18} className="text-[#1DA1F2]" />;
    default:
      return null;
  }
};

export const formatFollowers = (value: number) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value;
};
