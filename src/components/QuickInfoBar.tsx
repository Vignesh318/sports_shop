import React from 'react';
import { HelpCircle, ShoppingCart, Truck, MapPin, Plane } from 'lucide-react';

interface QuickInfoBarProps {
  onOpenModal: (modalType: string) => void;
}

export const QuickInfoBar: React.FC<QuickInfoBarProps> = ({ onOpenModal }) => {
  const cards = [
    {
      id: 'whyVinex',
      title: 'Why VINEXSHOP.COM ?',
      subtitle: 'Shopping benefits with us...',
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shadow-xs border border-blue-200">
          <HelpCircle className="w-5 h-5 text-blue-700" />
        </div>
      ),
    },
    {
      id: 'orderGuide',
      title: 'How to Order Online ?',
      subtitle: 'A quick & easy guide...',
      icon: (
        <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg shadow-xs border border-green-200">
          <ShoppingCart className="w-4 h-4 text-green-700" />
        </div>
      ),
    },
    {
      id: 'allIndiaShipping',
      title: 'All India Shipping *',
      subtitle: 'We ship all over India ...',
      icon: (
        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg shadow-xs border border-amber-200">
          <Truck className="w-4 h-4 text-amber-700" />
        </div>
      ),
    },
    {
      id: 'coverage',
      title: 'Where We Can Reach ?',
      subtitle: 'Our Courier & Cargo Partners...',
      icon: (
        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg shadow-xs border border-indigo-200">
          <MapPin className="w-4 h-4 text-indigo-700" />
        </div>
      ),
    },
    {
      id: 'trackOrder',
      title: 'Track Your Order !!!',
      subtitle: 'Check your order status ...',
      icon: (
        <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-lg shadow-xs border border-red-200">
          <Plane className="w-4 h-4 text-red-700" />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#f8f8f8] border-b border-gray-300 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onOpenModal(card.id)}
              className="bg-white hover:bg-red-50/50 border border-gray-200 rounded px-3 py-2 flex items-center justify-between text-left transition duration-150 shadow-2xs hover:border-red-300 hover:shadow-xs group cursor-pointer"
            >
              <div className="pr-1.5 overflow-hidden">
                <div className="text-[12px] font-bold text-[#b70000] group-hover:text-red-700 leading-tight truncate">
                  {card.title}
                </div>
                <div className="text-[11px] text-gray-500 font-normal leading-tight truncate mt-0.5">
                  {card.subtitle}
                </div>
              </div>
              <div className="shrink-0 transition-transform group-hover:scale-105">
                {card.icon}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
