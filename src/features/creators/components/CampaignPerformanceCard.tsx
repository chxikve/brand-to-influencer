
import React from 'react';
import { Card } from '@/components/ui/card';

interface CampaignType {
  name: string;
  performance: number;
}

interface CampaignPerformanceCardProps {
  campaignTypes: CampaignType[];
}

const CampaignPerformanceCard: React.FC<CampaignPerformanceCardProps> = ({ campaignTypes }) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Top Performing Campaign Types</h3>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        {campaignTypes.map((campaign, index) => (
          <div key={index} className="mb-3 last:mb-0">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">{campaign.name}</span>
              <span className="text-sm font-medium">{campaign.performance}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-sponsify-primary dark:bg-sponsify-accent h-2 rounded-full" 
                style={{ width: `${campaign.performance}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignPerformanceCard;
