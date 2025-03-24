
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'glass-nav py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <span className="text-xl font-bold text-sponsify-primary">Sponsify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-sponsify-secondary hover:text-sponsify-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-sponsify-secondary hover:text-sponsify-primary transition-colors">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-md bg-white p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
              <Link to="/" className="block px-4 py-2 text-sm rounded-md hover:bg-sponsify-light">For Brands</Link>
              <Link to="/" className="block px-4 py-2 text-sm rounded-md hover:bg-sponsify-light">For Creators</Link>
            </div>
          </div>
          <Link to="/" className="text-sm font-medium text-sponsify-secondary hover:text-sponsify-primary transition-colors">
            Pricing
          </Link>
          <Link to="/" className="text-sm font-medium text-sponsify-secondary hover:text-sponsify-primary transition-colors">
            About
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="btn-tertiary text-sm font-medium">
            Log in
          </Link>
          <Link to="/" className="btn-primary text-sm font-medium">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-sponsify-primary" />
          ) : (
            <Menu className="h-6 w-6 text-sponsify-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 w-full p-4 space-y-4 animate-fade-in">
          <Link to="/" className="block py-2 text-sponsify-secondary hover:text-sponsify-primary">
            Home
          </Link>
          <div>
            <button className="flex items-center justify-between w-full py-2 text-sponsify-secondary hover:text-sponsify-primary">
              Solutions <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pl-4 mt-1 space-y-2">
              <Link to="/" className="block py-2 text-sm text-sponsify-secondary hover:text-sponsify-primary">
                For Brands
              </Link>
              <Link to="/" className="block py-2 text-sm text-sponsify-secondary hover:text-sponsify-primary">
                For Creators
              </Link>
            </div>
          </div>
          <Link to="/" className="block py-2 text-sponsify-secondary hover:text-sponsify-primary">
            Pricing
          </Link>
          <Link to="/" className="block py-2 text-sponsify-secondary hover:text-sponsify-primary">
            About
          </Link>
          <div className="pt-4 space-y-3">
            <Link to="/" className="block w-full text-center py-2 text-sponsify-primary hover:bg-sponsify-light rounded-md">
              Log in
            </Link>
            <Link to="/" className="block w-full text-center btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
