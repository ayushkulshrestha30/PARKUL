import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ShoppingCart, Heart } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  originalPrice?: string;
}

const ProductCarousel: React.FC = () => {
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

        {/* Swiper Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            speed={600} // Smooth 600ms transition
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-pink-300',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-pink-500',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="!pb-12 sm:!pb-16"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-pink-100/50 overflow-hidden h-full">
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
                  <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-200">
                      {product.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
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
                    <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group/btn mt-auto">
                      <ShoppingCart size={16} className="mr-2 group-hover/btn:animate-bounce" />
                      Shop Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-6 z-10 w-12 h-12 xl:w-14 xl:h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-pink-100 hidden lg:flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-6 z-10 w-12 h-12 xl:w-14 xl:h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-pink-100 hidden lg:flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
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