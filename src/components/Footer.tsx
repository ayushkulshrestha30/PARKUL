import React, { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Youtube,
  Mail, 
  Phone,
  MapPin,
  Shield,
  Award,
  RotateCcw,
  CreditCard,
  Send
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Size Guide', href: '#size-guide' },
    { name: 'Care Instructions', href: '#care' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Return Policy', href: '#returns' },
    { name: 'Shipping Info', href: '#shipping' }
  ];

  const explore = [
    { name: 'Shop by Category', href: '#category' },
    { name: 'Bras', href: '#bras' },
    { name: 'Panties', href: '#panties' },
    { name: 'Maxis', href: '#maxis' },
    { name: 'Best Sellers', href: '#bestsellers' },
    { name: 'New Arrivals', href: '#new' }
  ];

  const support = [
    { name: 'FAQs', href: '#faqs' },
    { name: 'Track Your Order', href: '#track' },
    { name: 'Cancellation Policy', href: '#cancellation' },
    { name: 'Exchange Process', href: '#exchange' }
  ];

  const trustSignals = [
    {
      icon: <CreditCard size={20} />,
      text: 'Secure Payment'
    },
    {
      icon: <Award size={20} />,
      text: 'Quality Guarantee'
    },
    {
      icon: <RotateCcw size={20} />,
      text: '7-Day Easy Returns'
    }
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.462-2.136 4.702-1.24 1.24-2.844 1.967-4.702 2.136-.38.03-.747.046-1.103.046s-.723-.016-1.103-.046c-1.858-.169-3.462-.896-4.702-2.136C2.582 11.622 1.855 10.018 1.686 8.16 1.656 7.78 1.64 7.413 1.64 7.057s.016-.723.046-1.103C1.855 4.096 2.582 2.492 3.822 1.252 5.062.012 6.666-.715 8.524-.884c.38-.03.747-.046 1.103-.046s.723.016 1.103.046c1.858.169 3.462.896 4.702 2.136 1.24 1.24 1.967 2.844 2.136 4.702.03.38.046.747.046 1.103s-.016.723-.046 1.103z"/>
        </svg>
      ), 
      href: '#', 
      name: 'Pinterest' 
    },
    { icon: <Youtube size={20} />, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          {/* Brand Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-3 font-serif">PARKUL</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Premium women's innerwear crafted with love and care. Experience comfort, style, and quality in every piece.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 border-b border-slate-700 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-slate-300 hover:text-pink-400 transition-colors duration-200 text-sm block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 border-b border-slate-700 pb-2">
                Policies
              </h3>
              <ul className="space-y-2">
                {policies.map((policy) => (
                  <li key={policy.name}>
                    <a 
                      href={policy.href}
                      className="text-slate-300 hover:text-pink-400 transition-colors duration-200 text-sm block py-1"
                    >
                      {policy.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 border-b border-slate-700 pb-2">
                Explore
              </h3>
              <ul className="space-y-2">
                {explore.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-slate-300 hover:text-pink-400 transition-colors duration-200 text-sm block py-1"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400 border-b border-slate-700 pb-2">
                Support
              </h3>
              <ul className="space-y-2">
                {support.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-slate-300 hover:text-pink-400 transition-colors duration-200 text-sm block py-1"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-slate-700/50 rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 backdrop-blur-sm border border-slate-600">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Subscribe to get offers & product updates.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Social Media & Trust Signals */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Social Media */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-pink-400 hover:bg-slate-600 transition-all duration-200 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Signals */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Why Choose Us</h3>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                {trustSignals.map((signal, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600"
                  >
                    <span className="text-pink-400 mr-2">{signal.icon}</span>
                    <span className="text-slate-300 text-sm font-medium">{signal.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-700/30 rounded-lg p-4 sm:p-6 mb-8 border border-slate-600">
            <div className="grid sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start">
                <Mail className="text-pink-400 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-400 text-xs mb-1">Email Us</p>
                  <a 
                    href="mailto:kulshresthaparul69@gmail.com"
                    className="text-slate-200 hover:text-pink-400 transition-colors duration-200 text-sm font-medium"
                  >
                    kulshresthaparul69@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="text-pink-400 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-400 text-xs mb-1">Call Us</p>
                  <a 
                    href="tel:+919711743576"
                    className="text-slate-200 hover:text-pink-400 transition-colors duration-200 text-sm font-medium"
                  >
                    +91 9711743576
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin className="text-pink-400 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-400 text-xs mb-1">Address</p>
                  <p className="text-slate-200 text-sm">
                    PARKUL Textile Industries, Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-slate-400 text-sm mb-2 sm:mb-0">
              © 2024 PARKUL. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <Shield size={16} className="mr-2 text-pink-400" />
              <span>SSL Secured & Safe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;