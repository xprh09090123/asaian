import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="https://i.imgur.com/wEf7PLG.png" alt="Bluewing Logo" className="h-10 w-auto" />
          <span className="text-xl md:text-2xl font-bold">
            <span className="text-blue-400">Blue</span>wing
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-white hover:text-cyan-400 transition-colors">
            Products
          </a>
          <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
            About Us
          </a>
          <a href="#reviews" className="text-white hover:text-cyan-400 transition-colors">
            Reviews
          </a>
          <button 
            data-sellhub-open-cart-store-url="https://bluewinglol.sellhub.cx"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
          <a 
            href="https://discord.gg/bluewing" 
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-5 py-2 rounded-md transition-all transform hover:scale-105"
          >
            SUPPORT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            data-sellhub-open-cart-store-url="https://bluewinglol.sellhub.cx"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
          <button 
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-cyan-900/30">
          <div className="flex flex-col p-4 gap-4">
            <a 
              href="#products" 
              className="text-white py-2 px-4 hover:bg-cyan-900/20 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="text-white py-2 px-4 hover:bg-cyan-900/20 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#reviews" 
              className="text-white py-2 px-4 hover:bg-cyan-900/20 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="https://discord.gg/bluewing"
              className="bg-cyan-500 text-black font-medium py-3 px-5 rounded-md"
            >
              SUPPORT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;