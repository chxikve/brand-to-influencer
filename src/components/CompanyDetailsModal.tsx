
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Building2, MapPin, Users, Calendar, Globe, DollarSign, Clock, Target, CheckCircle, XCircle } from 'lucide-react';
import { Company } from '@/data/companies';

interface CompanyDetailsModalProps {
  company: Company | null;
  isOpen: boolean;
  onClose: () => void;
}

const CompanyDetailsModal: React.FC<CompanyDetailsModalProps> = ({
  company,
  isOpen,
  onClose
}) => {
  if (!company) return null;

  const openCampaigns = company.campaigns.filter(c => c.status === 'open');
  const closedCampaigns = company.campaigns.filter(c => c.status === 'closed');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="w-20 h-20 rounded-lg object-cover border"
            />
            <div>
              <DialogTitle className="text-2xl mb-2">{company.name}</DialogTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {company.industry}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {company.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Founded {company.founded}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About the Company</h3>
            <p className="text-muted-foreground mb-4">{company.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-blue-600 font-semibold">
                  <Users className="w-4 h-4" />
                  {company.employees}
                </div>
                <div className="text-xs text-muted-foreground">Employees</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-green-600 font-semibold">
                  <DollarSign className="w-4 h-4" />
                  {company.totalBudget}
                </div>
                <div className="text-xs text-muted-foreground">Total Budget</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-purple-600 font-semibold">
                  <Target className="w-4 h-4" />
                  {company.activeCampaigns}
                </div>
                <div className="text-xs text-muted-foreground">Active Campaigns</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-orange-600 font-semibold">
                  <Globe className="w-4 h-4" />
                  {company.website}
                </div>
                <div className="text-xs text-muted-foreground">Website</div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Open Campaigns */}
          {openCampaigns.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Open Campaigns ({openCampaigns.length})
              </h3>
              <div className="space-y-4">
                {openCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border rounded-lg p-4 bg-green-50 dark:bg-green-900/10">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg">{campaign.title}</h4>
                      <Badge variant="default" className="bg-green-600">
                        {campaign.budget}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{campaign.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Deadline: {campaign.deadline}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-sm font-medium mb-2">Requirements:</div>
                      <div className="flex flex-wrap gap-1">
                        {campaign.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full md:w-auto">
                      Apply for Campaign
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Closed Campaigns */}
          {closedCampaigns.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-gray-600" />
                Past Campaigns ({closedCampaigns.length})
              </h3>
              <div className="space-y-4">
                {closedCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50 opacity-75">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{campaign.title}</h4>
                      <Badge variant="secondary">
                        {campaign.budget}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{campaign.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyDetailsModal;
