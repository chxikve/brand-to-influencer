
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { companies, Company } from '@/data/companies';
import HeroSection from '@/components/creators/HeroSection';
import SearchAndFilter from '@/components/creators/SearchAndFilter';
import CompaniesGrid from '@/components/creators/CompaniesGrid';
import BenefitsSection from '@/components/creators/BenefitsSection';
import CallToActionSection from '@/components/creators/CallToActionSection';
import CompanyDetailsModal from '@/components/CompanyDetailsModal';

const ForCreators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  // Debug logging
  useEffect(() => {
    console.log('ForCreators component mounted');
    console.log('Companies data:', companies);
  }, []);

  // Get unique industries for filter
  const industries = useMemo(() => {
    const uniqueIndustries = Array.from(new Set(companies.map(company => company.industry)));
    return ['all', ...uniqueIndustries];
  }, []);

  // Filter companies based on search and industry
  const filteredCompanies = useMemo(() => {
    console.log('Filtering companies with query:', searchQuery, 'industry:', industryFilter);
    
    return companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          company.industry.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesIndustry = industryFilter === 'all' || company.industry === industryFilter;
      
      return matchesSearch && matchesIndustry;
    });
  }, [searchQuery, industryFilter]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalCompanies = companies.length;
    const totalOpenCampaigns = companies.reduce((sum, company) => 
      sum + company.campaigns.filter(campaign => campaign.status === 'open').length, 0
    );
    const totalBudget = companies.reduce((sum, company) => {
      const budgetNumber = parseInt(company.totalBudget.replace(/[^0-9]/g, ''));
      return sum + budgetNumber;
    }, 0);

    console.log('Stats calculated:', { totalCompanies, totalOpenCampaigns, totalBudget });
    
    return { totalCompanies, totalOpenCampaigns, totalBudget };
  }, []);

  const handleViewDetails = (company: Company) => {
    console.log('Opening company details for:', company.name);
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  // Animate elements on scroll
  useEffect(() => {
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

  console.log('Rendering ForCreators with filtered companies:', filteredCompanies.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection 
          totalCompanies={stats.totalCompanies}
          totalOpenCampaigns={stats.totalOpenCampaigns}
          totalBudget={stats.totalBudget}
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
          onViewDetails={handleViewDetails}
        />
        
        <BenefitsSection />
        <CallToActionSection />
      </main>
      
      <Footer />
      
      {selectedCompany && (
        <CompanyDetailsModal
          company={selectedCompany}
          isOpen={!!selectedCompany}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ForCreators;
