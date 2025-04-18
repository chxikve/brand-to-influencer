import React, { useState } from 'react';
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
import EditDialog from '@/components/ui/edit-dialog';
import { useToast } from '@/components/ui/use-toast';

interface Campaign {
  id: number;
  name: string;
  status: string;
  budget: string;
  startDate: string;
  endDate: string;
  creators: number;
}

const CampaignsManagement = () => {
  const { toast } = useToast();
  const [campaigns, setCampaigns] = useState<Campaign[]>([
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
  ]);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);

  const handleEdit = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== id));
    toast({
      title: "Campaign deleted",
      description: "The campaign has been removed successfully."
    });
  };

  const handleSave = (data: Campaign) => {
    if (editingCampaign) {
      setCampaigns(campaigns.map(c => c.id === editingCampaign.id ? { ...data, id: c.id } : c));
      toast({
        title: "Changes saved",
        description: "Campaign information has been updated successfully."
      });
    }
  };

  const handleAdd = () => {
    const newCampaign: Campaign = {
      id: campaigns.length + 1,
      name: '',
      status: 'draft',
      budget: '$0',
      startDate: '',
      endDate: '',
      creators: 0,
    };
    setEditingCampaign(newCampaign);
    setIsEditDialogOpen(true);
  };

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
        <Button onClick={handleAdd}>
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
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(campaign)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(campaign.id)}>
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

      {editingCampaign && (
        <EditDialog
          isOpen={isEditDialogOpen}
          onClose={() => {
            setIsEditDialogOpen(false);
            setEditingCampaign(null);
          }}
          onSave={handleSave}
          title={editingCampaign.id === campaigns.length + 1 ? "Add Campaign" : "Edit Campaign"}
          fields={[
            { name: 'name', label: 'Campaign Name', value: editingCampaign.name },
            { name: 'status', label: 'Status', value: editingCampaign.status },
            { name: 'budget', label: 'Budget', value: editingCampaign.budget },
            { name: 'startDate', label: 'Start Date', type: 'date', value: editingCampaign.startDate },
            { name: 'endDate', label: 'End Date', type: 'date', value: editingCampaign.endDate },
            { name: 'creators', label: 'Number of Creators', type: 'number', value: editingCampaign.creators },
          ]}
        />
      )}
    </>
  );
};

export default CampaignsManagement;
