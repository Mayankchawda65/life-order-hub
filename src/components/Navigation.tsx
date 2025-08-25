import { useState } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Life-Admin Bills</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>meerachawda49255@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Chattisgarh, India</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Dashboard
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Contact
              </button>
              
              {/* Contact Info - Mobile */}
              <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>meerachawda49255@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Chattisgarh, India</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;