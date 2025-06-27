
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import CompanyCard from '@/components/CompanyCard';
import CompanyDetailsModal from '@/components/CompanyDetailsModal';
import { 
  ArrowRight, 
  Building2, 
  DollarSign, 
  Target, 
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connect with Leading Companies
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Discover sponsorship opportunities with top brands and companies actively looking for creators like you
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{companies.length}+</div>
                  <div className="text-sm opacity-75">Active Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{totalOpenCampaigns}</div>
                  <div className="text-sm opacity-75">Open Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">${totalBudget}K+</div>
                  <div className="text-sm opacity-75">Total Budget</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Find Your Perfect Sponsor</h2>
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <Input
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Industries" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry === 'all' ? 'All Industries' : industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompanies.map((company, index) => (
                  <div 
                    key={company.id} 
                    className="animate-on-scroll" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CompanyCard 
                      company={company} 
                      onViewDetails={handleViewCompanyDetails}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Building2 className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No companies found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or browse all companies.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with These Companies</h2>
              <p className="text-muted-foreground mb-6">
                These leading brands offer incredible opportunities for creators to grow and monetize their content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "High Budgets",
                  description: "Access to substantial campaign budgets ranging from $30K to $80K per project",
                  icon: <DollarSign className="h-8 w-8 text-green-500" />
                },
                {
                  title: "Multiple Campaigns",
                  description: "Companies run multiple campaigns throughout the year, providing ongoing opportunities",
                  icon: <Target className="h-8 w-8 text-blue-500" />
                },
                {
                  title: "Brand Recognition",
                  description: "Partner with established companies to boost your credibility and reach",
                  icon: <Building2 className="h-8 w-8 text-purple-500" />
                },
                {
                  title: "Growth Potential",
                  description: "Long-term partnerships that can significantly grow your audience and income",
                  icon: <TrendingUp className="h-8 w-8 text-orange-500" />
                }
              ].map((benefit, index) => (
                <Card key={index} className="animate-on-scroll hover-scale text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join our platform and start connecting with companies looking for creators like you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/register">
                    Create Your Profile
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
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
