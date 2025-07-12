import React, { useRef } from 'react';
import { ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  originalPrice?: string;
}

const ProductCarousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      title: "Floral Cotton Maxi Dress",
      price: "₹899",
      originalPrice: "₹1,299",
      description: "95% Cotton, 5% Elastane - Breathable & Comfortable",
      image: "/WhatsApp Image 2025-07-10 at 20.45.39_2df24454.jpg"
    },
    {
      id: 2,
      title: "Navy Block Print Maxi",
      price: "₹799",
      originalPrice: "₹1,199",
      description: "Premium Cotton Blend - Traditional Print",
      image: "/WhatsApp Image 2025-07-10 at 20.45.33_933f1ba4.jpg"
    },
    {
      id: 3,
      title: "Maroon Ethnic Maxi Dress",
      price: "₹949",
      originalPrice: "₹1,399",
      description: "Soft Cotton Fabric - Elegant Design",
      image: "/WhatsApp Image 2025-07-10 at 20.45.33_c7b6f57d.jpg"
    },
    {
      id: 4,
      title: "Golden Leaf Kaftan",
      price: "₹1,199",
      originalPrice: "₹1,699",
      description: "Luxurious Cotton - Flowing Silhouette",
      image: "/WhatsApp Image 2025-07-10 at 20.45.34_1e639564.jpg"
    },
    {
      id: 5,
      title: "Lace Push-Up Bra",
      price: "₹599",
      originalPrice: "₹899",
      description: "Delicate Lace - Perfect Support & Comfort",
      image: "/WhatsApp Image 2025-07-10 at 20.45.34_58acfc71.jpg"
    },
    {
      id: 6,
      title: "Cotton Mid-Waist Panty",
      price: "₹299",
      originalPrice: "₹399",
      description: "95% Cotton, 5% Spandex - All-day Comfort",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 7,
      title: "Seamless Sports Bra",
      price: "₹699",
      originalPrice: "₹999",
      description: "Medium Support - Moisture Wicking Fabric",
      image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 8,
      title: "Comfort Fit Brief",
      price: "₹249",
      originalPrice: "₹349",
      description: "Soft Cotton Blend - No-Show Design",
      image: "https://images.pexels.com/photos/7679658/pexels-photo-7679658.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="product-section" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
            Explore Our Collection
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 py-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] flex-shrink-0 bg-gray-50 rounded-2xl p-4 text-center transition-transform duration-300 hover:scale-105 group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-2xl mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 sm:h-56 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Wishlist button */}
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-200 opacity-0 group-hover:opacity-100">
                    <Heart size={16} />
                  </button>

                  {/* Sale badge */}
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      SALE
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-pink-600">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-2xl font-medium text-sm hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center">
                  <ShoppingCart size={14} className="mr-2" />
                  Shop Now
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:border-pink-300 transition-all duration-200 shadow-lg hover:shadow-xl z-10 hidden sm:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:border-pink-300 transition-all duration-200 shadow-lg hover:shadow-xl z-10 hidden sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-8">
          <button 
            onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-pink-600 border-2 border-pink-500 px-6 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductCarousel;