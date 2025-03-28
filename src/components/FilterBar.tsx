
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  title: string;
  filterOptions?: FilterOption[];
  searchPlaceholder?: string;
  onFilterChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  showSearch?: boolean;
}

const FilterBar = ({ 
  title,
  filterOptions = [],
  searchPlaceholder = "Search...",
  onFilterChange,
  onSearch,
  className = "",
  showSearch = true
}: FilterBarProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 ${className}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        {showSearch && (
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={searchPlaceholder}
              className="pl-9 w-full sm:w-[200px]"
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
        )}
        
        {filterOptions.length > 0 && (
          <Select onValueChange={(value) => onFilterChange && onFilterChange(value)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {filterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
