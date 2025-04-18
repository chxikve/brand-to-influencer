
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  color: {
    bg: string;
    text: string;
    icon: string;
    trend: string;
  };
}

const StatsCard = ({ title, value, trend, icon: Icon, color }: StatsCardProps) => {
  return (
    <Card 
      className={`${color.bg} border-0 shadow-lg transition-transform hover:scale-105 cursor-pointer`}
    >
      <CardContent className="p-6 flex flex-row items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${color.text} mb-1`}>{title}</p>
          <h3 className={`text-2xl font-bold ${color.text}`}>{value}</h3>
          <p className={`text-xs ${color.trend} mt-1`}>{trend}</p>
        </div>
        <Icon className={`h-8 w-8 ${color.icon}`} />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
