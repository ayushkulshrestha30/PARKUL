import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  originalPrice?: string;
}

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    }
  ];

  // Get items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = products.length - itemsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView, products.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = products.length - itemsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = products.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">
            Explore Our Comfort Collection
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Designed to fit you beautifully, crafted to last.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={goToPrevious}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-6 z-10 w-12 h-12 xl:w-14 xl:h-14 bg-white shadow-lg rounded-full items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-pink-100"
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-6 z-10 w-12 h-12 xl:w-14 xl:h-14 bg-white shadow-lg rounded-full items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-pink-100"
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(products.length * 100) / itemsPerView}%`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-pink-100/50 overflow-hidden">
                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-pink-50 to-rose-50">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Wishlist button */}
                      <button className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:bg-white transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100">
                        <Heart size={16} className="sm:w-5 sm:h-5" />
                      </button>

                      {/* Sale badge */}
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                          SALE
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-200">
                        {product.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-600">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm sm:text-base text-gray-400 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="text-xs sm:text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                          </span>
                        )}
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group/btn">
                        <ShoppingCart size={16} className="mr-2 group-hover/btn:animate-bounce" />
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Mobile */}
          <div className="flex justify-center mt-6 sm:mt-8 lg:hidden space-x-2">
            {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-pink-500 w-6 sm:w-8'
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="hidden lg:block mt-8">
            <div className="w-full bg-pink-100 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-pink-500 to-rose-500 h-1 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + itemsPerView) / products.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <button className="bg-white text-pink-600 border-2 border-pink-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;