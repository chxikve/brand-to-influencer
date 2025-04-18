
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import StatsCard from '../components/dashboard/StatsCard';
import AdminNavGrid from '../components/dashboard/AdminNavGrid';
import RecentActivity from '../components/dashboard/RecentActivity';
import TabContent from '../components/dashboard/TabContent';

const Dashboard = () => {
  const navigate = useNavigate();

  const statsCards = [
    {
      title: "Total Creators",
      value: "1,240",
      trend: "+12% from last month",
      icon: Users,
      color: {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        text: "text-blue-600 dark:text-blue-400",
        icon: "text-blue-500 dark:text-blue-400",
        trend: "text-blue-700 dark:text-blue-300"
      }
    },
    {
      title: "Active Campaigns",
      value: "24",
      trend: "+4 new this week",
      icon: Calendar,
      color: {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        text: "text-purple-600 dark:text-purple-400",
        icon: "text-purple-500 dark:text-purple-400",
        trend: "text-purple-700 dark:text-purple-300"
      }
    },
    {
      title: "Revenue",
      value: "$24,500",
      trend: "+8% from last month",
      icon: DollarSign,
      color: {
        bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
        text: "text-green-600 dark:text-green-400",
        icon: "text-green-500 dark:text-green-400",
        trend: "text-green-700 dark:text-green-300"
      }
    },
    {
      title: "Growth",
      value: "+19%",
      trend: "+2% from last month",
      icon: TrendingUp,
      color: {
        bg: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
        text: "text-orange-600 dark:text-orange-400",
        icon: "text-orange-500 dark:text-orange-400",
        trend: "text-orange-700 dark:text-orange-300"
      }
    }
  ];

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
            onClick={() => navigate('/admin/creators')}
            className="flex items-center gap-1"
          >
            <Users className="h-4 w-4 mr-1" /> 
            Manage Creators
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/admin/campaigns')}
            className="flex items-center gap-1"
          >
            <TrendingUp className="h-4 w-4 mr-1" /> 
            View Campaigns
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card, index) => (
          <StatsCard key={index} {...card} />
        ))}
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
            <AdminNavGrid />
            <RecentActivity />
          </TabsContent>
          
          <TabsContent value="analytics">
            <TabContent title="Analytics Overview" />
          </TabsContent>
          
          <TabsContent value="reports">
            <TabContent title="Reports" />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
