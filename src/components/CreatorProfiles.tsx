
import React from 'react';
import { 
  TrendingUp, 
  MessageSquare, 
  Users, 
  Star, 
  Instagram, 
  Youtube, 
  Twitter
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const CreatorProfiles = () => {
  const creators = [
    {
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
  
  const getPlatformIcon = (platform) => {
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

  const formatFollowers = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value;
  };
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Creators on Our Platform</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Connect with influential content creators who are already finding success through Sponsify.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <Card key={index} className="overflow-hidden animate-on-scroll hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3 border-2 border-primary/20">
                      <AvatarImage src={creator.avatar} alt={creator.name} />
                      <AvatarFallback>{creator.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{creator.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {creator.handle} · {creator.niche}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {creator.platforms.map((platform, i) => (
                      <span key={i} className="inline-block">
                        {getPlatformIcon(platform)}
                      </span>
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">{creator.description}</p>
                
                <div className="mb-4 h-28">
                  <ChartContainer
                    config={{
                      followers: { color: creator.color, label: "Followers" }
                    }}
                    className="h-full aspect-auto"
                  >
                    <AreaChart
                      data={creator.growthData}
                      margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={creator.color} stopOpacity={0.6} />
                          <stop offset="100%" stopColor={creator.color} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="month" 
                        tick={{ fontSize: 10 }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 10 }}
                        tickFormatter={formatFollowers}
                        tickLine={false}
                        axisLine={false}
                        width={30}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent labelFormatter={(label) => `${label} 2023`} />}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="followers" 
                        stroke={creator.color} 
                        fillOpacity={1}
                        fill={`url(#gradient-${index})`}
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <Users size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500">Followers</span>
                    </div>
                    <p className="font-semibold">{creator.followers}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500">Engagement</span>
                    </div>
                    <p className="font-semibold">{creator.engagementRate}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <MessageSquare size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500">Comments</span>
                    </div>
                    <p className="font-semibold">{creator.avgComments}</p>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4 flex justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-sm font-medium">Top {index + 1}% Creator</span>
                </div>
                <button className="text-sm font-medium text-primary hover:underline">
                  View Profile
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <a href="#" className="btn-primary inline-flex items-center justify-center">
            Discover More Creators
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfiles;
