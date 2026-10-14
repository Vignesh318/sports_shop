import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Star, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="bg-[#c40000] text-white px-5 py-3 flex items-center justify-between">
          <div className="text-xs font-semibold uppercase tracking-wider">
            Product Code: {product.code}
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded hover:bg-red-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image Column */}
          <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded p-4 relative">
            {product.discountPercent > 0 && (
              <div className="absolute top-3 right-3 bg-[#c40000] text-white text-xs font-bold px-2 py-1 rounded shadow-xs">
                {product.discountPercent}% OFF
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="max-h-64 sm:max-h-80 w-auto object-contain"
            />
            <div className="mt-4 flex items-center text-xs text-gray-500 space-x-1">
              <span>★ 100% Genuine Vinex Product</span>
            </div>
          </div>

          {/* Product Information Column */}
          <div className="flex flex-col justify-between text-xs text-gray-700">
            <div>
              <div className="flex items-center space-x-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-gray-500 text-[11px] ml-1">
                  ({product.reviewsCount} verified reviews)
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#1b2b65] leading-snug">
                {product.name}
              </h2>

              {/* Price Details */}
              <div className="my-3 bg-red-50/60 p-3 rounded border border-red-100">
                <div className="flex items-baseline space-x-2">
                  <span className="text-xs font-semibold text-gray-600">Special Offer :</span>
                  <span className="text-xl sm:text-2xl font-black text-[#c40000]">
                    Rs. {product.offerPrice.toLocaleString('en-IN')}
                  </span>
                  {product.mrp > product.offerPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      Rs. {product.mrp.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-green-700 font-semibold mt-0.5">
                  You Save: Rs. {(product.mrp - product.offerPrice).toLocaleString('en-IN')} ({product.discountPercent}%)
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">
                  (Inclusive of all taxes & factory direct pricing)
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-3">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <div className="font-bold text-gray-900 mb-1.5 uppercase text-[11px]">
                  Key Specifications:
                </div>
                <ul className="space-y-1 text-[11.5px] text-gray-600 list-disc list-inside">
                  {product.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-200 text-[10px] text-gray-600 text-center">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-green-600 mb-1" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-4 h-4 text-blue-600 mb-1" />
                  <span>All India Delivery</span>
                </div>
                <div className="flex flex-col items-center">
                  <RefreshCw className="w-4 h-4 text-orange-600 mb-1" />
                  <span>7 Days Return</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-2.5 py-1 hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-2.5 py-1 hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-green-700 font-semibold text-[11px]">
                  ● In Stock (Factory Dispatch)
                </span>
              </div>

              <div className="flex gap-2.5">
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 bg-[#d23018] hover:bg-[#b5200c] text-white font-bold py-2 px-4 rounded text-xs flex items-center justify-center space-x-1.5 transition cursor-pointer shadow"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => {
                    onBuyNow(product, quantity);
                    onClose();
                  }}
                  className="flex-1 bg-[#1b2b65] hover:bg-[#121c43] text-white font-bold py-2 px-4 rounded text-xs flex items-center justify-center transition cursor-pointer shadow"
                >
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
