import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface FeaturedCategoriesProps {
  onSelectCategory: (catId: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onSelectCategory,
}) => {
  const items = [
    {
      id: 'tennis',
      title: 'Tennis Racquets',
      categoryId: 'athletics', // maps or filters
    },
    {
      id: 'badminton',
      title: 'Badminton Rackets',
      categoryId: 'badminton',
    },
    {
      id: 'chess',
      title: 'Chessboard',
      categoryId: 'board-games',
    },
  ];

  return (
    <section className="w-full my-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded p-4 text-center shadow-2xs hover:shadow-xs transition flex flex-col items-center justify-between"
          >
            <h3 className="text-[#1a388b] font-bold text-sm sm:text-base mb-3 hover:text-red-700 transition">
              {item.title}
            </h3>

            <button
              onClick={() => onSelectCategory(item.categoryId)}
              className="bg-[#e49c36] hover:bg-[#d48c26] active:bg-[#be7a1e] text-white text-xs font-bold py-2 px-6 rounded shadow-xs transition duration-150 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Click Here</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
