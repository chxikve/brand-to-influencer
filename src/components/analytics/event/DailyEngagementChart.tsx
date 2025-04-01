
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
import { engagementData } from '../data/eventData';

const DailyEngagementChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Engagement</CardTitle>
        <CardDescription>Breakdown of attendee interaction by day</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ChartContainer 
            config={{
              booth: { theme: { light: '#8b5cf6', dark: '#8b5cf6' } },
              sessions: { theme: { light: '#ec4899', dark: '#ec4899' } },
              networking: { theme: { light: '#06b6d4', dark: '#06b6d4' } }
            }}
          >
            <LineChart 
              data={engagementData}
              margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ paddingTop: 15 }} />
              <Line type="monotone" dataKey="booth" name="Booth Visits" stroke="var(--color-booth)" strokeWidth={2} />
              <Line type="monotone" dataKey="sessions" name="Session Attendance" stroke="var(--color-sessions)" strokeWidth={2} />
              <Line type="monotone" dataKey="networking" name="Networking Connections" stroke="var(--color-networking)" strokeWidth={2} />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyEngagementChart;
