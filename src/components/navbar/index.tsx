
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';  // Import useAuth
import ThemeToggle from './ThemeToggle';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();  // Get authentication state

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
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
          <span className="text-xl font-bold text-sponsify-primary dark:text-sponsify-accent">SPONSIFY</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToAbout={scrollToAbout} />
          {/* Add Admin link for authenticated users */}
          {isAuthenticated && (
            <Link 
              to="/admin" 
              className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors"
            >
              Admin Panel
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link to="/login" className="text-sponsify-secondary dark:text-sponsify-accent text-sm font-medium">
              Log in
            </Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/register" className="text-sm font-medium dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90">
              Get Started
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
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

      <MobileMenu isOpen={isMobileMenuOpen} scrollToAbout={scrollToAbout} closeMobileMenu={closeMobileMenu} />
    </nav>
  );
};

export default Navbar;
