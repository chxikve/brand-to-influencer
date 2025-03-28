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
  avgShares?: string;
  platforms: string[];
  growthData: { month: string; followers: number }[];
  color: string;
  description: string;
  location?: string;
  joinedDate?: string;
  email?: string;
  website?: string;
  bio?: string;
  brandDeals?: number;
  completedCampaigns?: number;
  averageDealValue?: string;
  topCategories?: string[];
  audienceAge?: { name: string; value: number }[];
  audienceGender?: { name: string; value: number }[];
  audienceLocations?: { name: string; value: number }[];
  monthlyEngagement?: { month: string; engagement: number }[];
  contentPerformance?: { category: string; value: number }[];
  sponsorshipRate?: string;
  expertise?: string[];
  recentCollaborations?: string[];
  responseTime?: string;
  responseRate?: string;
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
    avgShares: "21K",
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
    description: "Tech reviewer and gaming streamer with a focus on honest product reviews and competitive gaming.",
    location: "San Francisco, CA",
    joinedDate: "September 2017",
    email: "alex@techgaming.com",
    website: "alexcreates.tech",
    bio: "Tech reviewer and gaming streamer with 7+ years of experience. Previously worked with Sony, Razer, and NVIDIA on product launches.",
    brandDeals: 24,
    completedCampaigns: 38,
    averageDealValue: "$4,800",
    topCategories: ["Gaming Hardware", "Peripherals", "Software"],
    audienceAge: [
      { name: "18-24", value: 42 },
      { name: "25-34", value: 35 },
      { name: "35-44", value: 15 },
      { name: "45+", value: 8 }
    ],
    audienceGender: [
      { name: "Male", value: 68 },
      { name: "Female", value: 29 },
      { name: "Other", value: 3 }
    ],
    audienceLocations: [
      { name: "United States", value: 62 },
      { name: "Canada", value: 12 },
      { name: "UK", value: 10 },
      { name: "Germany", value: 5 },
      { name: "Other", value: 11 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 5.8 },
      { month: "Feb", engagement: 5.9 },
      { month: "Mar", engagement: 6.1 },
      { month: "Apr", engagement: 6.0 },
      { month: "May", engagement: 6.3 },
      { month: "Jun", engagement: 6.2 },
    ],
    contentPerformance: [
      { category: "Reviews", value: 82 },
      { category: "Tutorials", value: 75 },
      { category: "Unboxing", value: 68 },
      { category: "Gameplay", value: 90 },
      { category: "Vlogs", value: 53 },
    ],
    sponsorshipRate: "$3,500 - $5,500 per post",
    expertise: ["Hardware Testing", "Gameplay Analysis", "Tech Trends"],
    recentCollaborations: ["NVIDIA", "Logitech", "Asus ROG"],
    responseTime: "24-48 hours",
    responseRate: "92%"
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
    avgShares: "15K",
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
    description: "Fashion creator sharing sustainable style tips and behind-the-scenes looks at the fashion industry.",
    location: "New York, NY",
    joinedDate: "March 2018",
    email: "sophia@fashionforward.com",
    website: "sophialifestyle.com",
    bio: "Fashion creator with a focus on sustainable style. Worked with H&M, Madewell and Anthropologie on exclusive sustainable collections.",
    brandDeals: 36,
    completedCampaigns: 52,
    averageDealValue: "$6,200",
    topCategories: ["Sustainable Fashion", "Beauty", "Home Decor"],
    audienceAge: [
      { name: "18-24", value: 28 },
      { name: "25-34", value: 45 },
      { name: "35-44", value: 20 },
      { name: "45+", value: 7 }
    ],
    audienceGender: [
      { name: "Male", value: 22 },
      { name: "Female", value: 76 },
      { name: "Other", value: 2 }
    ],
    audienceLocations: [
      { name: "United States", value: 55 },
      { name: "UK", value: 15 },
      { name: "Canada", value: 8 },
      { name: "Australia", value: 7 },
      { name: "Other", value: 15 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 4.5 },
      { month: "Feb", engagement: 4.6 },
      { month: "Mar", engagement: 4.7 },
      { month: "Apr", engagement: 4.9 },
      { month: "May", engagement: 4.7 },
      { month: "Jun", engagement: 4.8 },
    ],
    contentPerformance: [
      { category: "Lookbooks", value: 88 },
      { category: "Hauls", value: 74 },
      { category: "Style Tips", value: 82 },
      { category: "Brand Collabs", value: 67 },
      { category: "DIY", value: 71 },
    ],
    sponsorshipRate: "$5,000 - $8,000 per post",
    expertise: ["Sustainable Fashion", "Fashion Styling", "Brand Integration"],
    recentCollaborations: ["H&M", "Reformation", "Glossier"],
    responseTime: "12-24 hours",
    responseRate: "95%"
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
    avgShares: "8.4K",
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
    description: "Fitness coach sharing workout routines, nutrition advice, and mental wellness strategies.",
    location: "Austin, TX",
    joinedDate: "January 2020",
    email: "marcus@fitlife.com",
    website: "marcusfitness.com",
    bio: "Certified personal trainer and nutrition coach. Partnered with Under Armour, Gymshark, and Optimum Nutrition on fitness campaigns.",
    brandDeals: 18,
    completedCampaigns: 29,
    averageDealValue: "$3,500",
    topCategories: ["Fitness Apparel", "Supplements", "Exercise Equipment"],
    audienceAge: [
      { name: "18-24", value: 32 },
      { name: "25-34", value: 48 },
      { name: "35-44", value: 16 },
      { name: "45+", value: 4 }
    ],
    audienceGender: [
      { name: "Male", value: 65 },
      { name: "Female", value: 34 },
      { name: "Other", value: 1 }
    ],
    audienceLocations: [
      { name: "United States", value: 68 },
      { name: "Canada", value: 9 },
      { name: "Australia", value: 8 },
      { name: "UK", value: 6 },
      { name: "Other", value: 9 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 7.1 },
      { month: "Feb", engagement: 7.3 },
      { month: "Mar", engagement: 7.4 },
      { month: "Apr", engagement: 7.2 },
      { month: "May", engagement: 7.6 },
      { month: "Jun", engagement: 7.5 },
    ],
    contentPerformance: [
      { category: "Workouts", value: 91 },
      { category: "Nutrition", value: 76 },
      { category: "Motivation", value: 84 },
      { category: "Challenges", value: 82 },
      { category: "Reviews", value: 68 },
    ],
    sponsorshipRate: "$2,500 - $4,500 per post",
    expertise: ["HIIT Training", "Nutrition Planning", "Fitness Equipment"],
    recentCollaborations: ["Gymshark", "MyProtein", "Fitbit"],
    responseTime: "24 hours",
    responseRate: "89%"
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
    avgShares: "12K",
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
    description: "Professional chef sharing easy-to-follow recipes and kitchen hacks for home cooks of all skill levels.",
    location: "Chicago, IL",
    joinedDate: "June 2019",
    email: "jay@culinarycreations.com",
    website: "jaycooks.food",
    bio: "Classically trained chef with 10+ years in Michelin-starred restaurants, now creating accessible recipes for home cooks.",
    brandDeals: 22,
    completedCampaigns: 34,
    averageDealValue: "$4,200",
    topCategories: ["Kitchen Appliances", "Cookware", "Food Products"],
    audienceAge: [
      { name: "18-24", value: 15 },
      { name: "25-34", value: 42 },
      { name: "35-44", value: 30 },
      { name: "45+", value: 13 }
    ],
    audienceGender: [
      { name: "Male", value: 35 },
      { name: "Female", value: 63 },
      { name: "Other", value: 2 }
    ],
    audienceLocations: [
      { name: "United States", value: 58 },
      { name: "Canada", value: 11 },
      { name: "UK", value: 9 },
      { name: "Australia", value: 7 },
      { name: "Other", value: 15 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 5.3 },
      { month: "Feb", engagement: 5.5 },
      { month: "Mar", engagement: 5.6 },
      { month: "Apr", engagement: 5.8 },
      { month: "May", engagement: 5.7 },
      { month: "Jun", engagement: 5.7 },
    ],
    contentPerformance: [
      { category: "Quick Recipes", value: 87 },
      { category: "Equipment Reviews", value: 72 },
      { category: "Technique Guides", value: 84 },
      { category: "Food Science", value: 78 },
      { category: "Restaurant Recreation", value: 91 },
    ],
    sponsorshipRate: "$3,000 - $6,000 per post",
    expertise: ["Recipe Development", "Food Photography", "Culinary Education"],
    recentCollaborations: ["KitchenAid", "Blue Apron", "Le Creuset"],
    responseTime: "48 hours",
    responseRate: "85%"
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
    description: "Solo traveler documenting hidden gems and off-the-beaten-path adventures around the world.",
    location: "Paris, France",
    joinedDate: "October 2016",
    email: "elenatravel@gmail.com",
    website: "elenatravel.com",
    bio: "Solo traveler with a passion for exploring new destinations and sharing her experiences with others.",
    brandDeals: 12,
    completedCampaigns: 18,
    averageDealValue: "$2,500",
    topCategories: ["Travel Tips", "Adventure Destinations", "Food & Drink"],
    audienceAge: [
      { name: "18-24", value: 25 },
      { name: "25-34", value: 30 },
      { name: "35-44", value: 25 },
      { name: "45+", value: 10 }
    ],
    audienceGender: [
      { name: "Male", value: 45 },
      { name: "Female", value: 55 },
      { name: "Other", value: 0 }
    ],
    audienceLocations: [
      { name: "Europe", value: 75 },
      { name: "Asia", value: 15 },
      { name: "North America", value: 10 },
      { name: "Other", value: 5 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 6.5 },
      { month: "Feb", engagement: 6.7 },
      { month: "Mar", engagement: 6.9 },
      { month: "Apr", engagement: 7.1 },
      { month: "May", engagement: 7.3 },
      { month: "Jun", engagement: 7.5 },
    ],
    contentPerformance: [
      { category: "Travel Guides", value: 88 },
      { category: "Adventure Stories", value: 74 },
      { category: "Food Reviews", value: 82 },
      { category: "Photography", value: 67 },
      { category: "Vlogs", value: 53 },
    ],
    sponsorshipRate: "$3,000 - $5,000 per post",
    expertise: ["Travel Planning", "Adventure Photography", "Food & Drink"],
    recentCollaborations: ["Airbnb", "National Geographic", "Lonely Planet"],
    responseTime: "24-48 hours",
    responseRate: "92%"
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
    avgShares: "10K",
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
    description: "UI/UX designer sharing design principles, creative process insights, and industry trends.",
    location: "Los Angeles, CA",
    joinedDate: "February 2019",
    email: "ryandesigns@gmail.com",
    website: "ryandesigns.com",
    bio: "UI/UX designer with a focus on creating intuitive and user-friendly interfaces. Partnered with Adobe, Google, and Microsoft on design projects.",
    brandDeals: 14,
    completedCampaigns: 22,
    averageDealValue: "$4,000",
    topCategories: ["UI/UX Design", "Prototyping", "Wireframing"],
    audienceAge: [
      { name: "18-24", value: 20 },
      { name: "25-34", value: 35 },
      { name: "35-44", value: 25 },
      { name: "45+", value: 10 }
    ],
    audienceGender: [
      { name: "Male", value: 55 },
      { name: "Female", value: 45 },
      { name: "Other", value: 0 }
    ],
    audienceLocations: [
      { name: "United States", value: 75 },
      { name: "Canada", value: 15 },
      { name: "Australia", value: 10 },
      { name: "Other", value: 5 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 7.1 },
      { month: "Feb", engagement: 7.3 },
      { month: "Mar", engagement: 7.5 },
      { month: "Apr", engagement: 7.7 },
      { month: "May", engagement: 7.9 },
      { month: "Jun", engagement: 8.1 },
    ],
    contentPerformance: [
      { category: "Design Articles", value: 88 },
      { category: "Prototyping Tutorials", value: 74 },
      { category: "Wireframing Tips", value: 82 },
      { category: "Case Studies", value: 67 },
      { category: "Vlogs", value: 53 },
    ],
    sponsorshipRate: "$3,000 - $5,000 per post",
    expertise: ["UI/UX Design", "Prototyping", "Wireframing"],
    recentCollaborations: ["Adobe", "Google", "Microsoft"],
    responseTime: "24-48 hours",
    responseRate: "92%"
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
    avgShares: "11K",
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
    description: "Singer-songwriter and producer sharing original music, covers, and behind-the-scenes of the music industry.",
    location: "Los Angeles, CA",
    joinedDate: "January 2018",
    email: "zoemusic@gmail.com",
    website: "zoemusic.com",
    bio: "Singer-songwriter and producer with a focus on creating original music and collaborating with other artists. Partnered with Spotify, Apple Music, and Amazon Music on music releases.",
    brandDeals: 16,
    completedCampaigns: 24,
    averageDealValue: "$5,000",
    topCategories: ["Original Music", "Collaborations", "Music Production"],
    audienceAge: [
      { name: "18-24", value: 25 },
      { name: "25-34", value: 30 },
      { name: "35-44", value: 25 },
      { name: "45+", value: 10 }
    ],
    audienceGender: [
      { name: "Male", value: 45 },
      { name: "Female", value: 55 },
      { name: "Other", value: 0 }
    ],
    audienceLocations: [
      { name: "United States", value: 75 },
      { name: "Canada", value: 15 },
      { name: "Australia", value: 10 },
      { name: "Other", value: 5 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 6.5 },
      { month: "Feb", engagement: 6.7 },
      { month: "Mar", engagement: 6.9 },
      { month: "Apr", engagement: 7.1 },
      { month: "May", engagement: 7.3 },
      { month: "Jun", engagement: 7.5 },
    ],
    contentPerformance: [
      { category: "Music Videos", value: 88 },
      { category: "Collaboration Stories", value: 74 },
      { category: "Music Reviews", value: 82 },
      { category: "Live Performances", value: 67 },
      { category: "Vlogs", value: 53 },
    ],
    sponsorshipRate: "$3,000 - $5,000 per post",
    expertise: ["Music Writing", "Collaboration", "Music Production"],
    recentCollaborations: ["Spotify", "Apple Music", "Amazon Music"],
    responseTime: "24-48 hours",
    responseRate: "92%"
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
    avgShares: "9K",
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
    description: "Financial advisor breaking down complex investment strategies and personal finance for beginners.",
    location: "New York, NY",
    joinedDate: "March 2017",
    email: "davidfinance@gmail.com",
    website: "davidfinance.com",
    bio: "Financial advisor with a focus on helping individuals make informed investment decisions. Partnered with Fidelity, Vanguard, and Charles Schwab on financial planning projects.",
    brandDeals: 12,
    completedCampaigns: 18,
    averageDealValue: "$3,000",
    topCategories: ["Investment Strategies", "Personal Finance", "Financial Planning"],
    audienceAge: [
      { name: "18-24", value: 25 },
      { name: "25-34", value: 30 },
      { name: "35-44", value: 25 },
      { name: "45+", value: 10 }
    ],
    audienceGender: [
      { name: "Male", value: 55 },
      { name: "Female", value: 45 },
      { name: "Other", value: 0 }
    ],
    audienceLocations: [
      { name: "United States", value: 75 },
      { name: "Canada", value: 15 },
      { name: "Australia", value: 10 },
      { name: "Other", value: 5 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 7.1 },
      { month: "Feb", engagement: 7.3 },
      { month: "Mar", engagement: 7.5 },
      { month: "Apr", engagement: 7.7 },
      { month: "May", engagement: 7.9 },
      { month: "Jun", engagement: 8.1 },
    ],
    contentPerformance: [
      { category: "Investment Articles", value: 88 },
      { category: "Personal Finance Tips", value: 74 },
      { category: "Financial Planning Guides", value: 82 },
      { category: "Case Studies", value: 67 },
      { category: "Vlogs", value: 53 },
    ],
    sponsorshipRate: "$3,000 - $5,000 per post",
    expertise: ["Investment Analysis", "Personal Finance", "Financial Planning"],
    recentCollaborations: ["Fidelity", "Vanguard", "Charles Schwab"],
    responseTime: "24-48 hours",
    responseRate: "92%"
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
    avgShares: "13K",
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
    description: "Wellness coach sharing meditation techniques, mindfulness practices, and holistic approaches to health.",
    location: "San Francisco, CA",
    joinedDate: "October 2016",
    email: "sarahwellness@gmail.com",
    website: "sarahwellness.com",
    bio: "Wellness coach with a focus on helping individuals achieve a healthy and balanced lifestyle. Partnered with Headspace, Calm, and Mindful on wellness projects.",
    brandDeals: 10,
    completedCampaigns: 16,
    averageDealValue: "$2,000",
    topCategories: ["Meditation Techniques", "Mindfulness Practices", "Holistic Approaches"],
    audienceAge: [
      { name: "18-24", value: 25 },
      { name: "25-34", value: 30 },
      { name: "35-44", value: 25 },
      { name: "45+", value: 10 }
    ],
    audienceGender: [
      { name: "Male", value: 45 },
      { name: "Female", value: 55 },
      { name: "Other", value: 0 }
    ],
    audienceLocations: [
      { name: "United States", value: 75 },
      { name: "Canada", value: 15 },
      { name: "Australia", value: 10 },
      { name: "Other", value: 5 }
    ],
    monthlyEngagement: [
      { month: "Jan", engagement: 6.5 },
      { month: "Feb", engagement: 6.7 },
      { month: "Mar", engagement: 6.9 },
      { month: "Apr", engagement: 7.1 },
      { month: "May", engagement: 7.3 },
      { month: "Jun", engagement: 7.5 },
    ],
    contentPerformance: [
      { category: "Meditation Articles", value: 88 },
      { category: "Mindfulness Tips", value: 74 },
      { category: "Holistic Approaches", value: 82 },
      { category: "Case Studies", value: 67 },
      { category: "Vlogs", value: 53 },
    ],
    sponsorshipRate: "$3,000 - $5,000 per post",
    expertise: ["Meditation Techniques", "Mindfulness Practices", "Holistic Approaches"],
    recentCollaborations: ["Headspace", "Calm", "Mindful"],
    responseTime: "24-48 hours",
    responseRate: "92%"
  }
];

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
