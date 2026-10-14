import React, { useState } from 'react';
import {
  X,
  Award,
  CheckCircle,
  Truck,
  MapPin,
  HelpCircle,
  User,
  Mail,
  Send,
  CreditCard,
  Package,
} from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Why VINEXSHOP.COM Modal
export const WhyVinexModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in duration-200">
        <div className="bg-[#c40000] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <h2 className="font-bold text-base tracking-wide">
              Why VINEXSHOP.COM ?
            </h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs text-gray-700 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="bg-amber-50 border border-amber-200 rounded p-3.5 text-amber-900">
            <div className="font-bold text-sm mb-1">
              India's Premier Sports Manufacturer Since 1957
            </div>
            <p className="text-[11.5px] leading-relaxed">
              VINEX Enterprises Pvt. Ltd. was established in sports city Meerut, India. For over six decades, we have been setting benchmarks in global sports equipment engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
              <div className="font-bold text-gray-900 text-xs flex items-center space-x-1.5 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Awarded No. 1 Exporter</span>
              </div>
              <p className="text-[11px] text-gray-600">
                Honored with No. 1 award since 2004-05 for Highest Exports of Athletics Equipment from India by SGEPC (Sports Goods Export Promotion Council).
              </p>
            </div>

            <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
              <div className="font-bold text-gray-900 text-xs flex items-center space-x-1.5 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>World Athletics Certified</span>
              </div>
              <p className="text-[11px] text-gray-600">
                Our athletic competition javelins, discuses, shot puts, and hurdles are certified by World Athletics (IAAF) for Olympic and international meets.
              </p>
            </div>

            <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
              <div className="font-bold text-gray-900 text-xs flex items-center space-x-1.5 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Direct Factory Prices</span>
              </div>
              <p className="text-[11px] text-gray-600">
                Eliminate middleman markups. Receive 100% authentic, brand-new sports gear straight from our automated manufacturing plants in Meerut.
              </p>
            </div>

            <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
              <div className="font-bold text-gray-900 text-xs flex items-center space-x-1.5 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>All India Express Transit</span>
              </div>
              <p className="text-[11px] text-gray-600">
                Dedicated logistic tie-ups with BlueDart, SafeXpress, DTDC, and India Post deliver securely to over 19,000 postal codes across India.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-5 py-3 flex justify-end">
          <button onClick={onClose} className="bg-[#c40000] text-white text-xs font-bold px-4 py-1.5 rounded hover:bg-red-800">
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. How To Order Online Guide Modal
export const OrderGuideModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in duration-200">
        <div className="bg-[#c40000] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5" />
            <h2 className="font-bold text-base tracking-wide">
              How To Order Online ? (Quick Guide)
            </h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs text-gray-700 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-gray-600">
            Ordering on <span className="font-bold text-red-700">VINEXSHOP.COM</span> is fast, secure, and hassle-free. Follow these 4 easy steps:
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-red-50/50 rounded border border-red-100">
              <span className="w-6 h-6 rounded-full bg-[#c40000] text-white font-black flex items-center justify-center text-xs shrink-0">
                1
              </span>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">Browse & Select Sports Equipment</h4>
                <p className="text-gray-600 text-[11px] mt-0.5">
                  Explore categories via the left sidebar or search by product name/code in the search bar. Click on any item to view technical details, size options, and photos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-red-50/50 rounded border border-red-100">
              <span className="w-6 h-6 rounded-full bg-[#c40000] text-white font-black flex items-center justify-center text-xs shrink-0">
                2
              </span>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">Add to Cart & Apply Offers</h4>
                <p className="text-gray-600 text-[11px] mt-0.5">
                  Click the <b>"Add to Cart"</b> button. Open your cart anytime from the top-right header box. Apply promotional coupon codes like <span className="font-mono text-red-700 font-bold">VINEX10</span> for extra savings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-red-50/50 rounded border border-red-100">
              <span className="w-6 h-6 rounded-full bg-[#c40000] text-white font-black flex items-center justify-center text-xs shrink-0">
                3
              </span>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">Enter Delivery Address & Pincode</h4>
                <p className="text-gray-600 text-[11px] mt-0.5">
                  Provide your complete name, active mobile number for SMS/dispatch updates, and correct 6-digit delivery pincode anywhere in India.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-red-50/50 rounded border border-red-100">
              <span className="w-6 h-6 rounded-full bg-[#c40000] text-white font-black flex items-center justify-center text-xs shrink-0">
                4
              </span>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">Select Payment Method & Track Order</h4>
                <p className="text-gray-600 text-[11px] mt-0.5">
                  Pay securely with UPI, Credit/Debit Card, Net Banking, NEFT/RTGS, or Cash on Delivery. You will immediately receive a unique Order ID to track dispatch live!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-5 py-3 flex justify-end">
          <button onClick={onClose} className="bg-[#c40000] text-white text-xs font-bold px-4 py-1.5 rounded hover:bg-red-800">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

