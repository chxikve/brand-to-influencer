
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Edit, Trash, Eye } from 'lucide-react';

const CampaignsManagement = () => {
  // Mock data - would be fetched from API in real app
  const campaigns = [
    { 
      id: 1, 
      name: 'Summer Collection Launch', 
      status: 'active', 
      budget: '$45,000', 
      startDate: '2024-06-01', 
      endDate: '2024-08-31',
      creators: 12
    },
    { 
      id: 2, 
      name: 'Product Awareness Series', 
      status: 'planned', 
      budget: '$32,000', 
      startDate: '2024-07-15', 
      endDate: '2024-09-15',
      creators: 8
    },
    { 
      id: 3, 
      name: 'Holiday Special', 
      status: 'draft', 
      budget: '$60,000', 
      startDate: '2024-11-01', 
      endDate: '2024-12-25',
      creators: 15
    },
    { 
      id: 4, 
      name: 'Spring Promotion', 
      status: 'completed', 
      budget: '$28,500', 
      startDate: '2024-03-01', 
      endDate: '2024-04-30',
      creators: 10
    },
    { 
      id: 5, 
      name: 'Tech Launch Event', 
      status: 'active', 
      budget: '$55,000', 
      startDate: '2024-05-15', 
      endDate: '2024-06-30',
      creators: 6
    },
  ];

  // Function to get the right badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'planned':
        return <Badge className="bg-blue-500">Planned</Badge>;
      case 'draft':
        return <Badge className="bg-gray-500">Draft</Badge>;
      case 'completed':
        return <Badge className="bg-purple-500">Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaigns Management</h1>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Creators</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell className="font-medium">{campaign.name}</TableCell>
                    <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                    <TableCell>{campaign.budget}</TableCell>
                    <TableCell>{campaign.startDate}</TableCell>
                    <TableCell>{campaign.endDate}</TableCell>
                    <TableCell>{campaign.creators}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CampaignsManagement;
