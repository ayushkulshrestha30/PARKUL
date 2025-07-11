import React from 'react';
import { Leaf, Shield, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="text-pink-600" size={48} />,
      title: "Premium Cotton",
      description: "95% cotton + 5% elastane blend for ultimate comfort and breathability"
    },
    {
      icon: <Shield className="text-pink-600" size={48} />,
      title: "Skin Safe",
      description: "Hypoallergenic materials tested for sensitive skin with no harmful chemicals"
    },
    {
      icon: <Heart className="text-pink-600" size={48} />,
      title: "Made in India",
      description: "Ethically crafted with love and care, supporting local artisans and communities"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Why Choose PARKUL?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            We believe in creating innerwear that not only looks beautiful but feels amazing against your skin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-pink-100"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;