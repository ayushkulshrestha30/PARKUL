import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search query:', searchQuery);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <form onSubmit={handleSearch} className="relative">
            <div className={`
              relative transition-all duration-300 transform
              ${isFocused ? 'scale-105' : 'scale-100'}
            `}>
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
                <Search 
                  className={`transition-colors duration-200 ${
                    isFocused ? 'text-pink-500' : 'text-gray-400'
                  }`} 
                  size={20} 
                />
              </div>
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search for comfort… (bras, panties, maxis…)"
                className={`
                  w-full pl-12 sm:pl-14 pr-4 sm:pr-6 
                  py-3 sm:py-4 
                  text-sm sm:text-base
                  bg-white 
                  border-2 rounded-2xl
                  transition-all duration-300
                  focus:outline-none focus:ring-0
                  shadow-lg hover:shadow-xl
                  ${isFocused 
                    ? 'border-pink-400 shadow-pink-100' 
                    : 'border-pink-200 hover:border-pink-300'
                  }
                `}
              />
              
              {/* Search button for mobile */}
              <button
                type="submit"
                className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center sm:hidden"
              >
                <div className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition-colors duration-200">
                  <Search size={16} />
                </div>
              </button>
            </div>
          </form>
          
          {/* Search suggestions (optional) */}
          <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Bras', 'Panties', 'Maxis', 'Cotton', 'Comfort Fit'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setSearchQuery(suggestion)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-pink-600 bg-pink-50 hover:bg-pink-100 rounded-full transition-all duration-200 transform hover:scale-105 border border-pink-200 hover:border-pink-300"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Building Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-pink-100">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg sm:text-2xl">💬</span>
              </div>
            </div>
            
            <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-serif italic">
              "Every PARKUL product is <em className="text-pink-600 font-semibold not-italic">crafted with care</em> at 
              <strong className="text-gray-800 font-bold"> PARKUL TEXTILE INDUSTRIES</strong> — ensuring unmatched 
              <em className="text-pink-600 font-semibold not-italic">comfort</em>, fit, and 
              <em className="text-pink-600 font-semibold not-italic">fabric quality</em>."
            </blockquote>
            
            {/* Additional trust elements */}
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                <span>Made in India</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                <span>95% Cotton + 5% Elastane</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                <span>Ethically Manufactured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;