
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
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Example data for creator analytics
const creatorPerformanceData = [
  { name: 'Emma Johnson', posts: 24, engagement: 5.8, clicks: 3200, conversions: 128 },
  { name: 'Alex Chen', posts: 18, engagement: 4.2, clicks: 2400, conversions: 86 },
  { name: 'Sarah Williams', posts: 30, engagement: 6.7, clicks: 4100, conversions: 164 },
  { name: 'James Wilson', posts: 15, engagement: 3.9, clicks: 1800, conversions: 72 },
  { name: 'Maya Patel', posts: 21, engagement: 5.2, clicks: 2700, conversions: 108 },
];

const audienceMatchData = [
  { name: 'Age Match', value: 85 },
  { name: 'Income Match', value: 72 },
  { name: 'Interest Match', value: 93 },
  { name: 'Location Match', value: 68 },
  { name: 'Platform Usage', value: 78 },
];

const contentTypeData = [
  { name: 'Reviews', value: 35 },
  { name: 'Tutorials', value: 25 },
  { name: 'Unboxings', value: 15 },
  { name: 'Stories/Reels', value: 20 },
  { name: 'Live Streams', value: 5 },
];

const brandLiftData = [
  { week: 'Week 1', awareness: 45, consideration: 30, preference: 25 },
  { week: 'Week 2', awareness: 52, consideration: 38, preference: 28 },
  { week: 'Week 3', awareness: 58, consideration: 44, preference: 32 },
  { week: 'Week 4', awareness: 65, consideration: 51, preference: 40 },
];

const COLORS = ['#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];

interface CreatorAnalyticsReportProps {
  timeRange: 'week' | 'month' | 'quarter' | 'year';
}

const CreatorAnalyticsReport: React.FC<CreatorAnalyticsReportProps> = ({ timeRange }) => {
  // In a real application, we would filter data based on timeRange
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Creator Performance Metrics</CardTitle>
          <CardDescription>Campaign results for top creators in the last {timeRange}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ChartContainer 
              config={{
                engagement: { theme: { light: '#8b5cf6', dark: '#8b5cf6' } },
                conversions: { theme: { light: '#10b981', dark: '#10b981' } }
              }}
            >
              <BarChart data={creatorPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar yAxisId="left" dataKey="engagement" name="Engagement Rate (%)" fill="var(--color-engagement)" />
                <Bar yAxisId="right" dataKey="conversions" name="Conversions" fill="var(--color-conversions)" />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Audience Match Analysis</CardTitle>
            <CardDescription>How well creators' audiences match your target demographics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer config={{}}>
                <RadarChart data={audienceMatchData} outerRadius={90}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar name="Audience Match %" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Type Distribution</CardTitle>
            <CardDescription>Breakdown of content formats used in campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer config={{}}>
                <PieChart>
                  <Pie
                    data={contentTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {contentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Brand Lift Measurements</CardTitle>
          <CardDescription>Changes in brand metrics during creator campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ChartContainer 
              config={{
                awareness: { theme: { light: '#8b5cf6', dark: '#8b5cf6' } },
                consideration: { theme: { light: '#ec4899', dark: '#ec4899' } },
                preference: { theme: { light: '#10b981', dark: '#10b981' } }
              }}
            >
              <LineChart data={brandLiftData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="awareness" name="Brand Awareness %" stroke="var(--color-awareness)" strokeWidth={2} />
                <Line type="monotone" dataKey="consideration" name="Brand Consideration %" stroke="var(--color-consideration)" strokeWidth={2} />
                <Line type="monotone" dataKey="preference" name="Brand Preference %" stroke="var(--color-preference)" strokeWidth={2} />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Creator ROI Comparison</CardTitle>
          <CardDescription>Return on investment metrics for individual creators</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Creator</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>Content Produced</TableHead>
                <TableHead>Total Reach</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>ROI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Emma Johnson</TableCell>
                <TableCell>$8,500</TableCell>
                <TableCell>24 posts</TableCell>
                <TableCell>245K</TableCell>
                <TableCell>128</TableCell>
                <TableCell>$25,600</TableCell>
                <TableCell className="text-green-600">3.0x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alex Chen</TableCell>
                <TableCell>$6,200</TableCell>
                <TableCell>18 posts</TableCell>
                <TableCell>178K</TableCell>
                <TableCell>86</TableCell>
                <TableCell>$17,200</TableCell>
                <TableCell className="text-green-600">2.8x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sarah Williams</TableCell>
                <TableCell>$9,800</TableCell>
                <TableCell>30 posts</TableCell>
                <TableCell>312K</TableCell>
                <TableCell>164</TableCell>
                <TableCell>$32,800</TableCell>
                <TableCell className="text-green-600">3.3x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">James Wilson</TableCell>
                <TableCell>$5,400</TableCell>
                <TableCell>15 posts</TableCell>
                <TableCell>142K</TableCell>
                <TableCell>72</TableCell>
                <TableCell>$14,400</TableCell>
                <TableCell className="text-green-600">2.7x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Maya Patel</TableCell>
                <TableCell>$7,200</TableCell>
                <TableCell>21 posts</TableCell>
                <TableCell>215K</TableCell>
                <TableCell>108</TableCell>
                <TableCell>$21,600</TableCell>
                <TableCell className="text-green-600">3.0x</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatorAnalyticsReport;
