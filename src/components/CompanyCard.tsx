
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Users, Calendar, DollarSign, Briefcase } from 'lucide-react';
import { Company } from '@/data/companies';

interface CompanyCardProps {
  company: Company;
  onViewDetails: (company: Company) => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, onViewDetails }) => {
  const openCampaigns = company.campaigns.filter(c => c.status === 'open');
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-3">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`}
            className="w-16 h-16 rounded-lg object-cover border"
          />
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{company.name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              {company.industry}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {company.location}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {company.employees}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {company.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center justify-center gap-1 text-green-600 font-semibold">
              <DollarSign className="w-4 h-4" />
              {company.totalBudget}
            </div>
            <div className="text-xs text-muted-foreground">Total Budget</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center justify-center gap-1 text-blue-600 font-semibold">
              <Briefcase className="w-4 h-4" />
              {company.activeCampaigns}
            </div>
            <div className="text-xs text-muted-foreground">Active Campaigns</div>
          </div>
        </div>
        
        {openCampaigns.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium">Open Campaigns:</div>
            {openCampaigns.slice(0, 2).map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between text-xs bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                <span className="font-medium truncate">{campaign.title}</span>
                <Badge variant="secondary" className="text-xs">
                  {campaign.budget}
                </Badge>
              </div>
            ))}
            {openCampaigns.length > 2 && (
              <div className="text-xs text-muted-foreground">
                +{openCampaigns.length - 2} more campaigns
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={() => onViewDetails(company)}
          className="w-full"
        >
          View Company Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
