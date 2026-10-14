import React from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HotDealsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onViewAll: () => void;
  title?: string;
  isFiltered?: boolean;
}

export const HotDeals: React.FC<HotDealsProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onViewAll,
  title = 'HOT DEALS ON VINEXSHOP',
  isFiltered = false,
}) => {
  return (
    <section className="w-full mb-6">
      {/* Red Header Bar */}
      <div className="bg-[#c40000] text-white px-4 py-2 rounded-t flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <h2 className="font-extrabold text-[13px] sm:text-sm tracking-wider uppercase">
            {title}
          </h2>
        </div>
        {!isFiltered && (
          <button
            onClick={onViewAll}
            className="text-yellow-200 hover:text-white text-[11px] font-bold tracking-wider uppercase flex items-center space-x-1 cursor-pointer transition"
          >
            <span>VIEW ALL ...</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Product Grid */}
      <div className="bg-white border-x border-b border-gray-300 rounded-b p-3 sm:p-4">
        {products.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            <p className="text-sm font-semibold">No equipment found matching this criteria.</p>
            <button
              onClick={onViewAll}
              className="mt-3 bg-[#c40000] text-white text-xs px-4 py-1.5 rounded font-bold cursor-pointer hover:bg-red-800 transition"
            >
              Browse All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
