import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (orderId: string) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  // Checkout form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Uttar Pradesh',
    pincode: '',
    paymentMethod: 'UPI / PhonePe',
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.offerPrice * item.quantity,
    0
  );

  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'VINEX10') {
      const discount = Math.round(subtotal * 0.1);
      setDiscountAmount(discount);
      setCouponApplied(true);
    } else if (couponCode.toUpperCase() === 'MEGASALE') {
      const discount = Math.round(subtotal * 0.15);
      setDiscountAmount(discount);
      setCouponApplied(true);
    } else {
      alert('Invalid Coupon Code! Try "VINEX10" or "MEGASALE"');
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      alert('Please fill in all mandatory shipping fields.');
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newOrderId = `VNX-${randomNum}`;
    setOrderComplete(newOrderId);
    onOrderPlaced(newOrderId);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="bg-[#c40000] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-bold text-base tracking-wide">
              {orderComplete
                ? 'Order Placed Successfully!'
                : isCheckingOut
                ? 'Shipping & Payment Checkout'
                : `Your Shopping Cart (${cart.length} items)`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 text-sm text-gray-700">
          {orderComplete ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Thank You for Your Order!
              </h3>
              <p className="text-gray-600 max-w-md mx-auto text-xs sm:text-sm">
                Your order has been confirmed and forwarded to Vinex Enterprises dispatch
                center in Meerut.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded p-4 max-w-xs mx-auto text-left">
                <div className="text-xs text-gray-500">Order Reference ID:</div>
                <div className="text-lg font-black text-red-700 font-mono">
                  {orderComplete}
                </div>
                <div className="text-xs text-gray-500 mt-2">Delivery To:</div>
                <div className="font-semibold text-gray-800">{formData.name}</div>
                <div className="text-xs text-gray-600">{formData.city}, {formData.state} - {formData.pincode}</div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setOrderComplete(null);
                    setIsCheckingOut(false);
                    onClose();
                  }}
                  className="bg-[#c40000] hover:bg-red-800 text-white font-bold px-6 py-2 rounded text-xs cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form */
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-red-600 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-red-600 outline-hidden"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-semibold mb-1">Delivery Address *</label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House/Street, Locality/Area"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-red-600 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">City *</label>
                  <input
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Meerut, Delhi, Mumbai"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-red-600 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Pincode *</label>
                  <input
                    required
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="6-digit PIN"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-red-600 outline-hidden"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-semibold mb-1">Payment Method</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs bg-white focus:ring-1 focus:ring-red-600 outline-hidden"
                  >
                    <option>UPI / PhonePe / Google Pay</option>
                    <option>Credit Cards / Debit Cards (ATM cum Debit)</option>
                    <option>Internet Banking (All Major Banks)</option>
                    <option>Cash on Delivery (COD)</option>
                    <option>Direct Fund Transfer (NEFT / RTGS)</option>
                  </select>
                </div>
              </div>

              {/* Total review */}
              <div className="bg-red-50 border border-red-200 rounded p-3 flex justify-between items-center text-xs">
                <div>
                  <span className="font-semibold text-gray-700">Total Payable Amount:</span>
                  <div className="text-[11px] text-gray-500">Includes all GST & All-India delivery</div>
                </div>
                <div className="text-base font-black text-red-700">
                  ₹{total.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs text-gray-600 hover:text-gray-900 underline cursor-pointer"
                >
                  ← Back to Cart
                </button>
                <button
                  type="submit"
                  className="bg-[#c40000] hover:bg-red-800 text-white font-bold px-6 py-2 rounded text-xs transition cursor-pointer shadow"
                >
                  Confirm & Place Order
                </button>
              </div>
            </form>
          ) : cart.length === 0 ? (
            /* Empty Cart View */
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Your shopping cart is currently empty.</p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#c40000] hover:bg-red-800 text-white font-bold text-xs px-5 py-2 rounded cursor-pointer transition"
              >
                Start Shopping Now
              </button>
            </div>
          ) : (
            /* Cart Items List */
            <div className="space-y-4">
              <div className="divide-y divide-gray-200 max-h-64 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="py-3 flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 object-contain rounded border border-gray-200 p-1 shrink-0 bg-gray-50"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-gray-800 truncate">
                        {item.product.name}
                      </h4>
                      <div className="text-[11px] text-gray-500">
                        Code: {item.product.code}
                      </div>
                      <div className="text-xs font-bold text-red-700 mt-0.5">
                        ₹{item.product.offerPrice.toLocaleString('en-IN')}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-300 rounded text-xs">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                        }
                        className="px-2 py-0.5 hover:bg-gray-100 font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 font-semibold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-2 py-0.5 hover:bg-gray-100 font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal & Delete */}
                    <div className="text-right shrink-0">
                      <div className="font-bold text-xs text-gray-900">
                        ₹{(item.product.offerPrice * item.quantity).toLocaleString('en-IN')}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-600 mt-1 cursor-pointer transition"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code Section */}
              <div className="pt-2 border-t border-gray-200">
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Coupon (e.g. VINEX10)"
                    className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-xs uppercase"
                  />
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-black text-white text-xs font-semibold px-4 py-1.5 rounded cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
                {couponApplied && (
                  <div className="text-[11px] text-green-700 font-semibold mt-1">
                    ✓ Coupon applied! Saved ₹{discountAmount}
                  </div>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-gray-50 rounded p-3 text-xs space-y-1.5 border border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-700 font-semibold">
                    <span>Discount Coupon:</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>All India Shipping:</span>
                  <span>{shipping === 0 ? 'FREE (Orders over ₹999)' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-900 font-black text-sm pt-2 border-t border-gray-300">
                  <span>Grand Total:</span>
                  <span className="text-red-700">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-[#c40000] hover:bg-red-800 text-white font-bold py-2.5 px-4 rounded text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
