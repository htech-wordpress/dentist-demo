import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919623551590" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform hover:scale-110 group relative"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:09623551590" 
        className="w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full flex gap-2 items-center justify-center shadow-lg shadow-primary/30 transition-transform hover:scale-110 group relative"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
