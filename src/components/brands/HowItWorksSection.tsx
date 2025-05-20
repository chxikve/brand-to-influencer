
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, BarChart4, Medal } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Sponsify Works</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Our simple, effective process helps you find and collaborate with creators that align with your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-on-scroll hover-scale">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>1. Find Your Creators</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Browse our curated network of verified content creators across various niches and platforms. Filter by audience demographics, engagement rates, and content style to find your perfect match.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>2. Build Your Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Define your campaign goals, budget, and content requirements. Our platform helps you create clear briefs and negotiate terms that work for both you and your chosen creators.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Medal className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>3. Measure Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Track performance with our comprehensive analytics dashboard. Monitor engagement, reach, conversions, and ROI across all your campaigns in real-time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
