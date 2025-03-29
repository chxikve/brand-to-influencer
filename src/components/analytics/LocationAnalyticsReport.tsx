
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Example data for location analytics
const footTrafficData = [
  { location: 'Downtown Mall', before: 1250, during: 1680, after: 1420 },
  { location: 'Central Plaza', before: 980, during: 1520, after: 1180 },
  { location: 'Westfield Shopping', before: 1480, during: 1940, after: 1560 },
  { location: 'Harborview Center', before: 750, during: 1120, after: 840 },
  { location: 'Metro Station', before: 2100, during: 2680, after: 2240 },
];

const conversionData = [
  { day: 'Monday', in_store: 45, online: 68 },
  { day: 'Tuesday', in_store: 52, online: 72 },
  { day: 'Wednesday', in_store: 58, online: 80 },
  { day: 'Thursday', in_store: 63, online: 77 },
  { day: 'Friday', in_store: 78, online: 92 },
  { day: 'Saturday', in_store: 95, online: 85 },
  { day: 'Sunday', in_store: 73, online: 88 },
];

const qrCodeScanData = [
  { hour: '9am', scans: 12 },
  { hour: '10am', scans: 18 },
  { hour: '11am', scans: 25 },
  { hour: '12pm', scans: 42 },
  { hour: '1pm', scans: 48 },
  { hour: '2pm', scans: 35 },
  { hour: '3pm', scans: 28 },
  { hour: '4pm', scans: 24 },
  { hour: '5pm', scans: 30 },
  { hour: '6pm', scans: 38 },
  { hour: '7pm', scans: 32 },
  { hour: '8pm', scans: 20 },
];

const locationTypeData = [
  { name: 'Retail Stores', value: 40 },
  { name: 'Restaurants', value: 25 },
  { name: 'Shopping Malls', value: 15 },
  { name: 'Transit Stations', value: 12 },
  { name: 'Entertainment', value: 8 },
];

const COLORS = ['#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];

interface LocationAnalyticsReportProps {
  timeRange: 'week' | 'month' | 'quarter' | 'year';
}

const LocationAnalyticsReport: React.FC<LocationAnalyticsReportProps> = ({ timeRange }) => {
  // In a real application, we would filter data based on timeRange
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Foot Traffic Impact</CardTitle>
          <CardDescription>Changes in visitor counts before, during, and after campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ChartContainer 
              config={{
                before: { theme: { light: '#94a3b8', dark: '#94a3b8' } },
                during: { theme: { light: '#8b5cf6', dark: '#8b5cf6' } },
                after: { theme: { light: '#10b981', dark: '#10b981' } }
              }}
            >
              <BarChart data={footTrafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="before" name="Before Campaign" fill="var(--color-before)" />
                <Bar dataKey="during" name="During Campaign" fill="var(--color-during)" />
                <Bar dataKey="after" name="After Campaign" fill="var(--color-after)" />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Conversion Tracking</CardTitle>
            <CardDescription>In-store vs online conversions during campaign</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer 
                config={{
                  in_store: { theme: { light: '#8b5cf6', dark: '#8b5cf6' } },
                  online: { theme: { light: '#10b981', dark: '#10b981' } }
                }}
              >
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="in_store" name="In-Store" stroke="var(--color-in_store)" strokeWidth={2} />
                  <Line type="monotone" dataKey="online" name="Online" stroke="var(--color-online)" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>QR Code Scans by Hour</CardTitle>
            <CardDescription>Tracking engagement throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer 
                config={{
                  scans: { theme: { light: '#ec4899', dark: '#ec4899' } }
                }}
              >
                <BarChart data={qrCodeScanData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="scans" name="QR Scans" fill="var(--color-scans)" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Location Type Performance</CardTitle>
            <CardDescription>Effectiveness by location category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer config={{}}>
                <PieChart>
                  <Pie
                    data={locationTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {locationTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dwell Time Analysis</CardTitle>
            <CardDescription>Average time spent at advertising locations</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Avg. Dwell Time</TableHead>
                  <TableHead>Interaction Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Downtown Mall</TableCell>
                  <TableCell>4:25 min</TableCell>
                  <TableCell>38%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Central Plaza</TableCell>
                  <TableCell>3:15 min</TableCell>
                  <TableCell>28%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Westfield Shopping</TableCell>
                  <TableCell>5:10 min</TableCell>
                  <TableCell>42%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Harborview Center</TableCell>
                  <TableCell>2:45 min</TableCell>
                  <TableCell>24%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Metro Station</TableCell>
                  <TableCell>1:30 min</TableCell>
                  <TableCell>18%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ROI by Location</CardTitle>
          <CardDescription>Investment, reach, and return metrics for physical advertising locations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Location</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>Estimated Reach</TableHead>
                <TableHead>Unique Scanners</TableHead>
                <TableHead>Conversion</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>ROI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Downtown Mall</TableCell>
                <TableCell>$4,200</TableCell>
                <TableCell>24,500</TableCell>
                <TableCell>1,245</TableCell>
                <TableCell>168</TableCell>
                <TableCell>$10,080</TableCell>
                <TableCell className="text-green-600">2.4x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Central Plaza</TableCell>
                <TableCell>$3,800</TableCell>
                <TableCell>18,200</TableCell>
                <TableCell>935</TableCell>
                <TableCell>124</TableCell>
                <TableCell>$7,440</TableCell>
                <TableCell className="text-green-600">2.0x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Westfield Shopping</TableCell>
                <TableCell>$5,500</TableCell>
                <TableCell>32,800</TableCell>
                <TableCell>1,685</TableCell>
                <TableCell>215</TableCell>
                <TableCell>$16,125</TableCell>
                <TableCell className="text-green-600">2.9x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Harborview Center</TableCell>
                <TableCell>$2,800</TableCell>
                <TableCell>12,400</TableCell>
                <TableCell>635</TableCell>
                <TableCell>82</TableCell>
                <TableCell>$4,920</TableCell>
                <TableCell className="text-green-600">1.8x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Metro Station</TableCell>
                <TableCell>$4,800</TableCell>
                <TableCell>38,500</TableCell>
                <TableCell>1,125</TableCell>
                <TableCell>142</TableCell>
                <TableCell>$11,360</TableCell>
                <TableCell className="text-green-600">2.4x</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationAnalyticsReport;
