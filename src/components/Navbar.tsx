
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dabbewallah-orange text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-6 w-6" />
            <span className="text-xl font-bold">Dabbewallah</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-dabbewallah-peach transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-dabbewallah-peach transition-colors">Menu</Link>
            <Link to="/contact" className="hover:text-dabbewallah-peach transition-colors">Contact</Link>
            <Link to="/terms" className="hover:text-dabbewallah-peach transition-colors">Terms & Conditions</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-dabbewallah-orange animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link to="/" className="py-2 hover:text-dabbewallah-peach" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" className="py-2 hover:text-dabbewallah-peach" onClick={toggleMenu}>Menu</Link>
            <Link to="/contact" className="py-2 hover:text-dabbewallah-peach" onClick={toggleMenu}>Contact</Link>
            <Link to="/terms" className="py-2 hover:text-dabbewallah-peach" onClick={toggleMenu}>Terms & Conditions</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
