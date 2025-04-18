
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PlusCircle, 
  Search, 
  Image, 
  FileText, 
  Film, 
  Edit, 
  Trash,
  Globe 
} from 'lucide-react';

const ContentManagement = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Content
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pages">
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
                />
              </div>
            </div>
            
            <TabsContent value="pages">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {['Home', 'About', 'Pricing', 'For Creators', 'For Brands', 'Contact'].map((page) => (
                  <Card key={page}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{page}</h3>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Last updated: 2 days ago</p>
                      <div className="mt-2 flex">
                        <Button size="sm" variant="outline" className="text-xs">
                          <Globe className="h-3 w-3 mr-1" /> View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="blog">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {['10 Tips for Creators', 'How to Grow Your Audience', 'Maximizing Campaign ROI', 'Creator Trends 2024'].map((post) => (
                  <Card key={post}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{post}</h3>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Published: Mar 15, 2024</p>
                      <div className="mt-2 flex">
                        <Button size="sm" variant="outline" className="text-xs">View</Button>
                        <Button size="sm" variant="outline" className="text-xs ml-2">Edit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="media">
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <Card key={item}>
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <Image className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <CardContent className="p-2">
                      <p className="text-xs truncate">image-{item}.jpg</p>
                      <div className="flex justify-between mt-1">
                        <p className="text-xs text-muted-foreground">240 KB</p>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Trash className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="video">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {['Promotional Video', 'Tutorial: Getting Started', 'Creator Testimonials', 'Brand Success Stories'].map((video) => (
                  <Card key={video}>
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Film className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-medium text-sm">{video}</h3>
                      <p className="text-xs text-muted-foreground mt-1">Duration: 2:45</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default ContentManagement;
