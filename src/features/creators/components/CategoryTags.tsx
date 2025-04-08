
import React from 'react';

interface CategoryTagsProps {
  categories: string[];
}

const CategoryTags: React.FC<CategoryTagsProps> = ({ categories }) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {categories.map((category, index) => (
        <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs shadow-sm">
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryTags;
