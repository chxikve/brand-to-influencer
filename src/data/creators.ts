
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

export const moreCreators: Creator[] = [
  {
    id: "jay-park",
    name: "Jay Park",
    handle: "@jaycooks",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Food & Cooking",
    followers: "1.2M",
    engagementRate: "5.7%",
    avgLikes: "78K",
    avgComments: "4.1K",
    platforms: ["instagram", "youtube"],
    growthData: [
      { month: "Jan", followers: 950000 },
      { month: "Feb", followers: 980000 },
      { month: "Mar", followers: 1040000 },
      { month: "Apr", followers: 1090000 },
      { month: "May", followers: 1150000 },
      { month: "Jun", followers: 1200000 },
    ],
    color: "#F97316",
    description: "Professional chef sharing easy-to-follow recipes and kitchen hacks for home cooks of all skill levels."
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    handle: "@elenatravel",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Travel & Adventure",
    followers: "3.1M",
    engagementRate: "4.2%",
    avgLikes: "135K",
    avgComments: "6.8K",
    platforms: ["instagram", "youtube", "twitter"],
    growthData: [
      { month: "Jan", followers: 2700000 },
      { month: "Feb", followers: 2800000 },
      { month: "Mar", followers: 2900000 },
      { month: "Apr", followers: 2950000 },
      { month: "May", followers: 3000000 },
      { month: "Jun", followers: 3100000 },
    ],
    color: "#0EA5E9",
    description: "Solo traveler documenting hidden gems and off-the-beaten-path adventures around the world."
  },
  {
    id: "ryan-lewis",
    name: "Ryan Lewis",
    handle: "@ryandesigns",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Design & UI/UX",
    followers: "780K",
    engagementRate: "6.9%",
    avgLikes: "54K",
    avgComments: "2.7K",
    platforms: ["instagram", "twitter"],
    growthData: [
      { month: "Jan", followers: 620000 },
      { month: "Feb", followers: 650000 },
      { month: "Mar", followers: 690000 },
      { month: "Apr", followers: 710000 },
      { month: "May", followers: 740000 },
      { month: "Jun", followers: 780000 },
    ],
    color: "#6366F1",
    description: "UI/UX designer sharing design principles, creative process insights, and industry trends."
  },
  {
    id: "zoe-thomas",
    name: "Zoe Thomas",
    handle: "@zoemusic",
    avatar: "https://images.unsplash.com/photo-1502323777036-f29e3972f5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Music & Performance",
    followers: "2.7M",
    engagementRate: "5.3%",
    avgLikes: "143K",
    avgComments: "8.2K",
    platforms: ["instagram", "youtube", "twitter"],
    growthData: [
      { month: "Jan", followers: 2300000 },
      { month: "Feb", followers: 2400000 },
      { month: "Mar", followers: 2450000 },
      { month: "Apr", followers: 2550000 },
      { month: "May", followers: 2650000 },
      { month: "Jun", followers: 2700000 },
    ],
    color: "#D946EF",
    description: "Singer-songwriter and producer sharing original music, covers, and behind-the-scenes of the music industry."
  },
  {
    id: "david-kim",
    name: "David Kim",
    handle: "@davidfinance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Finance & Investing",
    followers: "940K",
    engagementRate: "4.9%",
    avgLikes: "46K",
    avgComments: "3.8K",
    platforms: ["instagram", "twitter"],
    growthData: [
      { month: "Jan", followers: 750000 },
      { month: "Feb", followers: 790000 },
      { month: "Mar", followers: 840000 },
      { month: "Apr", followers: 880000 },
      { month: "May", followers: 910000 },
      { month: "Jun", followers: 940000 },
    ],
    color: "#22C55E",
    description: "Financial advisor breaking down complex investment strategies and personal finance for beginners."
  },
  {
    id: "sarah-patel",
    name: "Sarah Patel",
    handle: "@sarahwellness",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Wellness & Mindfulness",
    followers: "1.5M",
    engagementRate: "7.1%",
    avgLikes: "107K",
    avgComments: "5.4K",
    platforms: ["instagram", "youtube"],
    growthData: [
      { month: "Jan", followers: 1200000 },
      { month: "Feb", followers: 1280000 },
      { month: "Mar", followers: 1320000 },
      { month: "Apr", followers: 1380000 },
      { month: "May", followers: 1450000 },
      { month: "Jun", followers: 1500000 },
    ],
    color: "#A78BFA",
    description: "Wellness coach sharing meditation techniques, mindfulness practices, and holistic approaches to health."
  }
];

// Instead of returning JSX elements directly, let's return a mapping object
export const platformIcons = {
  instagram: { icon: Instagram, color: "#E1306C" },
  youtube: { icon: Youtube, color: "#FF0000" },
  twitter: { icon: Twitter, color: "#1DA1F2" }
};

export const formatFollowers = (value: number) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
};
