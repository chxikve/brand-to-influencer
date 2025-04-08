
import React from 'react';
import { Link } from 'react-router-dom';
import { creators } from '@/data/creators';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle, 
  CardFooter 
} from '@/components/ui/card';
import CreatorSlider from '@/features/creators/components/CreatorSlider';
import { TrendingUp, Mail, Users, ArrowRight, Star, BarChart, Globe, Award, TrendingUpIcon } from 'lucide-react';

const CreatorProfiles = () => {
  // Enhanced creator stats with more data points
  const creatorStats = {
    totalCreators: "1,500+",
    averageEngagement: "5.7%",
    successfulCollaborations: "8,900+",
    averageROI: "620%",
    globalReach: "120+ countries",
    topNiches: ["Tech", "Fashion", "Gaming", "Fitness", "Beauty", "Food", "Travel", "Finance", "Education", "Entertainment"],
    categories: ["Tech", "Lifestyle", "Fashion", "Fitness", "Gaming", "Beauty", "Food", "Travel", "Finance", "Education", "Entertainment", "Pets", "Sports", "DIY", "Music"]
  };

  // Top performing campaign types
  const campaignTypes = [
    { name: "Sponsored Content", performance: 92 },
    { name: "Product Reviews", performance: 87 },
    { name: "Brand Ambassadorships", performance: 83 },
    { name: "Affiliate Marketing", performance: 79 },
    { name: "Giveaways", performance: 75 },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Creators on Our Platform</h2>
          <p className="text-sponsify-secondary dark:text-gray-300 mb-6">
            Connect with influential content creators who are already finding success through Sponsify.
            Browse our network of verified creators across various niches.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-sponsify-primary dark:text-sponsify-accent" />
                <h3 className="text-2xl font-bold">{creatorStats.totalCreators}</h3>
                <p className="text-xs text-gray-500">Active Creators</p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-2 text-sponsify-primary dark:text-sponsify-accent" />
                <h3 className="text-2xl font-bold">{creatorStats.averageEngagement}</h3>
                <p className="text-xs text-gray-500">Avg. Engagement</p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Mail className="h-6 w-6 mx-auto mb-2 text-sponsify-primary dark:text-sponsify-accent" />
                <h3 className="text-2xl font-bold">{creatorStats.successfulCollaborations}</h3>
                <p className="text-xs text-gray-500">Successful Deals</p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Star className="h-6 w-6 mx-auto mb-2 text-sponsify-primary dark:text-sponsify-accent" />
                <h3 className="text-2xl font-bold">4.9/5</h3>
                <p className="text-xs text-gray-500">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Additional creator statistics */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/70 dark:bg-gray-800/70 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <TrendingUpIcon className="h-5 w-5 mr-2 text-sponsify-primary dark:text-sponsify-accent" />
                  Return on Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-sponsify-primary dark:text-sponsify-accent">{creatorStats.averageROI}</p>
                <p className="text-sm text-gray-500">Average ROI from creator campaigns</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 dark:bg-gray-800/70 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-sponsify-primary dark:text-sponsify-accent" />
                  Global Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-sponsify-primary dark:text-sponsify-accent">{creatorStats.globalReach}</p>
                <p className="text-sm text-gray-500">Audience geographic coverage</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 dark:bg-gray-800/70 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 mr-2 text-sponsify-primary dark:text-sponsify-accent" />
                  Top Performing Niches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {creatorStats.topNiches.slice(0, 5).map((niche, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-sponsify-light dark:bg-gray-700 rounded-full">
                      {niche}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Campaign performance data */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Top Performing Campaign Types</h3>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              {campaignTypes.map((campaign, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">{campaign.name}</span>
                    <span className="text-sm font-medium">{campaign.performance}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-sponsify-primary dark:bg-sponsify-accent h-2 rounded-full" 
                      style={{ width: `${campaign.performance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {creatorStats.categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs shadow-sm">
                {category}
              </span>
            ))}
          </div>
        </div>
        
        {/* Replace the grid with our new CreatorSlider component */}
        <div className="mb-12">
          <CreatorSlider 
            creators={creators} 
            title="Featured Creators"
            description="Swipe to see our top performing content creators"
          />
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Card className="max-w-2xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Ready to discover more creators?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform hosts over 1,500 verified creators across 20+ niches. Find the perfect match for your next campaign.
              </p>
            </CardContent>
            <CardFooter className="justify-center pb-6">
              <Button
                variant="default"
                size="lg"
                className="inline-flex items-center justify-center gap-2"
                asChild
              >
                <Link to="/more-creators">
                  Discover More Creators
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfiles;
