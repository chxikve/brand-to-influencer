
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, TrendingUp, DollarSign, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Total Creators</p>
              <h3 className="text-2xl font-bold">1,240</h3>
              <p className="text-xs text-green-500 mt-1">+12% from last month</p>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Active Campaigns</p>
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-xs text-green-500 mt-1">+4 new this week</p>
            </div>
            <Calendar className="h-8 w-8 text-primary" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Revenue</p>
              <h3 className="text-2xl font-bold">$24,500</h3>
              <p className="text-xs text-green-500 mt-1">+8% from last month</p>
            </div>
            <DollarSign className="h-8 w-8 text-primary" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Growth</p>
              <h3 className="text-2xl font-bold">+19%</h3>
              <p className="text-xs text-green-500 mt-1">+2% from last month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary" />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <p className="text-sm font-medium">New creator registered</p>
                    <p className="text-xs text-muted-foreground">Jessica Smith • 10 mins ago</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-sm font-medium">Campaign updated</p>
                    <p className="text-xs text-muted-foreground">Summer Promo 2024 • 2 hours ago</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-sm font-medium">Report generated</p>
                    <p className="text-xs text-muted-foreground">Monthly Analytics • 5 hours ago</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">New brand partnership</p>
                    <p className="text-xs text-muted-foreground">TechGiant Inc. • 1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics content will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reports content will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
