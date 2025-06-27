
import React from 'react';

interface HeroStatsProps {
  totalCompanies: number;
  totalOpenCampaigns: number;
  totalBudget: number;
}

const HeroStats: React.FC<HeroStatsProps> = ({
  totalCompanies,
  totalOpenCampaigns,
  totalBudget
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-400">{totalCompanies}+</div>
        <div className="text-sm opacity-75">Active Companies</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-green-400">{totalOpenCampaigns}</div>
        <div className="text-sm opacity-75">Open Campaigns</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-purple-400">${totalBudget}K+</div>
        <div className="text-sm opacity-75">Total Budget</div>
      </div>
    </div>
  );
};

export default HeroStats;
