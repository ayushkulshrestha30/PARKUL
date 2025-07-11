import React, { useState, useEffect } from 'react';
import { X, Gift, MessageCircle, Percent } from 'lucide-react';

interface PopupNotificationProps {
  type?: 'discount' | 'help' | 'newsletter';
  message?: string;
  ctaText?: string;
  onClose?: () => void;
  onAction?: () => void;
  delay?: number;
  triggerOnScroll?: boolean;
  scrollThreshold?: number;
}

const PopupNotification: React.FC<PopupNotificationProps> = ({
  type = 'discount',
  message,
  ctaText,
  onClose,
  onAction,
  delay = 8000,
  triggerOnScroll = false,
  scrollThreshold = 300
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if popup was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem(`parkul-popup-${type}-dismissed`);
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, [type]);

  // Handle scroll trigger
  useEffect(() => {
    if (isDismissed || !triggerOnScroll) return;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, triggerOnScroll, scrollThreshold, isVisible]);

  // Handle time-based trigger
  useEffect(() => {
    if (isDismissed || triggerOnScroll) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isDismissed, delay, triggerOnScroll]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(`parkul-popup-${type}-dismissed`, 'true');
    onClose?.();
  };

  const handleAction = () => {
    onAction?.();
    handleClose();
  };

  // Default content based on type
  const getDefaultContent = () => {
    switch (type) {
      case 'discount':
        return {
          icon: <Gift className="text-pink-500" size={20} />,
          message: message || "Get 15% Off Your First Order!",
          ctaText: ctaText || "Sign Up Now",
          bgGradient: "from-pink-50 to-rose-50",
          borderColor: "border-pink-200"
        };
      case 'help':
        return {
          icon: <MessageCircle className="text-blue-500" size={20} />,
          message: message || "Need Help? Chat with us!",
          ctaText: ctaText || "Start Chat",
          bgGradient: "from-blue-50 to-indigo-50",
          borderColor: "border-blue-200"
        };
      case 'newsletter':
        return {
          icon: <Percent className="text-purple-500" size={20} />,
          message: message || "Subscribe for exclusive deals!",
          ctaText: ctaText || "Subscribe",
          bgGradient: "from-purple-50 to-pink-50",
          borderColor: "border-purple-200"
        };
      default:
        return {
          icon: <Gift className="text-pink-500" size={20} />,
          message: message || "Special offer just for you!",
          ctaText: ctaText || "Learn More",
          bgGradient: "from-pink-50 to-rose-50",
          borderColor: "border-pink-200"
        };
    }
  };

  if (isDismissed || !isVisible) return null;

  const content = getDefaultContent();

  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } sm:hidden`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-out transform ${
          isVisible 
            ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
            : 'translate-x-full translate-y-4 opacity-0 scale-95'
        } 
        bottom-4 right-4 sm:bottom-6 sm:right-6 
        w-80 max-w-[calc(100vw-2rem)] sm:max-w-sm`}
        style={{
          animation: isVisible ? 'slideInBounce 0.6s ease-out' : undefined
        }}
      >
        <div className={`
          bg-gradient-to-br ${content.bgGradient} 
          border ${content.borderColor}
          rounded-2xl shadow-2xl backdrop-blur-sm
          p-4 sm:p-5
          relative overflow-hidden
        `}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 rounded-full bg-white/80 hover:bg-white transition-all duration-200 transform hover:scale-110 group"
            aria-label="Close notification"
          >
            <X size={14} className="text-gray-600 group-hover:text-gray-800" />
          </button>

          {/* Content */}
          <div className="relative z-10">
            {/* Icon and message */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm">
                {content.icon}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-gray-800 font-medium text-sm sm:text-base leading-relaxed">
                  {content.message}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleAction}
              className={`
                w-full py-2.5 px-4 rounded-xl font-semibold text-sm
                bg-gradient-to-r ${
                  type === 'discount' 
                    ? 'from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600' 
                    : type === 'help'
                    ? 'from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                    : 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                }
                text-white shadow-lg
                transition-all duration-200 transform hover:scale-105 hover:shadow-xl
                active:scale-95
              `}
            >
              {content.ctaText}
            </button>

            {/* Small disclaimer or additional text */}
            <p className="text-xs text-gray-500 text-center mt-2 opacity-75">
              {type === 'discount' && "Limited time offer"}
              {type === 'help' && "Available 24/7"}
              {type === 'newsletter' && "Unsubscribe anytime"}
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for bounce animation */}
      <style jsx>{`
        @keyframes slideInBounce {
          0% {
            transform: translateX(100%) translateY(20px) scale(0.9);
            opacity: 0;
          }
          60% {
            transform: translateX(-10px) translateY(-5px) scale(1.02);
            opacity: 1;
          }
          80% {
            transform: translateX(5px) translateY(2px) scale(0.98);
          }
          100% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default PopupNotification;