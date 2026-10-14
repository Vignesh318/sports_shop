import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, Package, MapPin } from 'lucide-react';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOrderId?: string;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({
  isOpen,
  onClose,
  initialOrderId = '',
}) => {
  const [orderQuery, setOrderQuery] = useState(initialOrderId || 'VNX-84210');
  const [isSearched, setIsSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderQuery.trim()) {
      setIsSearched(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="bg-[#c40000] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Truck className="w-5 h-5" />
            <h2 className="font-bold text-base tracking-wide">
              Track Your Order !!!
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-5 border-b border-gray-200 bg-gray-50">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder="Enter Order ID (e.g. VNX-84210) or Phone"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs uppercase font-mono focus:ring-1 focus:ring-red-600 outline-hidden bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-[#c40000] hover:bg-red-800 text-white text-xs font-bold px-4 py-2 rounded flex items-center space-x-1 cursor-pointer transition"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Track</span>
            </button>
          </form>
          <div className="text-[11px] text-gray-500 mt-1.5">
            Try sample order code: <span className="font-mono text-red-700 font-bold">VNX-84210</span> or your latest checkout ID.
          </div>
        </div>

        {/* Tracking Details */}
        {isSearched && (
          <div className="p-5 text-xs text-gray-700 space-y-4">
            <div className="bg-red-50/50 border border-red-200 rounded p-3 flex justify-between items-center">
              <div>
                <span className="font-semibold text-gray-800">Order Number: </span>
                <span className="font-mono font-bold text-red-700">{orderQuery}</span>
                <div className="text-[11px] text-gray-500 mt-0.5">
                  Courier Partner: SafeXpress Air Cargo (AWB: 982138401)
                </div>
              </div>
              <span className="bg-green-100 text-green-800 font-bold px-2.5 py-1 rounded-full text-[10px]">
                IN TRANSIT
              </span>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-4 pl-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Order Verified & Booked</div>
                  <div className="text-[11px] text-gray-500">Vinex Enterprises Pvt Ltd, Meerut Hub</div>
                  <div className="text-[10px] text-gray-400">10:15 AM - Payment Confirmed</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Dispatched from Factory Warehouse</div>
                  <div className="text-[11px] text-gray-500">Sports Complex Industrial Area, Meerut</div>
                  <div className="text-[10px] text-gray-400">03:40 PM - Barcode Scanned & Loaded</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <div className="font-bold text-amber-700">In Transit - Regional Sorting Center</div>
                  <div className="text-[11px] text-gray-500">Package in transit to nearest regional delivery branch</div>
                  <div className="text-[10px] text-amber-600">Expected Delivery: Within 24-48 Hours</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 opacity-50">
                <Package className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-700">Out for Delivery</div>
                  <div className="text-[11px] text-gray-400">Courier representative will contact for doorstep handoff</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded p-3 text-[11px] text-gray-600 flex items-center justify-between border border-gray-200">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Head Office: Vinex Enterprises, Meerut, UP, India</span>
              </div>
              <a
                href="tel:+918126110505"
                className="text-red-700 font-bold hover:underline"
              >
                Helpdesk Call
              </a>
            </div>
          </div>
        )}

        <div className="bg-gray-100 px-5 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-800 hover:bg-black text-white text-xs font-semibold px-4 py-1.5 rounded cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
