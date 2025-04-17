import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';

// This component is deprecated. Please use Header.tsx instead.
// Keeping this for backward compatibility but should eventually be removed.
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dabbewallah-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-6 w-6 text-dabbewallah-orange" />
            <div className="flex items-end">
              <span className="text-white text-xl font-bold">dabbe</span>
              <span className="text-dabbewallah-orange text-xl font-bold">wallah</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-dabbewallah-orange transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-dabbewallah-orange transition-colors">Menu</Link>
            <Link to="/pricing" className="hover:text-dabbewallah-orange transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-dabbewallah-orange transition-colors">Contact</Link>
            <Link to="/terms" className="hover:text-dabbewallah-orange transition-colors">Terms</Link>
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
        <div className="md:hidden bg-dabbewallah-black animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link to="/" className="py-2 hover:text-dabbewallah-orange" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" className="py-2 hover:text-dabbewallah-orange" onClick={toggleMenu}>Menu</Link>
            <Link to="/pricing" className="py-2 hover:text-dabbewallah-orange" onClick={toggleMenu}>Pricing</Link>
            <Link to="/contact" className="py-2 hover:text-dabbewallah-orange" onClick={toggleMenu}>Contact</Link>
            <Link to="/terms" className="py-2 hover:text-dabbewallah-orange" onClick={toggleMenu}>Terms</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
