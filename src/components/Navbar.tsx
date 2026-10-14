import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSelectCategory: (categoryId: string | null) => void;
  onOpenModal: (modalType: string) => void;
  onNavigateHome: () => void;
  selectedCategory: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectCategory,
  onOpenModal,
  onNavigateHome,
  selectedCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownHover = (name: string) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="w-full bg-[#c40000] text-white shadow-md relative z-40 border-t border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center text-[13px] font-semibold tracking-wide">
          <button
            onClick={onNavigateHome}
            className={`px-4 py-2.5 transition-colors cursor-pointer hover:bg-[#a00000] ${
              !selectedCategory ? 'bg-[#a00000]' : ''
            }`}
          >
            Home
          </button>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('about')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="px-4 py-2.5 flex items-center space-x-1 hover:bg-[#a00000] transition-colors cursor-pointer">
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute left-0 top-full w-56 bg-white text-gray-800 shadow-xl border border-gray-200 py-1 text-xs z-50">
                <button
                  onClick={() => {
                    onOpenModal('whyVinex');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700 transition"
                >
                  Who We Are ?
                </button>
                <button
                  onClick={() => {
                    onOpenModal('whyVinex');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700 transition"
                >
                  About VINEXSHOP
                </button>
                <button
                  onClick={() => {
                    onOpenModal('whyVinex');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700 transition"
                >
                  Why VINEXSHOP.COM ?
                </button>
                <button
                  onClick={() => {
                    onOpenModal('whyVinex');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700 transition"
                >
                  Company Credentials & Awards
                </button>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('products')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="px-4 py-2.5 flex items-center space-x-1 hover:bg-[#a00000] transition-colors cursor-pointer">
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
            </button>
            {activeDropdown === 'products' && (
              <div className="absolute left-0 top-full w-64 bg-white text-gray-800 shadow-xl border border-gray-200 py-2 text-xs z-50 grid grid-cols-1">
                <button
                  onClick={() => {
                    onSelectCategory(null);
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-1.5 hover:bg-red-50 hover:text-red-700 font-bold border-b border-gray-100"
                >
                  ★ All Sports Equipment
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('athletics');
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-1.5 hover:bg-red-50 hover:text-red-700"
                >
                  Athletics Equipment
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('cricket');
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-1.5 hover:bg-red-50 hover:text-red-700"
                >
                  Cricket Equipment
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('badminton');
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-1.5 hover:bg-red-50 hover:text-red-700"
                >
                  Badminton Equipment
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('fitness');
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-1.5 hover:bg-red-50 hover:text-red-700"
                >
                  Fitness & Gym Equipment
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('carrom');
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-1.5 hover:bg-red-50 hover:text-red-700"
                >
                  Carrom Boards & Accessories
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('table-tennis');
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-1.5 hover:bg-red-50 hover:text-red-700"
                >
                  Table Tennis
                </button>
              </div>
            )}
          </div>

          {/* Special Offers Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('offers')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="px-4 py-2.5 flex items-center space-x-1 hover:bg-[#a00000] transition-colors cursor-pointer">
              <span>Special Offers</span>
              <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
            </button>
            {activeDropdown === 'offers' && (
              <div className="absolute left-0 top-full w-56 bg-white text-gray-800 shadow-xl border border-gray-200 py-1 text-xs z-50">
                <button
                  onClick={() => {
                    onSelectCategory('hot-deals');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Mega Sale Up to 60% Off
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('hot-deals');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Hot Deals of the Month
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('hot-deals');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Half Price Sale
                </button>
              </div>
            )}
          </div>

          {/* Shopping With Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('shopping')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="px-4 py-2.5 flex items-center space-x-1 hover:bg-[#a00000] transition-colors cursor-pointer">
              <span>Shopping With Us</span>
              <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
            </button>
            {activeDropdown === 'shopping' && (
              <div className="absolute left-0 top-full w-56 bg-white text-gray-800 shadow-xl border border-gray-200 py-1 text-xs z-50">
                <button
                  onClick={() => {
                    onOpenModal('orderGuide');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  How To Order Online ?
                </button>
                <button
                  onClick={() => {
                    onOpenModal('coverage');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Where We Can Reach ?
                </button>
                <button
                  onClick={() => {
                    onOpenModal('trackOrder');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Track Your Order
                </button>
              </div>
            )}
          </div>

          {/* My Account Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('account')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="px-4 py-2.5 flex items-center space-x-1 hover:bg-[#a00000] transition-colors cursor-pointer">
              <span>My Account</span>
              <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
            </button>
            {activeDropdown === 'account' && (
              <div className="absolute left-0 top-full w-48 bg-white text-gray-800 shadow-xl border border-gray-200 py-1 text-xs z-50">
                <button
                  onClick={() => {
                    onOpenModal('authLogin');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    onOpenModal('authRegister');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Register Account
                </button>
                <button
                  onClick={() => {
                    onOpenModal('trackOrder');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Order History & Status
                </button>
              </div>
            )}
          </div>

          {/* Customer Support Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('support')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="px-4 py-2.5 flex items-center space-x-1 hover:bg-[#a00000] transition-colors cursor-pointer">
              <span>Customer Support</span>
              <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
            </button>
            {activeDropdown === 'support' && (
              <div className="absolute left-0 top-full w-52 bg-white text-gray-800 shadow-xl border border-gray-200 py-1 text-xs z-50">
                <button
                  onClick={() => {
                    onOpenModal('orderGuide');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  How To Order Online ?
                </button>
                <button
                  onClick={() => {
                    onOpenModal('contactQuote');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => {
                    onOpenModal('contactQuote');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Write Your Feedback
                </button>
                <button
                  onClick={() => {
                    onOpenModal('faq');
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-700"
                >
                  Frequently Asked Questions
                </button>
              </div>
            )}
          </div>

          {/* Direct links */}
          <button
            onClick={() => onOpenModal('contactQuote')}
            className="px-4 py-2.5 hover:bg-[#a00000] transition-colors cursor-pointer"
          >
            Contact Us
          </button>
          <button
            onClick={() => onOpenModal('faq')}
            className="px-4 py-2.5 hover:bg-[#a00000] transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>

        {/* Mobile Header Toggle */}
        <div className="lg:hidden flex items-center justify-between py-2.5">
          <span className="text-sm font-bold tracking-wide">
            {selectedCategory ? `Viewing: ${selectedCategory}` : 'Main Menu'}
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded hover:bg-red-800 focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#a00000] border-t border-red-700 py-2 px-2 text-sm space-y-1">
            <button
              onClick={() => {
                onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              Home
            </button>
            <button
              onClick={() => {
                onOpenModal('whyVinex');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              About Us / Why VINEXSHOP
            </button>
            <button
              onClick={() => {
                onSelectCategory(null);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              All Products
            </button>
            <button
              onClick={() => {
                onSelectCategory('hot-deals');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              Special Offers & Hot Deals
            </button>
            <button
              onClick={() => {
                onOpenModal('orderGuide');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              How To Order Online ?
            </button>
            <button
              onClick={() => {
                onOpenModal('trackOrder');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              Track Your Order !!!
            </button>
            <button
              onClick={() => {
                onOpenModal('coverage');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              Where We Can Reach ?
            </button>
            <button
              onClick={() => {
                onOpenModal('contactQuote');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              Contact Us & Request Quote
            </button>
            <button
              onClick={() => {
                onOpenModal('faq');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-red-900"
            >
              FAQ
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
