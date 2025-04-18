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

interface Creator {
  id: number;
  name: string;
  email: string;
  followers: string;
  engagement: string;
  category: string;
}

const CreatorsManagement = () => {
  const { toast } = useToast();
  const [creators, setCreators] = useAtom(creatorsAtom);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingCreator, setEditingCreator] = useState<Creator | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (creator: Creator) => {
    setEditingCreator(creator);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setCreators(creators.filter(creator => creator.id !== id));
    toast({
      title: "Creator deleted",
      description: "The creator has been removed successfully."
    });
  };

  const handleSave = (data: Creator) => {
    if (editingCreator) {
      if (creators.some(c => c.id === editingCreator.id)) {
        setCreators(creators.map(c => c.id === editingCreator.id ? { ...data, id: c.id } : c));
        toast({
          title: "Changes saved",
          description: "Creator information has been updated successfully."
        });
      } else {
        setCreators([...creators, { ...data, id: editingCreator.id }]);
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
    const newCreator: Creator = {
      id: creators.length > 0 ? Math.max(...creators.map(c => c.id)) + 1 : 1,
      name: '',
      email: '',
      followers: '0',
      engagement: '0%',
      category: '',
    };
    setEditingCreator(newCreator);
    setIsEditDialogOpen(true);
  };

  const filteredCreators = creators.filter(creator =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    creator.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    creator.category.toLowerCase().includes(searchQuery.toLowerCase())
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
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCreators.map((creator) => (
                  <TableRow key={creator.id}>
                    <TableCell className="font-medium">{creator.name}</TableCell>
                    <TableCell>{creator.email}</TableCell>
                    <TableCell>{creator.followers}</TableCell>
                    <TableCell>{creator.engagement}</TableCell>
                    <TableCell>{creator.category}</TableCell>
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
            { name: 'engagement', label: 'Engagement Rate', value: editingCreator.engagement },
            { name: 'category', label: 'Category', value: editingCreator.category },
          ]}
        />
      )}
    </>
  );
};

export default CreatorsManagement;
