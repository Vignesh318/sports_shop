import React from 'react';
import { Product } from '../data/products';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded hover:shadow-md transition duration-200 flex flex-col justify-between relative group overflow-hidden">
      {/* Discount Badge at top-right */}
      {product.discountPercent > 0 && (
        <div className="absolute top-2 right-2 z-10 bg-[#c40000] text-white text-[11px] font-extrabold px-1.5 py-0.5 rounded-xs shadow-xs text-center leading-tight">
          <div>{product.discountPercent}%</div>
          <div className="text-[9px] -mt-0.5 font-bold uppercase">Off</div>
        </div>
      )}

      {/* Product Image */}
      <div
        onClick={() => onSelectProduct(product)}
        className="w-full h-44 sm:h-48 p-2 flex items-center justify-center bg-gray-50/50 cursor-pointer overflow-hidden relative"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
          loading="lazy"
        />

        {/* Quick view hover icon */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-gray-800 text-[11px] font-semibold py-1 px-2.5 rounded shadow flex items-center space-x-1">
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3 border-t border-gray-100 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Price line: "Offer : Rs. 729" */}
          <div className="text-center mb-1">
            <span className="text-xs text-gray-700 font-semibold">Offer : </span>
            <span className="text-[#c40000] font-black text-sm sm:text-base">
              Rs. {product.offerPrice.toLocaleString('en-IN')}
            </span>
            {product.mrp > product.offerPrice && (
              <span className="text-[11px] text-gray-400 line-through ml-1.5">
                Rs. {product.mrp.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="text-[#1a388b] hover:text-[#c40000] font-semibold text-xs sm:text-[13px] text-center leading-snug cursor-pointer line-clamp-2 min-h-[34px]"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-1.5">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-[#d23018] hover:bg-[#b5200c] active:bg-[#971b0a] text-white text-[11px] font-bold py-1.5 px-2 rounded transition cursor-pointer flex items-center justify-center space-x-1"
          >
            <ShoppingCart className="w-3 h-3" />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={() => onSelectProduct(product)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-medium py-1.5 px-2 rounded transition cursor-pointer"
            title="View Details"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
