
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const activities = [
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
];

const RecentActivity = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((item, index) => (
            <div key={index} className="border-b last:border-0 pb-2 last:pb-0">
              <p className={`text-sm font-medium ${item.color}`}>{item.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
