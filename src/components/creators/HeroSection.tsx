
import React from 'react';
import HeroStats from './HeroStats';

interface HeroSectionProps {
  totalCompanies: number;
  totalOpenCampaigns: number;
  totalBudget: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  totalCompanies,
  totalOpenCampaigns,
  totalBudget
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with Leading Companies
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Discover sponsorship opportunities with top brands and companies actively looking for creators like you
          </p>
          <HeroStats 
            totalCompanies={totalCompanies}
            totalOpenCampaigns={totalOpenCampaigns}
            totalBudget={totalBudget}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
