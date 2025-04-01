
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EventAnalyticsReport from '@/components/analytics/EventAnalyticsReport';
import CreatorAnalyticsReport from '@/components/analytics/CreatorAnalyticsReport';
import LocationAnalyticsReport from '@/components/analytics/LocationAnalyticsReport';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 pb-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Sponsorship Analytics</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive measurement and reporting for all your sponsorship activities
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <div className="flex space-x-2 border rounded-lg p-1">
              <Button 
                variant={timeRange === 'week' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setTimeRange('week')}
              >
                Week
              </Button>
              <Button 
                variant={timeRange === 'month' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setTimeRange('month')}
              >
                Month
              </Button>
              <Button 
                variant={timeRange === 'quarter' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setTimeRange('quarter')}
              >
                Quarter
              </Button>
              <Button 
                variant={timeRange === 'year' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setTimeRange('year')}
              >
                Year
              </Button>
            </div>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>How We Measure Success</CardTitle>
              <CardDescription>
                Our comprehensive analytics approach measures the effectiveness of your sponsorship investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Event Sponsorship</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Attendance & engagement metrics</li>
                    <li>Brand visibility measurements</li>
                    <li>Lead generation & conversions</li>
                    <li>Social media mentions & reach</li>
                    <li>Post-event surveys & sentiment</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Content Creators</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Engagement rate & quality</li>
                    <li>Audience demographic match</li>
                    <li>Content performance metrics</li>
                    <li>Click-through & conversion rates</li>
                    <li>Sentiment analysis & brand lift</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Physical Advertising</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Foot traffic measurements</li>
                    <li>QR code & unique URL tracking</li>
                    <li>Sales lift in target locations</li>
                    <li>Dwell time & interaction rates</li>
                    <li>Brand recall surveys</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-2">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="events">Event Sponsorship</TabsTrigger>
                <TabsTrigger value="creators">Content Creators</TabsTrigger>
                <TabsTrigger value="locations">Physical Advertising</TabsTrigger>
              </TabsList>
              
              <TabsContent value="events" className="mt-0">
                <EventAnalyticsReport timeRange={timeRange} />
              </TabsContent>
              
              <TabsContent value="creators" className="mt-0">
                <CreatorAnalyticsReport timeRange={timeRange} />
              </TabsContent>
              
              <TabsContent value="locations" className="mt-0">
                <LocationAnalyticsReport timeRange={timeRange} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
