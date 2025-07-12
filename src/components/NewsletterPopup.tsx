import React, { useState, useEffect } from 'react';

interface NewsletterPopupProps {
  delay?: number;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ delay = 10000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

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
    
    // Close popup after successful signup
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="popup fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-lg">
        <button 
          onClick={handleClose}
          className="close-popup absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-pink-500 transition-colors duration-200"
        >
          ×
        </button>
        
        <h3 className="text-xl font-semibold mb-2">Stay Updated!</h3>
        <p className="text-gray-600 mb-4">Get exclusive deals and early access to new drops.</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200" 
            required
          />
          <button 
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors duration-200 font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;