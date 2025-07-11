import React from 'react';
import { CheckCircle, Scissors, Award, Truck } from 'lucide-react';

const ManufacturingUnit: React.FC = () => {
  const trustPoints = [
    {
      icon: <CheckCircle className="text-pink-600" size={24} />,
      text: "In-house production for every item"
    },
    {
      icon: <Scissors className="text-pink-600" size={24} />,
      text: "Crafted by skilled artisans"
    },
    {
      icon: <Award className="text-pink-600" size={24} />,
      text: "Premium fabrics & strict quality checks"
    },
    {
      icon: <Truck className="text-pink-600" size={24} />,
      text: "Direct from factory to your doorstep"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-25 via-white to-rose-25" style={{ backgroundColor: '#fffafc' }}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">
            Manufactured With Pride
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            All PARKUL products are crafted with care at our own facility in New Delhi. We take pride in delivering unmatched comfort, fit, and quality — directly from our textile unit to you.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100/50">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Quality Statement & Trust Points */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              {/* Quality Statement */}
              <div className="mb-8 sm:mb-10">
                <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-serif italic mb-6">
                  "Every thread, every stitch – made at PARKUL's own manufacturing facility in New Delhi. We don't outsource quality, 
                  <em className="text-pink-600 font-semibold not-italic"> we weave it ourselves</em>. 
                  100% in-house manufacturing for unmatched 
                  <em className="text-pink-600 font-semibold not-italic"> comfort, durability, and elegance</em>."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">PARKUL TEXTILE INDUSTRIES</p>
                    <p className="text-sm text-gray-600">New Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Trust Points */}
              <div className="space-y-4 sm:space-y-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
                  Why Choose Our In-House Manufacturing:
                </h3>
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
                      {point.icon}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 sm:mt-10">
                <a
                  href="mailto:kulshresthaparul69@gmail.com"
                  className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Visit Our Facility
                </a>
              </div>
            </div>

            {/* Right Side - Google Map */}
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] bg-pink-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.582588567333!2d77.25614419735944!3d28.51843228397801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce15f5526cf9f%3A0x3e7f40b64577a0c2!2s18%2F281%20Dakshin%20Puri%20Extension%2C%20New%20Delhi%2C%20Delhi%20110062!5e0!3m2!1sen!2sin!4v1720690195630!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PARKUL Textile Industries Location"
                className="absolute inset-0"
              />
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-pink-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">PARKUL Textile Industries</p>
                    <p className="text-xs text-gray-600">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            📍 Visit us at our in-house manufacturing unit: 
            <strong className="text-gray-800 ml-1">
              18/281 Dakshin Puri Extension, New Delhi – 110062
            </strong>
          </p>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Experience the PARKUL Difference
            </h3>
            <p className="text-pink-100 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              From our factory floor to your wardrobe – every piece is crafted with precision, 
              care, and the finest materials. Quality you can trust, comfort you can feel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kulshresthaparul69@gmail.com"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Factory Visit
              </a>
              <a
                href="https://wa.me/919711743576"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingUnit;