import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import SizeGuideModal from './SizeGuideModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Products', 'About Us', 'Contact'];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-pink-600 font-serif">
                PARKUL
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Contact' ? '#contact' : `#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setShowSizeGuide(true)}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                Size Guide
              </button>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 sm:p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button className="p-1.5 sm:p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 relative">
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-pink-600 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="mt-3 sm:mt-4 relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 sm:top-3 text-gray-400" size={18} />
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 sm:mt-4 pb-4">
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium py-1.5 sm:py-2 text-sm sm:text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setShowSizeGuide(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium py-1.5 sm:py-2 text-sm sm:text-base text-left"
                >
                  Size Guide
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Size Guide Modal */}
      <SizeGuideModal 
        isOpen={showSizeGuide} 
        onClose={() => setShowSizeGuide(false)} 
      />
    </>
  );
};

export default Header;