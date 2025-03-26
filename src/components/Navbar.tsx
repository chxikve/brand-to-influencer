
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'glass-nav dark:glass-nav-dark py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <img 
            src="/logo.png" 
            alt="Sponsify Logo" 
            className="h-8 md:h-10 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-md bg-white dark:bg-slate-800 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
              <Link to="/" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">For Brands</Link>
              <Link to="/" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">For Creators</Link>
            </div>
          </div>
          <Link to="/" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
            Pricing
          </Link>
          <Link to="/" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
            About
          </Link>
        </div>

        {/* Authentication Buttons and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="text-sponsify-secondary dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/" className="text-sponsify-secondary dark:text-sponsify-accent text-sm font-medium">
              Log in
            </Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/" className="text-sm font-medium dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90">
              Get Started
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="text-sponsify-secondary dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button 
            onClick={toggleMobileMenu}
            variant="ghost"
            size="icon"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-sponsify-primary dark:text-sponsify-accent" />
            ) : (
              <Menu className="h-6 w-6 text-sponsify-primary dark:text-sponsify-accent" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card dark:glass-card-dark absolute top-full left-0 w-full p-4 space-y-4 animate-fade-in">
          <Link to="/" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            Home
          </Link>
          <div>
            <button className="flex items-center justify-between w-full py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
              Solutions <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pl-4 mt-1 space-y-2">
              <Link to="/" className="block py-2 text-sm text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
                For Brands
              </Link>
              <Link to="/" className="block py-2 text-sm text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
                For Creators
              </Link>
            </div>
          </div>
          <Link to="/" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            Pricing
          </Link>
          <Link to="/" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            About
          </Link>
          <div className="pt-4 space-y-3">
            <Button variant="ghost" className="w-full justify-center" asChild>
              <Link to="/" className="block text-sponsify-primary dark:text-sponsify-accent">
                Log in
              </Link>
            </Button>
            <Button variant="default" className="w-full justify-center dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90" asChild>
              <Link to="/" className="block">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
