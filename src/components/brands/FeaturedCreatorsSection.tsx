
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import FilterBar from '@/components/FilterBar';
import { creators } from '@/data/creators';
import { FilterOption } from '@/types/forBrands';

interface FeaturedCreatorsSectionProps {
  creatorFilter: string;
  creatorSearch: string;
  setCreatorFilter: (filter: string) => void;
  setCreatorSearch: (search: string) => void;
}

const FeaturedCreatorsSection: React.FC<FeaturedCreatorsSectionProps> = ({ 
  creatorFilter, 
  creatorSearch, 
  setCreatorFilter, 
  setCreatorSearch 
}) => {
  const creatorFilterOptions: FilterOption[] = [
    { label: 'All Creators', value: 'all' },
    { label: 'Lifestyle', value: 'lifestyle' },
    { label: 'Tech', value: 'tech' },
    { label: 'Fitness', value: 'fitness' },
    { label: 'Beauty', value: 'beauty' },
    { label: 'Gaming', value: 'gaming' },
  ];

  const filteredCreators = creators
    .filter(creator => {
      if (creatorFilter !== 'all' && creator.niche.toLowerCase() !== creatorFilter) {
        return false;
      }
      if (creatorSearch && !creator.name.toLowerCase().includes(creatorSearch.toLowerCase())) {
        return false;
      }
      return true;
    })
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content Creators</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Top-performing creators ready to collaborate with your brand
          </p>
        </div>
        
        <FilterBar 
          title="Filter Creators"
          filterOptions={creatorFilterOptions}
          searchPlaceholder="Search creators..."
          onFilterChange={setCreatorFilter}
          onSearch={setCreatorSearch}
          className="animate-on-scroll"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCreators.length > 0 ? (
            filteredCreators.map((creator, index) => (
              <Card key={creator.id} className="overflow-hidden animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-0">
                  <div className="flex items-center">
                    <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2" style={{ borderColor: creator.color }}>
                      <img 
                        src={creator.avatar} 
                        alt={creator.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{creator.name}</CardTitle>
                      <CardDescription>{creator.niche}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between mb-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Followers</p>
                      <p className="font-semibold">{creator.followers}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="font-semibold">{creator.engagementRate}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Avg. Comments</p>
                      <p className="font-semibold">{creator.avgComments}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 dark:bg-gray-800 pt-4">
                  <Button variant="ghost" className="text-primary w-full flex justify-center items-center" asChild>
                    <Link to={`/creator/${creator.id}`}>
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-muted-foreground">No creators found matching your criteria.</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/more-creators">
              View All Creators
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreatorsSection;
