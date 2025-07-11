import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import ProductCarousel from './components/ProductCarousel';
import Features from './components/Features';
import ManufacturingUnit from './components/ManufacturingUnit';
import CustomerReviews from './components/CustomerReviews';
import Trust from './components/Trust';
import Newsletter from './components/Newsletter';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import PopupNotification from './components/PopupNotification';
import NewsletterPopup from './components/NewsletterPopup';
import SizeGuideModal from './components/SizeGuideModal';

function App() {
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const handlePopupAction = () => {
    // Handle the popup action (e.g., redirect to signup, open chat, etc.)
    console.log('Popup action triggered');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SearchSection />
        <ProductCarousel />
        <Features />
        <CustomerReviews />
        <Trust />
        <ManufacturingUnit />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      
      {/* Pop-up Notifications */}
      <PopupNotification
        type="discount"
        message="Get 15% Off Your First Order!"
        ctaText="Shop Now"
        onAction={handlePopupAction}
        delay={10000}
      />
      
      {/* Newsletter Popup */}
      <NewsletterPopup delay={20000} />
      
      {/* Size Guide Modal */}
      <SizeGuideModal 
        isOpen={showSizeGuide} 
        onClose={() => setShowSizeGuide(false)} 
      />
    </div>
  );
}

export default App;