
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import CompanyDetailsModal from '@/components/CompanyDetailsModal';
import HeroSection from '@/components/creators/HeroSection';
import SearchAndFilter from '@/components/creators/SearchAndFilter';
import CompaniesGrid from '@/components/creators/CompaniesGrid';
import BenefitsSection from '@/components/creators/BenefitsSection';
import CallToActionSection from '@/components/creators/CallToActionSection';
import { companies, Company } from '@/data/companies';

const ForCreators = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');

  // Get unique industries for filter
  const industries = ['all', ...Array.from(new Set(companies.map(c => c.industry)))];
  
  // Filter companies based on search and industry
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || company.industry === industryFilter;
    return matchesSearch && matchesIndustry;
  });

  const handleViewCompanyDetails = (company: Company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  // Calculate stats
  const totalOpenCampaigns = companies.reduce((total, company) => {
    return total + company.campaigns.filter(c => c.status === 'open').length;
  }, 0);

  const totalBudget = companies.reduce((total, company) => {
    const budget = parseInt(company.totalBudget.replace(/[^\d]/g, ''));
    return total + budget;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 100);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection
          totalCompanies={companies.length}
          totalOpenCampaigns={totalOpenCampaigns}
          totalBudget={totalBudget}
        />

        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          industryFilter={industryFilter}
          setIndustryFilter={setIndustryFilter}
          industries={industries}
        />

        <CompaniesGrid
          companies={filteredCompanies}
          onViewDetails={handleViewCompanyDetails}
        />

        <BenefitsSection />

        <CallToActionSection />
      </main>
      
      <Footer />
      
      <CompanyDetailsModal
        company={selectedCompany}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ForCreators;
