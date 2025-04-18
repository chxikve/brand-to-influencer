
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, TrendingUp, DollarSign, Calendar, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Navigation helper function
  const navigateTo = (path: string) => {
    navigate(`/admin/${path}`);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => navigateTo('creators')}
            className="flex items-center gap-1"
          >
            <Users className="h-4 w-4 mr-1" /> 
            Manage Creators
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigateTo('campaigns')}
            className="flex items-center gap-1"
          >
            <TrendingUp className="h-4 w-4 mr-1" /> 
            View Campaigns
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card 
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-0 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          onClick={() => navigateTo('creators')}
        >
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Total Creators</p>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">1,240</h3>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">+12% from last month</p>
            </div>
            <Users className="h-8 w-8 text-blue-500 dark:text-blue-400" />
          </CardContent>
        </Card>
        
        <Card 
          className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-0 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          onClick={() => navigateTo('campaigns')}
        >
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">Active Campaigns</p>
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100">24</h3>
              <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">+4 new this week</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-500 dark:text-purple-400" />
          </CardContent>
        </Card>
        
        <Card 
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-0 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          onClick={() => navigateTo('reports')}
        >
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Revenue</p>
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">$24,500</h3>
              <p className="text-xs text-green-700 dark:text-green-300 mt-1">+8% from last month</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500 dark:text-green-400" />
          </CardContent>
        </Card>
        
        <Card 
          className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-0 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          onClick={() => navigateTo('content')}
        >
          <CardContent className="p-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-1">Growth</p>
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100">+19%</h3>
              <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">+2% from last month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-orange-500 dark:text-orange-400" />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-white dark:bg-gray-800 p-1 gap-2">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700">
              Reports
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Admin Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { title: "Management", icon: Users, path: "management", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
                    { title: "Creators", icon: Users, path: "creators", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
                    { title: "Campaigns", icon: Calendar, path: "campaigns", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
                    { title: "Reports", icon: TrendingUp, path: "reports", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" },
                    { title: "Content", icon: Link, path: "content", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
                    { title: "Settings", icon: DollarSign, path: "settings", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" }
                  ].map((item) => (
                    <Button
                      key={item.path}
                      variant="outline"
                      className={`h-24 flex flex-col items-center justify-center gap-2 ${item.color} border-0 hover:opacity-90 transition-all`}
                      onClick={() => navigateTo(item.path)}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "New creator registered",
                      description: "Jessica Smith • 10 mins ago",
                      color: "text-blue-600 dark:text-blue-400"
                    },
                    {
                      title: "Campaign updated",
                      description: "Summer Promo 2024 • 2 hours ago",
                      color: "text-purple-600 dark:text-purple-400"
                    },
                    {
                      title: "Report generated",
                      description: "Monthly Analytics • 5 hours ago",
                      color: "text-green-600 dark:text-green-400"
                    },
                    {
                      title: "New brand partnership",
                      description: "TechGiant Inc. • 1 day ago",
                      color: "text-orange-600 dark:text-orange-400"
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-b last:border-0 pb-2 last:pb-0">
                      <p className={`text-sm font-medium ${item.color}`}>{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">Analytics content will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">Reports content will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
