import React from 'react';
import { ShoppingCart, Smartphone, Phone, Search } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onOpenCart: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  currentUser: string | null;
  onLogout: () => void;
  onResetSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onOpenCart,
  onOpenAuth,
  currentUser,
  onLogout,
  onResetSearch,
}) => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Welcome & Phone Bar */}
      <div className="bg-[#f5f5f5] border-b border-gray-200 text-xs text-gray-700 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span>Welcome:</span>
            {currentUser ? (
              <span className="font-semibold text-gray-800">
                {currentUser} (
                <button
                  onClick={onLogout}
                  className="text-red-700 hover:underline cursor-pointer"
                >
                  Sign Out
                </button>
                )
              </span>
            ) : (
              <div className="flex items-center space-x-1">
                <span className="text-gray-800 font-medium">Guest User,</span>
                <button
                  onClick={() => onOpenAuth('register')}
                  className="text-[#b70000] hover:underline font-semibold cursor-pointer"
                >
                  Register
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="text-[#b70000] hover:underline font-semibold cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-6 text-gray-700">
            <a
              href="tel:+918126110505"
              className="flex items-center space-x-1.5 hover:text-red-700 transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                <Smartphone className="w-3 h-3" />
              </span>
              <span className="font-medium tracking-tight">+91-8126110505</span>
            </a>
            <a
              href="tel:+911212441111"
              className="flex items-center space-x-1.5 hover:text-red-700 transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                <Phone className="w-3 h-3" />
              </span>
              <span className="font-medium tracking-tight">+91-121-2441111</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header with Logo, Search and Cart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div
          onClick={onResetSearch}
          className="cursor-pointer select-none flex flex-col items-start group"
        >
          <div className="flex items-baseline">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-[#1b2b65] uppercase italic transition-transform group-hover:scale-[1.02]">
              VINEX
            </span>
            <span className="text-xl sm:text-2xl font-black text-gray-800 tracking-wider ml-1 uppercase font-serif drop-shadow-sm">
              SHOP
            </span>
          </div>
          <div className="text-[11px] sm:text-[12px] tracking-wide text-gray-600 font-medium -mt-1 font-sans">
            Exclusive Online Sports Shop
          </div>
        </div>

        {/* Search & Cart section */}
        <div className="flex flex-wrap items-center justify-end gap-3 w-full md:w-auto">
          {/* Cart Box */}
          <button
            onClick={onOpenCart}
            className="flex items-center space-x-2 bg-white hover:bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-xs text-gray-800 shadow-xs transition cursor-pointer"
            title="View Cart"
          >
            <ShoppingCart className="w-4 h-4 text-gray-700" />
            <span className="font-semibold text-gray-800">
              {cartCount} Items
            </span>
            {cartCount > 0 && (
              <span className="text-red-700 font-bold ml-1 text-[11px]">
                (₹{cartTotal.toLocaleString('en-IN')})
              </span>
            )}
          </button>

          {/* Search Form */}
          <form
            onSubmit={onSearchSubmit}
            className="flex items-center shadow-xs"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Enter Product Name / Code"
              className="w-48 sm:w-64 md:w-72 border border-gray-300 rounded-l px-3 py-1.5 text-xs text-gray-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-[#d23018] hover:bg-[#b5200c] active:bg-[#971b0a] text-white text-xs font-semibold px-4 py-1.5 rounded-r transition-colors flex items-center cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 mr-1 sm:hidden" />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
