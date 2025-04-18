
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ContentSearch = ({ value, onChange }: ContentSearchProps) => {
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    
    // Only show toast when actively filtering (not when clearing)
    if (newValue && newValue !== value) {
      toast({
        title: "Filtering content",
        description: `Showing content matching: "${newValue}"`,
        duration: 2000,
      });
    }
  };
  
  return (
    <div className="flex mb-4">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search content..."
          className="pl-8 w-full"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ContentSearch;
