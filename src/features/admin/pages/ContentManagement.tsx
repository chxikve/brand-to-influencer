
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  PlusCircle, 
  Search, 
  Image, 
  FileText, 
  Film, 
  Edit, 
  Trash,
  Globe,
  Eye
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  status: string;
  lastModified: string;
}

const ContentManagement = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('pages');
  const [searchQuery, setSearchQuery] = useState('');

  const contentData = {
    pages: [
      { id: '1', title: 'Home', type: 'page', status: 'Published', lastModified: '2024-03-15' },
      { id: '2', title: 'About', type: 'page', status: 'Published', lastModified: '2024-03-14' },
      { id: '3', title: 'Contact', type: 'page', status: 'Draft', lastModified: '2024-03-13' },
    ],
    blog: [
      { id: '4', title: 'Getting Started Guide', type: 'post', status: 'Published', lastModified: '2024-03-15' },
      { id: '5', title: 'Best Practices', type: 'post', status: 'Draft', lastModified: '2024-03-14' },
    ],
    media: [
      { id: '6', title: 'Hero Image', type: 'image', status: 'Active', lastModified: '2024-03-15' },
      { id: '7', title: 'About Banner', type: 'image', status: 'Active', lastModified: '2024-03-14' },
    ],
    video: [
      { id: '8', title: 'Welcome Video', type: 'video', status: 'Published', lastModified: '2024-03-15' },
      { id: '9', title: 'Tutorial', type: 'video', status: 'Processing', lastModified: '2024-03-14' },
    ]
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleDelete = (id: string, type: string) => {
    toast({
      title: "Content Deleted",
      description: `${type} has been deleted successfully.`,
    });
  };

  const handleEdit = (id: string) => {
    toast({
      title: "Edit Mode",
      description: "Opening content editor...",
    });
  };

  const handleView = (id: string) => {
    toast({
      title: "Preview Mode",
      description: "Opening content preview...",
    });
  };

  const handleAddContent = () => {
    toast({
      title: "Add New Content",
      description: "Opening content creation form...",
    });
  };

  const renderContentTable = (items: ContentItem[]) => {
    const filteredItems = items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === 'Published' ? 'bg-green-100 text-green-800' :
                  item.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {item.status}
                </span>
              </TableCell>
              <TableCell>{item.lastModified}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => handleView(item.id)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(item.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id, item.title)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <Button onClick={handleAddContent}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Content
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pages" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="mb-4">
              <TabsTrigger value="pages">
                <Globe className="h-4 w-4 mr-2" />
                Pages
              </TabsTrigger>
              <TabsTrigger value="blog">
                <FileText className="h-4 w-4 mr-2" />
                Blog Posts
              </TabsTrigger>
              <TabsTrigger value="media">
                <Image className="h-4 w-4 mr-2" />
                Media
              </TabsTrigger>
              <TabsTrigger value="video">
                <Film className="h-4 w-4 mr-2" />
                Videos
              </TabsTrigger>
            </TabsList>
            
            <div className="flex mb-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search content..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
            
            <TabsContent value="pages">
              {renderContentTable(contentData.pages)}
            </TabsContent>
            
            <TabsContent value="blog">
              {renderContentTable(contentData.blog)}
            </TabsContent>
            
            <TabsContent value="media">
              {renderContentTable(contentData.media)}
            </TabsContent>
            
            <TabsContent value="video">
              {renderContentTable(contentData.video)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default ContentManagement;
