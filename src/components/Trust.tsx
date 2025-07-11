import React from 'react';
import { Star, Users, Award, Truck } from 'lucide-react';

const Trust: React.FC = () => {
  const trustPoints = [
    {
      icon: <Star className="text-pink-600" size={32} />,
      title: "5-Star Reviews",
      description: "Loved by thousands of satisfied customers"
    },
    {
      icon: <Users className="text-pink-600" size={32} />,
      title: "50,000+ Happy Customers",
      description: "Join our growing community of confident women"
    },
    {
      icon: <Award className="text-pink-600" size={32} />,
      title: "Quality Certified",
      description: "ISO certified manufacturing processes"
    },
    {
      icon: <Truck className="text-pink-600" size={32} />,
      title: "Free Shipping",
      description: "On orders above ₹999 across India"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Trusted by Women Across India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            At PARKUL, we're committed to delivering exceptional quality and comfort. Our premium cotton blend 
            (95% cotton + 5% elastane) ensures breathability and flexibility, while our ethical production 
            practices support local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                {point.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Customer Testimonial */}
        <div className="bg-pink-50 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 italic mb-3 sm:mb-4 leading-relaxed px-2">
              "PARKUL has completely changed my comfort experience. The quality is exceptional and 
              the fit is perfect. I've been a loyal customer for over a year now!"
            </blockquote>
            <cite className="text-sm sm:text-base text-pink-600 font-semibold">- Priya S., Mumbai</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;