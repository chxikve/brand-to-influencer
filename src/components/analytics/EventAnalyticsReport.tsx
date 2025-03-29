
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';

// Example data for event sponsorship analytics
const attendanceData = [
  { name: 'Creator Summit', attendance: 1200, leads: 350, roi: 2.4 },
  { name: 'Marketing Expo', attendance: 850, leads: 215, roi: 1.8 },
  { name: 'Tech Conference', attendance: 1500, leads: 420, roi: 3.1 },
  { name: 'Industry Meetup', attendance: 650, leads: 180, roi: 1.5 },
  { name: 'Brand Workshop', attendance: 350, leads: 125, roi: 2.2 },
];

const engagementData = [
  { name: 'Day 1', booth: 245, sessions: 120, networking: 80 },
  { name: 'Day 2', booth: 310, sessions: 175, networking: 135 },
  { name: 'Day 3', booth: 280, sessions: 155, networking: 110 },
];

const sentimentData = [
  { name: 'Very Positive', value: 35 },
  { name: 'Positive', value: 45 },
  { name: 'Neutral', value: 15 },
  { name: 'Negative', value: 4 },
  { name: 'Very Negative', value: 1 },
];

const socialMentionsData = [
  { name: 'Week 1', mentions: 145, reach: 24500, engagement: 3200 },
  { name: 'Week 2', mentions: 320, reach: 52000, engagement: 8400 },
  { name: 'Week 3', mentions: 210, reach: 38500, engagement: 5100 },
  { name: 'Week 4', mentions: 180, reach: 32000, engagement: 4200 },
];

interface EventAnalyticsReportProps {
  timeRange: 'week' | 'month' | 'quarter' | 'year';
}

const EventAnalyticsReport: React.FC<EventAnalyticsReportProps> = ({ timeRange }) => {
  // In a real application, we would filter data based on timeRange
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Event Performance Overview</CardTitle>
          <CardDescription>Key metrics for sponsored events in the last {timeRange}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ChartContainer 
              config={{
                attendance: { theme: { light: '#818cf8', dark: '#818cf8' } },
                leads: { theme: { light: '#22c55e', dark: '#22c55e' } },
                roi: { theme: { light: '#f59e0b', dark: '#f59e0b' } }
              }}
            >
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar yAxisId="left" dataKey="attendance" name="Attendance" fill="var(--color-attendance)" />
                <Bar yAxisId="left" dataKey="leads" name="Leads Generated" fill="var(--color-leads)" />
                <Bar yAxisId="right" dataKey="roi" name="ROI (x)" fill="var(--color-roi)" />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Daily Engagement</CardTitle>
            <CardDescription>Breakdown of attendee interaction by day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer 
                config={{
                  booth: { theme: { light: '#8b5cf6', dark: '#8b5cf6' } },
                  sessions: { theme: { light: '#ec4899', dark: '#ec4899' } },
                  networking: { theme: { light: '#06b6d4', dark: '#06b6d4' } }
                }}
              >
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="booth" name="Booth Visits" stroke="var(--color-booth)" strokeWidth={2} />
                  <Line type="monotone" dataKey="sessions" name="Session Attendance" stroke="var(--color-sessions)" strokeWidth={2} />
                  <Line type="monotone" dataKey="networking" name="Networking Connections" stroke="var(--color-networking)" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media Impact</CardTitle>
            <CardDescription>Brand mentions and reach from event</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer 
                config={{
                  mentions: { theme: { light: '#f43f5e', dark: '#f43f5e' } },
                  engagement: { theme: { light: '#0ea5e9', dark: '#0ea5e9' } }
                }}
              >
                <LineChart data={socialMentionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="mentions" name="Social Mentions" stroke="var(--color-mentions)" strokeWidth={2} />
                  <Line type="monotone" dataKey="engagement" name="Engagement" stroke="var(--color-engagement)" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event ROI Analysis</CardTitle>
          <CardDescription>Detailed breakdown of investment and returns by event</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Name</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>Leads Generated</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>ROI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Creator Summit</TableCell>
                <TableCell>$15,000</TableCell>
                <TableCell>350</TableCell>
                <TableCell>42</TableCell>
                <TableCell>$36,000</TableCell>
                <TableCell className="text-green-600">2.4x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marketing Expo</TableCell>
                <TableCell>$12,000</TableCell>
                <TableCell>215</TableCell>
                <TableCell>26</TableCell>
                <TableCell>$21,600</TableCell>
                <TableCell className="text-green-600">1.8x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tech Conference</TableCell>
                <TableCell>$18,000</TableCell>
                <TableCell>420</TableCell>
                <TableCell>58</TableCell>
                <TableCell>$55,800</TableCell>
                <TableCell className="text-green-600">3.1x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Industry Meetup</TableCell>
                <TableCell>$8,000</TableCell>
                <TableCell>180</TableCell>
                <TableCell>19</TableCell>
                <TableCell>$12,000</TableCell>
                <TableCell className="text-green-600">1.5x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Brand Workshop</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>125</TableCell>
                <TableCell>14</TableCell>
                <TableCell>$11,000</TableCell>
                <TableCell className="text-green-600">2.2x</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventAnalyticsReport;
