
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, BarChart, PieChart, LineChart } from 'lucide-react';

const ReportsManagement = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reports</h1>
        <div className="flex space-x-2">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 Days</SelectItem>
              <SelectItem value="last30days">Last 30 Days</SelectItem>
              <SelectItem value="last90days">Last 90 Days</SelectItem>
              <SelectItem value="lastyear">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Overview of all campaign metrics</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex items-center justify-center h-64 bg-muted/20 rounded-md">
              <BarChart className="h-16 w-16 text-muted" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Creator Distribution</CardTitle>
            <CardDescription>By category and engagement</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex items-center justify-center h-64 bg-muted/20 rounded-md">
              <PieChart className="h-16 w-16 text-muted" />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly revenue and forecast</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex items-center justify-center h-64 bg-muted/20 rounded-md">
              <LineChart className="h-16 w-16 text-muted" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>Generate and download detailed reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">Creator Performance Report</h3>
                  <p className="text-sm text-muted-foreground">Detailed metrics for all creators</p>
                </div>
                <Button>Generate</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">Campaign ROI Analysis</h3>
                  <p className="text-sm text-muted-foreground">Return on investment for all campaigns</p>
                </div>
                <Button>Generate</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">Audience Insights</h3>
                  <p className="text-sm text-muted-foreground">Demographics and engagement patterns</p>
                </div>
                <Button>Generate</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">Platform Growth Report</h3>
                  <p className="text-sm text-muted-foreground">User adoption and retention metrics</p>
                </div>
                <Button>Generate</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ReportsManagement;
