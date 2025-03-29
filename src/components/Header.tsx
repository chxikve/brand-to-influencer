
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header className={cn(
      "border-b py-3",
      theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2 text-primary font-bold">
            <Zap className="h-5 w-5 text-sponsify-primary dark:text-sponsify-accent" />
            <span className="text-xl font-bold text-sponsify-primary dark:text-sponsify-accent">SPONSIFY</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/for-brands" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              For Brands
            </Link>
            <Link to="/for-creators" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              For Creators
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/more-creators" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Discover Creators
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <Link to="/analytics" className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          
          <Button size="sm" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
