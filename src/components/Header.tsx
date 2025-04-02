
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Zap, Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Always define hooks, even if we return early
  useEffect(() => {
    // Only attach the event listener if we're not on the homepage
    if (location.pathname === '/') {
      return;
    }
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Don't render on homepage
  if (location.pathname === '/') {
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? 'glass-nav dark:glass-nav-dark py-3' 
        : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-sponsify-primary dark:text-sponsify-accent" />
            <span className="text-xl font-bold text-sponsify-primary dark:text-sponsify-accent">SPONSIFY</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/for-brands" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
              For Brands
            </Link>
            <Link to="/for-creators" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
              For Creators
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
              Pricing
            </Link>
            <Link to="/more-creators" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
              Discover Creators
            </Link>
            <Link to="/analytics" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
              Analytics
            </Link>
          </nav>
        </div>
        
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
          
          <Button variant="ghost" size="sm" asChild className="text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            <Link to="/login">Log in</Link>
          </Button>
          
          <Button size="sm" asChild className="dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card dark:glass-card-dark absolute top-full left-0 w-full p-4 space-y-4 animate-fade-in">
          <Link to="/for-brands" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            For Brands
          </Link>
          <Link to="/for-creators" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            For Creators
          </Link>
          <Link to="/pricing" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            Pricing
          </Link>
          <Link to="/more-creators" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            Discover Creators
          </Link>
          <Link to="/analytics" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            Analytics
          </Link>
          <div className="pt-4 space-y-3">
            <Button variant="ghost" className="w-full justify-center" asChild>
              <Link to="/login" className="block text-sponsify-primary dark:text-sponsify-accent">
                Log in
              </Link>
            </Button>
            <Button variant="default" className="w-full justify-center dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90" asChild>
              <Link to="/register" className="block">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
