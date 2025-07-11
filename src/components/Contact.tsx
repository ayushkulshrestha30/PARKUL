import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, Send, Clock, Award } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We'd love to hear from you. Get in touch with our team for any questions, 
            feedback, or business inquiries.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                PARUL KULSHRESTHA
              </h3>
              <p className="text-pink-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Founder & Owner
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Visionary leader behind PARKUL, dedicated to creating premium quality 
                innerwear that combines comfort, style, and ethical manufacturing practices.
              </p>
            </div>

            {/* Managing Director */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <User className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                MAYANK KULSHRESTHA
              </h3>
              <p className="text-pink-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Managing Director
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Strategic leader overseeing operations and business development, 
                ensuring PARKUL's commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Get In Touch
              </h2>
              
              {/* Primary Contact CTA */}
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 text-white">
                <div className="flex items-center mb-4">
                  <Mail className="mr-3 sm:mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">Email Us Directly</h3>
                    <p className="text-pink-100 text-sm sm:text-base">For immediate assistance</p>
                  </div>
                </div>
                <a 
                  href="mailto:kulshresthaparul69@gmail.com"
                  className="inline-flex items-center bg-white text-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Mail className="mr-2" size={18} />
                  kulshresthaparul69@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <Phone className="text-pink-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Phone</h4>
                  <a 
                    href="tel:+919711743576"
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    +91 9711743576
                  </a>
                  <p className="text-gray-500 text-xs sm:text-sm">Available Mon-Sat, 9 AM - 6 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-pink-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Location</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Made in India</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Ethically manufactured with love</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-pink-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Response Time</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Within 24 hours</p>
                  <p className="text-gray-500 text-xs sm:text-sm">We value your time and queries</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-pink-50 rounded-lg p-4 sm:p-6">
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Business Hours</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-800 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-4 font-medium">
            Need an instant reply? We're just a message away!
          </p>
          <a
            href="https://wa.me/919711743576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#25D366] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#1ea952] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
          >
            <svg 
              className="w-5 h-5 mr-2 sm:mr-3 flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            💬 Chat with us on WhatsApp
          </a>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-6 sm:p-8 lg:p-12 text-white">
            <MessageSquare className="mx-auto mb-4 sm:mb-6" size={48} />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Have Questions About Our Products?
            </h3>
            <p className="text-pink-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Our team is here to help you find the perfect fit and answer any questions 
              about our premium cotton innerwear collection.
            </p>
            <a 
              href="mailto:kulshresthaparul69@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2 sm:mr-3" size={20} />
              Email Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};