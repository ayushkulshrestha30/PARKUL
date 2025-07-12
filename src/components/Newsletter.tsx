import React, { useState } from 'react';
import { Gift, Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-pink-500 to-pink-600">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Offer Banner */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Gift className="text-white mr-2" size={20} />
            <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">
              Special Offer: Buy 2 Get 1 Free
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Don't Miss Out on Exclusive Deals
          </h2>
          <p className="text-sm sm:text-base text-pink-100 max-w-2xl mx-auto px-4 leading-relaxed">
            Subscribe to our newsletter and be the first to know about new collections, 
            exclusive offers, and styling tips.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto px-4">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-pink-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-pink-50 transition-colors duration-200 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button 
            onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop Now & Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;