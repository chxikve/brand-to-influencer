
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Film, Globe, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ContentHeader from '../components/content/ContentHeader';
import ContentSearch from '../components/content/ContentSearch';
import ContentTable from '../components/content/ContentTable';
import { contentData, ContentItem } from '../services/contentData';

const ContentManagement = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('pages');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id: string, title: string) => {
    toast({
      title: "Content Deleted",
      description: `${title} has been deleted successfully.`,
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

  const filterItems = (items: ContentItem[]) => {
    return items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <>
      <ContentHeader onAddContent={handleAddContent} />

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
            
            <ContentSearch value={searchQuery} onChange={setSearchQuery} />
            
            <TabsContent value="pages">
              <ContentTable 
                items={filterItems(contentData.pages)}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
              />
            </TabsContent>
            
            <TabsContent value="blog">
              <ContentTable 
                items={filterItems(contentData.blog)}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
              />
            </TabsContent>
            
            <TabsContent value="media">
              <ContentTable 
                items={filterItems(contentData.media)}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
              />
            </TabsContent>
            
            <TabsContent value="video">
              <ContentTable 
                items={filterItems(contentData.video)}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default ContentManagement;