// 3. Where We Can Reach / Coverage Modal
export const CoverageModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setResult(`Serviceable! Standard delivery to Pincode ${pincode} takes 2 to 4 business days via Express Cargo.`);
    } else {
      setResult('Please enter a valid 6-digit Indian postal code.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full overflow-hidden animate-in fade-in duration-200">
        <div className="bg-[#c40000] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Truck className="w-5 h-5" />
            <h2 className="font-bold text-base tracking-wide">
              Where We Can Reach ?
            </h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs text-gray-700 space-y-4">
          <p className="text-gray-600">
            VINEXSHOP delivers sporting goods to every corner of India, from state capitals and metropolitan cities to remote district sports complexes.
          </p>

          <form onSubmit={handleCheck} className="bg-gray-50 p-4 border border-gray-200 rounded space-y-2">
            <label className="block font-semibold text-gray-800">Check Your Pincode Delivery Availability:</label>
            <div className="flex gap-2">
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter 6-digit Pincode (e.g. 250002)"
                className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-xs bg-white"
              />
              <button
                type="submit"
                className="bg-[#c40000] text-white font-bold px-4 py-1.5 rounded hover:bg-red-800 cursor-pointer text-xs"
              >
                Check
              </button>
            </div>
            {result && (
              <div className="text-[11px] font-semibold text-green-700 mt-2 bg-green-50 p-2 rounded border border-green-200">
                {result}
              </div>
            )}
          </form>

          <div>
            <h4 className="font-bold text-gray-900 text-xs mb-2">Our Official Courier & Cargo Partners:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-[11px]">
              <div className="border border-gray-200 p-2 rounded bg-white shadow-2xs font-semibold text-gray-800">
                Blue Dart Express
              </div>
              <div className="border border-gray-200 p-2 rounded bg-white shadow-2xs font-semibold text-gray-800">
                SafeXpress Cargo
              </div>
              <div className="border border-gray-200 p-2 rounded bg-white shadow-2xs font-semibold text-gray-800">
                DTDC Courier
              </div>
              <div className="border border-gray-200 p-2 rounded bg-white shadow-2xs font-semibold text-gray-800">
                Trackon Couriers
              </div>
              <div className="border border-gray-200 p-2 rounded bg-white shadow-2xs font-semibold text-gray-800">
                India Post (Speed Post)
              </div>
              <div className="border border-gray-200 p-2 rounded bg-white shadow-2xs font-semibold text-gray-800">
                TCI Freight (Heavy Gear)
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-5 py-3 flex justify-end">
          <button onClick={onClose} className="bg-gray-800 text-white text-xs font-semibold px-4 py-1.5 rounded hover:bg-black">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Auth Modal (Register / Login)
interface AuthModalProps extends ModalProps {
  initialTab?: 'login' | 'register';
  onLoginSuccess: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'login',
  onLoginSuccess,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>(initialTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = tab === 'register' ? (name || 'Sports Enthusiast') : (email.split('@')[0] || 'Member User');
    onLoginSuccess(displayName);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in duration-200">
        <div className="bg-[#c40000] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <h2 className="font-bold text-base tracking-wide">
              {tab === 'login' ? 'Customer Sign In' : 'Create New Account'}
            </h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-gray-200 text-xs font-bold text-center">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2.5 transition ${tab === 'login' ? 'text-red-700 border-b-2 border-red-700 bg-red-50/40' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-2.5 transition ${tab === 'register' ? 'text-red-700 border-b-2 border-red-700 bg-red-50/40' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Register With Us
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 text-xs text-gray-700 space-y-3.5">
          {tab === 'register' && (
            <div>
              <label className="block font-semibold mb-1">Your Full Name</label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Vikram Sharma"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs outline-hidden focus:ring-1 focus:ring-red-600"
              />
            </div>
          )}

          <div>
            <label className="block font-semibold mb-1">Email Address / User ID</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. user@vinexshop.com"
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs outline-hidden focus:ring-1 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs outline-hidden focus:ring-1 focus:ring-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c40000] hover:bg-red-800 text-white font-bold py-2 rounded text-xs transition cursor-pointer shadow mt-2"
          >
            {tab === 'login' ? 'Sign In to My Account' : 'Complete Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

// 5. Contact / Request a Quote Modal
export const ContactQuoteModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full overflow-hidden animate-in fade-in duration-200">
        <div className="bg-[#c40000] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <h2 className="font-bold text-base tracking-wide">
              Customer Support & Request a Quote
            </h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs text-gray-700">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="text-base font-bold text-gray-900">Message Received!</h3>
              <p className="text-gray-600 text-xs max-w-sm mx-auto">
                Thank you for contacting Vinex Enterprises. Our sales representative will reply with a detailed quotation within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#c40000] text-white font-bold text-xs px-5 py-1.5 rounded"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Your Name *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-xs outline-hidden" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email / Phone *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-xs outline-hidden" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Inquiry Purpose</label>
                <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-xs bg-white outline-hidden">
                  <option>Request a Bulk School / Academy Quote</option>
                  <option>Order Inquiries & Shipping Status</option>
                  <option>Product Specifications / Certifications</option>
                  <option>General Feedback / Suggestion</option>
                  <option>Lodge a Complaint</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Message / Equipment Requirements *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Mention equipment items, quantities, or question..."
                  className="w-full border border-gray-300 rounded px-3 py-1.5 text-xs outline-hidden"
                ></textarea>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-2.5 text-[11px] text-gray-600">
                📍 <b>Vinex Enterprises Pvt. Ltd.</b>, Sports City Meerut - 250002, U.P., India.<br />
                📞 Phone: +91-8126110505 | +91-121-2441111
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#c40000] hover:bg-red-800 text-white font-bold px-5 py-1.5 rounded text-xs flex items-center space-x-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
