
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import FilterBar from '@/components/FilterBar';
import { LocationCategory, FilterOption } from '@/types/forBrands';

interface PhysicalLocationSectionProps {
  locationFilter: string;
  locationSearch: string;
  setLocationFilter: (filter: string) => void;
  setLocationSearch: (search: string) => void;
}

const PhysicalLocationSection: React.FC<PhysicalLocationSectionProps> = ({
  locationFilter,
  locationSearch,
  setLocationFilter,
  setLocationSearch
}) => {
  const locationFilterOptions: FilterOption[] = [
    { label: 'All Locations', value: 'all' },
    { label: 'Retail Stores', value: 'retail' },
    { label: 'Bars & Restaurants', value: 'bars' },
    { label: 'Supermarkets', value: 'supermarkets' },
    { label: 'Shopping Malls', value: 'malls' },
    { label: 'Entertainment Venues', value: 'entertainment' },
  ];

  const advertisingLocations: LocationCategory[] = [
    {
      title: "Retail Stores",
      items: [
        "In-store product displays",
        "Point-of-purchase materials",
        "Interactive kiosks",
        "Checkout counter promotions"
      ]
    },
    {
      title: "Food & Beverage",
      items: [
        "Restaurant table displays",
        "Bar promotional events",
        "Coffee shop branded items",
        "Menu advertising"
      ]
    },
    {
      title: "Public Spaces",
      items: [
        "Shopping mall displays",
        "Airport advertising",
        "Transit station promotions",
        "Event venue sponsorships"
      ]
    }
  ];

  const filteredLocations = advertisingLocations.filter(location => {
    if (locationFilter !== 'all') {
      const categoryMatches = 
        (locationFilter === 'retail' && location.title === "Retail Stores") ||
        (locationFilter === 'bars' && location.title === "Food & Beverage") ||
        (locationFilter === 'supermarkets' && location.title.includes("Food")) ||
        (locationFilter === 'malls' && location.title.includes("Public")) ||
        (locationFilter === 'entertainment' && location.title.includes("Public"));
      
      if (!categoryMatches) return false;
    }
    
    if (locationSearch) {
      const titleMatch = location.title.toLowerCase().includes(locationSearch.toLowerCase());
      const itemMatch = location.items.some(item => 
        item.toLowerCase().includes(locationSearch.toLowerCase())
      );
      if (!titleMatch && !itemMatch) return false;
    }
    
    return true;
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Physical Advertising Locations</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Strategic physical placements to maximize your brand's visibility
          </p>
        </div>
        
        <FilterBar 
          title="Filter Locations"
          filterOptions={locationFilterOptions}
          searchPlaceholder="Search locations..."
          onFilterChange={setLocationFilter}
          onSearch={setLocationSearch}
          className="animate-on-scroll"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <Card key={location.title} className="animate-on-scroll hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle>{location.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {location.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-muted-foreground">No locations found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhysicalLocationSection;
