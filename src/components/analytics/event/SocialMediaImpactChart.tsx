
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { socialMentionsData } from '../data/eventData';

const SocialMediaImpactChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Impact</CardTitle>
        <CardDescription>Brand mentions and reach from event</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ChartContainer 
            config={{
              mentions: { theme: { light: '#f43f5e', dark: '#f43f5e' } },
              engagement: { theme: { light: '#0ea5e9', dark: '#0ea5e9' } }
            }}
          >
            <LineChart 
              data={socialMentionsData}
              margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ paddingTop: 15 }} />
              <Line type="monotone" dataKey="mentions" name="Social Mentions" stroke="var(--color-mentions)" strokeWidth={2} />
              <Line type="monotone" dataKey="engagement" name="Engagement" stroke="var(--color-engagement)" strokeWidth={2} />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaImpactChart;
