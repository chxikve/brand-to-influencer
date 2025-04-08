
import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsMetricCardProps {
  icon: LucideIcon;
  title: string;
  value: ReactNode;
  description: string;
}

const StatsMetricCard: React.FC<StatsMetricCardProps> = ({ 
  icon: Icon, 
  title, 
  value, 
  description 
}) => {
  return (
    <Card className="bg-white/70 dark:bg-gray-800/70 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Icon className="h-5 w-5 mr-2 text-sponsify-primary dark:text-sponsify-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-sponsify-primary dark:text-sponsify-accent">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatsMetricCard;
