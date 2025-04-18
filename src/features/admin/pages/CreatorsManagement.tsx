
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '@/components/ui/table';
import { PlusCircle, Search, Edit, Trash } from 'lucide-react';
import EditDialog from '@/components/ui/edit-dialog';
import { useToast } from '@/components/ui/use-toast';
import { useAtom } from 'jotai';
import { creatorsAtom } from '@/services/creatorService';
import { Creator } from '@/data/creators'; 

// Define a simpler interface for the admin form
interface CreatorFormData {
  id: number;
  name: string;
  email: string;
  followers: string;
  engagementRate: string; // Changed to match Creator type
  niche: string; // Changed to match Creator type
}

const CreatorsManagement = () => {
  const { toast } = useToast();
  const [creators, setCreators] = useAtom(creatorsAtom);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingCreator, setEditingCreator] = useState<CreatorFormData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (creator: Creator) => {
    // Extract only the fields needed for the form
    const formData: CreatorFormData = {
      id: creator.id,
      name: creator.name,
      email: creator.email || '',
      followers: typeof creator.followers === 'number' ? creator.followers.toString() : creator.followers,
      engagementRate: creator.engagementRate,
      niche: creator.niche
    };
    setEditingCreator(formData);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setCreators(creators.filter(creator => creator.id !== id));
    toast({
      title: "Creator deleted",
      description: "The creator has been removed successfully."
    });
  };

  const handleSave = (data: CreatorFormData) => {
    if (editingCreator) {
      // Check if we're updating an existing creator
      if (creators.some(c => c.id === editingCreator.id)) {
        // Update existing creator
        setCreators(creators.map(c => {
          if (c.id === editingCreator.id) {
            // Preserve other properties while updating the edited ones
            return {
              ...c,
              name: data.name,
              email: data.email,
              followers: data.followers,
              engagementRate: data.engagementRate,
              niche: data.niche
            };
          }
          return c;
        }));
        toast({
          title: "Changes saved",
          description: "Creator information has been updated successfully."
        });
      } else {
        // Add new creator with minimum required fields
        // Generate some default values for required fields
        const newCreator: Creator = {
          id: editingCreator.id,
          name: data.name,
          handle: `@${data.name.toLowerCase().replace(/\s+/g, '.')}`,
          avatar: '/placeholder.svg',
          niche: data.niche,
          followers: data.followers,
          engagementRate: data.engagementRate,
          platforms: ["instagram"],
          description: "New creator added via admin panel.",
          location: "Unknown",
          avgComments: "N/A",
          avgShares: "N/A",
          color: "#4f46e5",
          growthData: [
            { month: "Jan", followers: 0 },
            { month: "Feb", followers: 0 },
            { month: "Mar", followers: 0 },
            { month: "Apr", followers: 0 }
          ],
          expertise: ["Content Creation"]
        };
        
        setCreators([...creators, newCreator]);
        toast({
          title: "Creator added",
          description: "New creator has been added successfully."
        });
      }
    }
    setIsEditDialogOpen(false);
    setEditingCreator(null);
  };

  const handleAdd = () => {
    const newId = creators.length > 0 ? Math.max(...creators.map(c => c.id)) + 1 : 1;
    const newCreator: CreatorFormData = {
      id: newId,
      name: '',
      email: '',
      followers: '0',
      engagementRate: '0%',
      niche: '',
    };
    setEditingCreator(newCreator);
    setIsEditDialogOpen(true);
  };

  const filteredCreators = creators.filter(creator =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (creator.email && creator.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    creator.niche.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Creators Management</h1>
        <Button onClick={handleAdd}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Creator
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Creators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search creators..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Followers</TableHead>
                  <TableHead>Engagement Rate</TableHead>
                  <TableHead>Niche</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCreators.map((creator) => (
                  <TableRow key={creator.id}>
                    <TableCell className="font-medium">{creator.name}</TableCell>
                    <TableCell>{creator.email || 'N/A'}</TableCell>
                    <TableCell>{creator.followers}</TableCell>
                    <TableCell>{creator.engagementRate}</TableCell>
                    <TableCell>{creator.niche}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(creator)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(creator.id)}>
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

      {editingCreator && (
        <EditDialog
          isOpen={isEditDialogOpen}
          onClose={() => {
            setIsEditDialogOpen(false);
            setEditingCreator(null);
          }}
          onSave={handleSave}
          title={editingCreator.id === (creators.length > 0 ? Math.max(...creators.map(c => c.id)) + 1 : 1) ? "Add Creator" : "Edit Creator"}
          fields={[
            { name: 'name', label: 'Name', value: editingCreator.name },
            { name: 'email', label: 'Email', type: 'email', value: editingCreator.email },
            { name: 'followers', label: 'Followers', value: editingCreator.followers },
            { name: 'engagementRate', label: 'Engagement Rate', value: editingCreator.engagementRate },
            { name: 'niche', label: 'Niche', value: editingCreator.niche },
          ]}
        />
      )}
    </>
  );
};

export default CreatorsManagement;
