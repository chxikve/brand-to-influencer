import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import ThemeToggle from './ThemeToggle';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

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
          className="flex items-center space-x-3"
        >
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-blue-500 font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-white">Sponsify</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToAbout={scrollToAbout} />
          {isAuthenticated && (
            <Link 
              to="/admin" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Admin Panel
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link to="/login" className="text-gray-300 text-sm font-medium">
              Log in
            </Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/register" className="text-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-black">
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
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} scrollToAbout={scrollToAbout} closeMobileMenu={closeMobileMenu} />
    </nav>
  );
};

export default Navbar;
