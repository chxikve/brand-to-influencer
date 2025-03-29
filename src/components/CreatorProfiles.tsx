
import React from 'react';
import { Link } from 'react-router-dom';
import CreatorCard from './CreatorCard';
import { creators } from '@/data/creators';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle, 
  CardFooter 
} from '@/components/ui/card';
import { TrendingUp, Mail, Users, ArrowRight, Star } from 'lucide-react';

const CreatorProfiles = () => {
  // Add more data points for creators
  const creatorStats = {
    totalCreators: "1,500+",
    averageEngagement: "5.7%",
    successfulCollaborations: "8,900+",
    categories: ["Tech", "Lifestyle", "Fashion", "Fitness", "Gaming", "Beauty", "Food", "Travel"]
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
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
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {creatorStats.categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs shadow-sm">
                {category}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <CreatorCard 
              key={creator.id} 
              creator={creator} 
              index={index} 
            />
          ))}
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
