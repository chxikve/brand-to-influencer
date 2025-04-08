
import React from 'react';
import { creators } from '@/data/creators';
import { TrendingUp, Mail, Users, Star, TrendingUpIcon, Globe, Award } from 'lucide-react';
import CreatorSlider from '@/features/creators/components/CreatorSlider';
import StatsCard from '@/features/creators/components/StatsCard';
import StatsMetricCard from '@/features/creators/components/StatsMetricCard';
import CampaignPerformanceCard from '@/features/creators/components/CampaignPerformanceCard';
import CategoryTags from '@/features/creators/components/CategoryTags';
import CallToActionCard from '@/features/creators/components/CallToActionCard';

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
            <StatsCard 
              icon={Users} 
              value={creatorStats.totalCreators} 
              label="Active Creators"
            />
            <StatsCard 
              icon={TrendingUp} 
              value={creatorStats.averageEngagement} 
              label="Avg. Engagement"
            />
            <StatsCard 
              icon={Mail} 
              value={creatorStats.successfulCollaborations} 
              label="Successful Deals"
            />
            <StatsCard 
              icon={Star} 
              value="4.9/5" 
              label="Client Satisfaction"
            />
          </div>
          
          {/* Additional creator statistics */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsMetricCard 
              icon={TrendingUpIcon} 
              title="Return on Investment"
              value={creatorStats.averageROI}
              description="Average ROI from creator campaigns"
            />
            
            <StatsMetricCard 
              icon={Globe} 
              title="Global Reach"
              value={creatorStats.globalReach}
              description="Audience geographic coverage"
            />
            
            <StatsMetricCard 
              icon={Award} 
              title="Top Performing Niches"
              value={
                <div className="flex flex-wrap gap-1">
                  {creatorStats.topNiches.slice(0, 5).map((niche, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-sponsify-light dark:bg-gray-700 rounded-full">
                      {niche}
                    </span>
                  ))}
                </div>
              }
              description="Leading content creator categories"
            />
          </div>
          
          {/* Campaign performance data */}
          <CampaignPerformanceCard campaignTypes={campaignTypes} />
          
          <CategoryTags categories={creatorStats.categories} />
        </div>
        
        {/* Creator slider section */}
        <div className="mb-12">
          <CreatorSlider 
            creators={creators} 
            title="Featured Creators"
            description="Swipe to see our top performing content creators"
          />
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <CallToActionCard 
            title="Ready to discover more creators?"
            description="Our platform hosts over 1,500 verified creators across 20+ niches. Find the perfect match for your next campaign."
            buttonText="Discover More Creators"
            buttonLink="/more-creators"
          />
        </div>
      </div>
    </section>
  );
};

export default CreatorProfiles;
