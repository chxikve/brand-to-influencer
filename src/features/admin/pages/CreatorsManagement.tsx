
import React from 'react';
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

const CreatorsManagement = () => {
  // Mock data - would be fetched from API in real app
  const creators = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', followers: '245K', engagement: '4.2%', category: 'Technology' },
    { id: 2, name: 'Samantha Lee', email: 'sam@example.com', followers: '1.2M', engagement: '3.8%', category: 'Lifestyle' },
    { id: 3, name: 'Marcus Chen', email: 'marcus@example.com', followers: '620K', engagement: '5.1%', category: 'Fitness' },
    { id: 4, name: 'Emily Watson', email: 'emily@example.com', followers: '850K', engagement: '4.5%', category: 'Beauty' },
    { id: 5, name: 'Jordan Smith', email: 'jordan@example.com', followers: '430K', engagement: '3.9%', category: 'Gaming' },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Creators Management</h1>
        <Button>
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
                {creators.map((creator) => (
                  <TableRow key={creator.id}>
                    <TableCell className="font-medium">{creator.name}</TableCell>
                    <TableCell>{creator.email}</TableCell>
                    <TableCell>{creator.followers}</TableCell>
                    <TableCell>{creator.engagement}</TableCell>
                    <TableCell>{creator.category}</TableCell>
                    <TableCell className="text-right">
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

export default CreatorsManagement;
