
import React from 'react';
import { Building2 } from 'lucide-react';
import { Company } from '@/data/companies';
import CompanyCard from '@/components/CompanyCard';

interface CompaniesGridProps {
  companies: Company[];
  onViewDetails: (company: Company) => void;
}

const CompaniesGrid: React.FC<CompaniesGridProps> = ({
  companies,
  onViewDetails
}) => {
  if (companies.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <Building2 className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No companies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all companies.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div 
              key={company.id} 
              className="animate-on-scroll" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CompanyCard 
                company={company} 
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesGrid;
