import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappMessage = "Hello Century Education Consultancy, I would like to know more about your services.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-white" />
              <h3 className="text-white font-semibold">Chat with us</h3>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4">
            <p className="text-gray-600 mb-4">
              👋 Hi! Need help with your study abroad plans? Chat with our experts on WhatsApp!
            </p>
            
            <a
              href={`https://wa.me/918465079013?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-all w-full font-medium"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start WhatsApp Chat</span>
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-sm text-gray-500 hover:text-gray-700 mt-3 text-center w-full"
            >
              No thanks, I'll browse
            </button>
          </div>
        </div>
      )}
    </div>
  );
}