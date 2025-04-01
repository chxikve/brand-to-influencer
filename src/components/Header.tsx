
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const isScrolled = true; // Always apply scrolled styling for consistency
  
  // Don't render on homepage
  if (location.pathname === '/') {
    return null;
  }
  
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
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild className="hidden md:flex text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            <Link to="/analytics" className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="sm" asChild className="text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            <Link to="/login">Log in</Link>
          </Button>
          
          <Button size="sm" asChild className="dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
