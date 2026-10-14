import React from 'react';
import { ChevronUp } from 'lucide-react';

interface FooterProps {
  onOpenModal: (modalType: string) => void;
  cartCount: number;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, cartCount }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1c1c1c] text-[#a0a0a0] pt-10 pb-6 text-xs relative border-t-2 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="mb-6 border-b border-gray-800 pb-2">
          <h2 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase">
            SITE INFORMATION
          </h2>
        </div>

        {/* 5 Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 text-[11px] leading-relaxed">
          {/* Column 1: About VINEXSHOP */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase mb-3 tracking-wide">
              About VINEXSHOP
            </h3>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Who We Are ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  About VINEXSHOP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Why VINEXSHOP.COM ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Vinex Latest News
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contactQuote')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Career With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Customer Speaks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Site Index
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Shopping With Us */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase mb-3 tracking-wide">
              Shopping With Us
            </h3>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onOpenModal('coverage')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Where We Can Reach ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('orderGuide')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Payment Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('orderGuide')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Payment Instructions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('coverage')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('trackOrder')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Order Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('orderGuide')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('orderGuide')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Cancellation Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contactQuote')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Join Our Referral Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Range */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase mb-3 tracking-wide">
              Product Range
            </h3>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onOpenModal('allProducts')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Full Product Range
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('allProducts')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Sports Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('allProducts')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Fitness Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('whyVinex')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Certified Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('hotDeals')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Combo Offers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('hotDeals')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Super Saving Sale
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('hotDeals')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Gift Packs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('hotDeals')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Hot Deals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('allProducts')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Treadmills
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Account */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase mb-3 tracking-wide">
              Customer Account
            </h3>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onOpenModal('authLogin')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  My Account
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('authRegister')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Register With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('authLogin')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Get Log-In With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('authLogin')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Forgot Password ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('cart')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Customer Cart ({cartCount} Items)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Customer Support */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase mb-3 tracking-wide">
              Customer Support
            </h3>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onOpenModal('orderGuide')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  How To Order Online ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contactQuote')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Request a Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contactQuote')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Write Your Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contactQuote')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Write Your Complaint
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('faq')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contactQuote')}
                  className="hover:text-white hover:underline text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Other Resources */}
        <div className="border-t border-gray-800 pt-3 pb-4 text-[11px] text-gray-400">
          <span className="font-semibold text-gray-300">Other Resources : </span>
          <span>
            Buy TT Tables & Accessories, Outdoor Gym & Fitness Equipment, Athletic Track & Field
            Equipment, Soccer Accessories & Training Equipment
          </span>
        </div>

        {/* Social Icons & Copyright */}
        <div className="border-t border-dashed border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons row */}
          <div className="flex items-center space-x-2.5">
            {/* Facebook */}
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-[#1877f2] text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition"
            >
              f
            </a>
            {/* X Twitter */}
            <a
              href="#x"
              aria-label="X Twitter"
              className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs hover:opacity-80 transition border border-gray-700"
            >
              𝕏
            </a>
            {/* Instagram */}
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition"
            >
              📷
            </a>
            {/* Pinterest */}
            <a
              href="#pinterest"
              aria-label="Pinterest"
              className="w-7 h-7 rounded-full bg-[#bd081c] text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition"
            >
              P
            </a>
            {/* YouTube */}
            <a
              href="#youtube"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-[#ff0000] text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition"
            >
              ▶
            </a>
            {/* RSS */}
            <a
              href="#rss"
              aria-label="RSS Feed"
              className="w-7 h-7 rounded-full bg-[#f26522] text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition"
            >
              ((•))
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[11px] text-gray-500 text-center sm:text-right">
            Copyright © 2026 VINEX ENTERPRISES PVT. LTD. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-9 h-9 rounded bg-[#2e2e2e] hover:bg-[#c40000] text-white flex items-center justify-center shadow-lg transition duration-200 z-50 cursor-pointer border border-gray-700"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
