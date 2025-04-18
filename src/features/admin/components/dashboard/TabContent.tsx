
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TabContentProps {
  title: string;
}

const TabContent: React.FC<TabContentProps> = ({ title }) => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">{title} content will appear here</p>
      </CardContent>
    </Card>
  );
};

export default TabContent;
