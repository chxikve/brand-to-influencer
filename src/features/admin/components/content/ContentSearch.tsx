
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ContentSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ContentSearch = ({ value, onChange }: ContentSearchProps) => {
  return (
    <div className="flex mb-4">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search content..."
          className="pl-8 w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContentSearch;
