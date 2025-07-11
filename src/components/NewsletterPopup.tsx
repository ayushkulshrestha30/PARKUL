import React, { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';

interface NewsletterPopupProps {
  delay?: number;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ delay = 15000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup was previously dismissed
    const dismissed = localStorage.getItem('parkul-newsletter-dismissed');
    if (dismissed === 'true') return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('parkul-newsletter-dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`fixed z-50 transition-all duration-700 ease-out transform ${
          isVisible 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-full opacity-0 scale-95'
        } 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[90vw] max-w-md`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-pink-100">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
            >
              <X size={16} className="text-white" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center mb-3">
                <Gift className="mr-3" size={24} />
                <h3 className="text-xl font-bold">Exclusive Offer!</h3>
              </div>
              <p className="text-pink-100 text-sm">
                Get 20% off your first order + free shipping
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Join Our Comfort Club
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Be the first to know about new collections, exclusive deals, and styling tips.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get My 20% Discount
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    No spam, unsubscribe anytime. By signing up, you agree to our privacy policy.
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>Easy Returns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                    <span>Premium Quality</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Welcome to the Club!</h4>
                <p className="text-gray-600 text-sm">
                  Check your email for your 20% discount code. Happy shopping!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterPopup;