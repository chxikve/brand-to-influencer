
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <CardContent className="p-4 text-center">
        <Icon className="h-6 w-6 mx-auto mb-2 text-sponsify-primary dark:text-sponsify-accent" />
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-xs text-gray-500">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
