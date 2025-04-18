
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentHeaderProps {
  onAddContent: () => void;
}

const ContentHeader = ({ onAddContent }: ContentHeaderProps) => {
  const { toast } = useToast();
  
  const handleAddContent = () => {
    onAddContent();
    toast({
      title: "Content form opened",
      description: "Please fill in the content details to add new content."
    });
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Content Management</h1>
      <Button onClick={handleAddContent}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Content
      </Button>
    </div>
  );
};

export default ContentHeader;
