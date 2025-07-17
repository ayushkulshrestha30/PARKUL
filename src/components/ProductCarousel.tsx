import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
      sale: true
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400",
      sale: true
    },
    {
      id: 3,
      name: "Summer Dress",
      price: 49.99,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
      sale: false
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      sale: true
    },
    {
      id: 5,
      name: "Leather Handbag",
      price: 129.99,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400",
      sale: false
    },
    {
      id: 6,
      name: "Wool Sweater",
      price: 69.99,
      originalPrice: 89.99,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
      sale: true
    }
  ];

  const getVisibleProducts = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 1;
    if (screenWidth < 768) return 2;
    if (screenWidth < 1024) return 3;
    return 4;
  };

  const [visibleProducts, setVisibleProducts] = useState(getVisibleProducts());

  useEffect(() => {
    const handleResize = () => {
      setVisibleProducts(getVisibleProducts());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= products.length - visibleProducts ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, visibleProducts, isAutoPlaying, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= products.length - visibleProducts ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? products.length - visibleProducts : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products crafted with care and attention to detail.
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>

          {/* Products Container */}
          <div className="flex transition-transform duration-600 ease-in-out"
               style={{ 
                 transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
                 width: `${(products.length / visibleProducts) * 100}%`
               }}>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / products.length}%` }}
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Sale Badge */}
                    {product.sale && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Sale
                      </div>
                    )}
                    
                    {/* Wishlist Button */}
                    <button className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-600 hover:text-pink-500 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                      <Heart size={20} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-pink-600">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button className="mt-auto bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: products.length - visibleProducts + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-pink-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;