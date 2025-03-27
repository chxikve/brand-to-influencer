
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  TrendingUp, 
  MessageSquare, 
  Users, 
  Star, 
  Instagram, 
  Youtube, 
  Twitter,
  Mail,
  Map,
  Globe,
  Calendar,
  Briefcase,
  BarChart4,
  DollarSign,
  Heart,
  Share2
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
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Creator data (in a real app, this would come from a database or API)
const creatorsData = [
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    handle: "@alexcreates",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Tech & Gaming",
    location: "San Francisco, CA",
    bio: "Tech reviewer and gaming streamer with 7+ years of experience. Previously worked with Sony, Razer, and NVIDIA on product launches.",
    followers: "1.8M",
    engagementRate: "6.2%",
    avgLikes: "112K",
    avgComments: "3.2K",
    avgShares: "21K",
    platforms: ["instagram", "youtube", "twitter"],
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
    growthData: [
      { month: "Jan", followers: 1400000 },
      { month: "Feb", followers: 1450000 },
      { month: "Mar", followers: 1530000 },
      { month: "Apr", followers: 1620000 },
      { month: "May", followers: 1680000 },
      { month: "Jun", followers: 1800000 },
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
    color: "#8B5CF6",
    joinedDate: "September 2017",
    email: "alex@techgaming.com",
    website: "alexcreates.tech",
    description: "Tech reviewer and gaming streamer with a focus on honest product reviews and competitive gaming."
  },
  {
    id: "sophia-chen",
    name: "Sophia Chen",
    handle: "@sophialifestyle",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Fashion & Lifestyle",
    location: "New York, NY",
    bio: "Fashion creator with a focus on sustainable style. Worked with H&M, Madewell and Anthropologie on exclusive sustainable collections.",
    followers: "2.4M",
    engagementRate: "4.8%",
    avgLikes: "97K",
    avgComments: "5.1K",
    avgShares: "15K",
    platforms: ["instagram", "youtube"],
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
    growthData: [
      { month: "Jan", followers: 2100000 },
      { month: "Feb", followers: 2180000 },
      { month: "Mar", followers: 2240000 },
      { month: "Apr", followers: 2320000 },
      { month: "May", followers: 2380000 },
      { month: "Jun", followers: 2400000 },
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
    color: "#EC4899",
    joinedDate: "March 2018",
    email: "sophia@fashionforward.com",
    website: "sophialifestyle.com",
    description: "Fashion creator sharing sustainable style tips and behind-the-scenes looks at the fashion industry."
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    handle: "@marcusfitness",
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    niche: "Fitness & Wellness",
    location: "Austin, TX",
    bio: "Certified personal trainer and nutrition coach. Partnered with Under Armour, Gymshark, and Optimum Nutrition on fitness campaigns.",
    followers: "895K",
    engagementRate: "7.5%",
    avgLikes: "68K",
    avgComments: "2.3K",
    avgShares: "8.4K",
    platforms: ["instagram", "twitter"],
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
    growthData: [
      { month: "Jan", followers: 685000 },
      { month: "Feb", followers: 720000 },
      { month: "Mar", followers: 760000 },
      { month: "Apr", followers: 810000 },
      { month: "May", followers: 865000 },
      { month: "Jun", followers: 895000 },
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
    color: "#10B981",
    joinedDate: "January 2020",
    email: "marcus@fitlife.com",
    website: "marcusfitness.com",
    description: "Fitness coach sharing workout routines, nutrition advice, and mental wellness strategies."
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const CreatorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const creator = creatorsData.find(creator => creator.id === id);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const goBack = () => {
    navigate(-1);
  };
  
  // Format numbers for better readability
  const formatFollowers = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value;
  };
  
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={20} className="text-[#E1306C]" />;
      case 'youtube':
        return <Youtube size={20} className="text-[#FF0000]" />;
      case 'twitter':
        return <Twitter size={20} className="text-[#1DA1F2]" />;
      default:
        return null;
    }
  };
  
  if (!creator) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-32">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={goBack} 
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">Creator not found</h1>
          </div>
          <p>Sorry, the creator you're looking for doesn't exist or has been removed.</p>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={goBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Creators
          </Button>
        </div>
        
        {/* Creator Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-32" 
                     style={{ backgroundColor: creator.color + "20" }}></div>
                <div className="px-6 pb-6 pt-0 -mt-16 flex flex-col items-center">
                  <Avatar className="h-32 w-32 border-4 border-white dark:border-gray-900 shadow-md">
                    <AvatarImage src={creator.avatar} alt={creator.name} />
                    <AvatarFallback>{creator.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold mt-4">{creator.name}</h1>
                  <p className="text-sponsify-secondary dark:text-gray-400">{creator.handle}</p>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <Map size={14} className="text-gray-500" />
                    <span>{creator.location}</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    {creator.platforms.map((platform, i) => (
                      <Button key={i} size="icon" variant="outline" className="rounded-full">
                        {getPlatformIcon(platform)}
                      </Button>
                    ))}
                  </div>
                  <div className="w-full mt-6 border-t pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xl font-bold">{creator.followers}</p>
                        <p className="text-xs text-gray-500">Followers</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold">{creator.engagementRate}</p>
                        <p className="text-xs text-gray-500">Engagement</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold">{creator.brandDeals}</p>
                        <p className="text-xs text-gray-500">Brand Deals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase size={16} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Niche</p>
                    <p className="font-medium">{creator.niche}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{creator.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="font-medium">{creator.website}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Joined</p>
                    <p className="font-medium">{creator.joinedDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">Brand Collaborations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign size={16} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Average Deal Value</p>
                    <p className="font-bold">{creator.averageDealValue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart4 size={16} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Completed Campaigns</p>
                    <p className="font-bold">{creator.completedCampaigns}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-2">Top Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {creator.topCategories.map((category, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{creator.bio}</p>
              </CardContent>
              <CardFooter className="border-t flex justify-between pt-4">
                <Button variant="outline" className="gap-1">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
                <Button className="gap-1" style={{ backgroundColor: creator.color }}>
                  <DollarSign className="h-4 w-4" />
                  Hire for Campaign
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-center">Age Distribution</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={creator.audienceAge}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {creator.audienceAge.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-center">Gender Breakdown</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={creator.audienceGender}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {creator.audienceGender.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-center">Geographic Distribution</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={creator.audienceLocations}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {creator.audienceLocations.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-base">Follower Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
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
                          <linearGradient id={`gradient-followers`} x1="0" y1="0" x2="0" y2="1">
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
                          fill={`url(#gradient-followers)`}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-base">Engagement Rate (%)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ChartContainer
                      config={{
                        engagement: { color: creator.color, label: "Engagement %" }
                      }}
                      className="h-full aspect-auto"
                    >
                      <AreaChart
                        data={creator.monthlyEngagement}
                        margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient id={`gradient-engagement`} x1="0" y1="0" x2="0" y2="1">
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
                          tickLine={false}
                          axisLine={false}
                          width={30}
                        />
                        <ChartTooltip
                          content={<ChartTooltipContent labelFormatter={(label) => `${label} 2023`} />}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="engagement" 
                          stroke={creator.color} 
                          fillOpacity={1}
                          fill={`url(#gradient-engagement)`}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Content Performance by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={creator.contentPerformance}
                      margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    >
                      <XAxis 
                        dataKey="category" 
                        tick={{ fontSize: 10 }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 10 }}
                        tickLine={false}
                        axisLine={false}
                        width={30}
                      />
                      <Tooltip />
                      <Bar dataKey="value" fill={creator.color} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-medium">Performance Score: 100 = Excellent, 0 = Poor</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatorProfile;
