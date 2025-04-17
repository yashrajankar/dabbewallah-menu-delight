
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-1">
            <div className="flex items-end">
              <span className="text-dabbewallah-black text-2xl md:text-3xl font-bold tracking-tight">dabbe</span>
              <span className="text-dabbewallah-orange text-2xl md:text-3xl font-bold tracking-tight">wallah</span>
              <span className="ml-1 text-xs text-dabbewallah-black font-medium hidden md:inline-block">TIFFIN SERVICES & DINE IN</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium">
              Home
            </Link>
            <Link to="/menu" className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium">
              Menu
            </Link>
            <Link to="/pricing" className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium">
              Contact
            </Link>
            <Link to="/terms" className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium">
              Terms
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-dabbewallah-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/pricing"
                className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/terms"
                className="text-dabbewallah-black hover:text-dabbewallah-orange transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Terms
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
