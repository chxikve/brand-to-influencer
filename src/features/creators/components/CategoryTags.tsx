
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface CategoryTagsProps {
  categories: string[];
  className?: string;
  variant?: 'default' | 'outline' | 'admin';
}

const CategoryTags: React.FC<CategoryTagsProps> = ({ 
  categories, 
  className = "", 
  variant = 'default' 
}) => {
  const getTagClass = () => {
    switch(variant) {
      case 'outline':
        return 'bg-transparent border border-primary/30 text-primary hover:bg-primary/10';
      case 'admin':
        return 'bg-primary/10 text-primary hover:bg-primary/20';
      default:
        return 'bg-white dark:bg-gray-800 shadow-sm';
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((category, index) => (
        <Badge 
          key={index} 
          variant="secondary"
          className={`px-3 py-1 rounded-full text-xs font-medium ${getTagClass()}`}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryTags;
