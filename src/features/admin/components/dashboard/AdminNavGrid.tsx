
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Link as LinkIcon, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { title: "Management", icon: Users, path: "", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  { title: "Creators", icon: Users, path: "creators", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
  { title: "Campaigns", icon: Calendar, path: "campaigns", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
  { title: "Reports", icon: TrendingUp, path: "reports", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" },
  { title: "Content", icon: LinkIcon, path: "content", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
  { title: "Settings", icon: DollarSign, path: "settings", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" }
];

const AdminNavGrid = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Admin Navigation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {navItems.map((item) => (
            <Button
              key={item.path || "management"}
              variant="outline"
              className={`h-24 flex flex-col items-center justify-center gap-2 ${item.color} border-0 hover:opacity-90 transition-all`}
              asChild
            >
              <Link to={`/admin/${item.path}`}>
                <item.icon className="h-6 w-6" />
                <span>{item.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminNavGrid;
