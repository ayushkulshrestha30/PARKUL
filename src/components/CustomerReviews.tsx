import React from 'react';
import { User } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  initials: string;
  date: string;
  feedback: string;
  verified: boolean;
}

const CustomerReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Priya S.",
      initials: "PS",
      date: "January 15, 2024",
      feedback: "Absolutely love the quality! The fabric is so soft and comfortable. I've been wearing PARKUL for months now and the fit is perfect every time. Highly recommend to all my friends!",
      verified: true
    },
    {
      id: 2,
      name: "Anita K.",
      initials: "AK",
      date: "January 10, 2024",
      feedback: "Finally found innerwear that doesn't compromise on comfort or style. The cotton blend is breathable and the colors stay vibrant even after multiple washes. Great value for money!",
      verified: true
    },
    {
      id: 3,
      name: "Meera R.",
      initials: "MR",
      date: "January 8, 2024",
      feedback: "PARKUL has completely changed my comfort experience. The quality is exceptional and the customer service is outstanding. Fast delivery and beautiful packaging too!",
      verified: true
    },
    {
      id: 4,
      name: "Kavya M.",
      initials: "KM",
      date: "January 5, 2024",
      feedback: "I have sensitive skin and these are the only products that don't cause any irritation. The fabric quality is premium and the fit is exactly as described. Will definitely order again!",
      verified: true
    },
    {
      id: 5,
      name: "Ritu P.",
      initials: "RP",
      date: "January 2, 2024",
      feedback: "Excellent quality and comfortable to wear all day. The stitching is perfect and it maintains its shape after washing. PARKUL has become my go-to brand for innerwear.",
      verified: true
    },
    {
      id: 6,
      name: "Sneha T.",
      initials: "ST",
      date: "December 28, 2023",
      feedback: "Love the elegant designs and the comfort level is unmatched. The sizing guide was very helpful and everything fits perfectly. Great experience shopping with PARKUL!",
      verified: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50/30 via-white to-rose-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">
            What Our Customers Say
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto">
            Real experiences from women who trust PARKUL for their comfort and style needs.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 sm:p-8 border border-pink-100/50"
            >
              {/* Customer Info */}
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-pink-600 font-semibold text-sm sm:text-base">
                    {review.initials}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-2">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    {review.date}
                  </p>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  "{review.feedback}"
                </p>
              </div>

              {/* Bottom Border */}
              <div className="w-full h-1 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-pink-100/50 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Join Thousands of Happy Customers
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Experience the PARKUL difference for yourself. Quality, comfort, and style – 
              delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="bg-white text-pink-600 border-2 border-pink-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;