import React, { useState } from 'react';
import { CATEGORIES } from '../data/categories';
import { ChevronRight, Plus, Minus, Tag, Filter } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  selectedSubcategory: string | null;
  onSelectSubcategory: (subcategory: string | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedSubcategory,
  onSelectSubcategory,
}) => {
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({
    athletics: true,
    fitness: true,
  });

  const toggleExpand = (e: React.MouseEvent, catId: string) => {
    e.stopPropagation();
    setExpandedCats((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  return (
    <aside className="w-full md:w-64 lg:w-72 shrink-0">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#c40000] to-[#b00000] text-white px-3.5 py-2.5 rounded-t font-extrabold text-[13px] tracking-wider uppercase flex items-center justify-between shadow-xs">
        <span>SPORTS EQUIPMENT</span>
        <Filter className="w-4 h-4 opacity-80" />
      </div>

      {/* Categories List Container */}
      <div className="bg-white border-x border-b border-gray-300 rounded-b shadow-2xs divide-y divide-gray-100 text-[12px]">
        {/* All Equipment reset button */}
        <button
          onClick={() => {
            onSelectCategory(null);
            onSelectSubcategory(null);
          }}
          className={`w-full flex items-center justify-between px-3 py-2 text-left font-semibold transition cursor-pointer ${
            selectedCategory === null
              ? 'bg-red-50 text-red-700 font-bold'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="text-[#c40000] text-[10px]">▶</span>
            <span>All Sports Catalog</span>
          </div>
        </button>

        {CATEGORIES.map((cat) => {
          const isExpanded = !!expandedCats[cat.id];
          const isSelected = selectedCategory === cat.id;

          return (
            <div key={cat.id} className="group">
              {/* Category row */}
              <div
                onClick={() => {
                  onSelectCategory(cat.id);
                  onSelectSubcategory(null);
                }}
                className={`flex items-center justify-between px-3 py-2 cursor-pointer transition select-none ${
                  isSelected
                    ? 'bg-red-50/80 text-red-800 font-bold'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-1.5 overflow-hidden">
                  <span className="text-[#c40000] text-[10px] shrink-0">▶</span>
                  <span className="truncate">{cat.name}</span>
                </div>

                {cat.subcategories.length > 0 && (
                  <button
                    onClick={(e) => toggleExpand(e, cat.id)}
                    className="p-0.5 text-gray-500 hover:text-red-700 transition cursor-pointer"
                    aria-label="Toggle subcategories"
                  >
                    {isExpanded ? (
                      <Minus className="w-3.5 h-3.5 text-gray-700" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-gray-700" />
                    )}
                  </button>
                )}
              </div>

              {/* Subcategories accordion */}
              {isExpanded && cat.subcategories.length > 0 && (
                <div className="bg-[#fafafa] border-t border-gray-100 py-1 pl-6 pr-3 space-y-1 text-[11px]">
                  {cat.subcategories.map((sub) => {
                    const isSubSelected =
                      selectedCategory === cat.id &&
                      selectedSubcategory === sub;

                    return (
                      <button
                        key={sub}
                        onClick={() => {
                          onSelectCategory(cat.id);
                          onSelectSubcategory(sub);
                        }}
                        className={`w-full flex items-center space-x-1.5 py-1 text-left transition cursor-pointer ${
                          isSubSelected
                            ? 'text-red-700 font-bold'
                            : 'text-gray-600 hover:text-red-600'
                        }`}
                      >
                        <ChevronRight className="w-3 h-3 text-red-500 shrink-0" />
                        <span className="truncate">{sub}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Special Offer Box on Sidebar */}
      <div className="mt-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 rounded p-3 text-xs">
        <div className="flex items-center space-x-1.5 text-orange-800 font-bold mb-1">
          <Tag className="w-4 h-4 text-orange-600" />
          <span>Mega Saving Deals</span>
        </div>
        <p className="text-gray-600 text-[11px] leading-relaxed">
          Get up to 60% discount on official IAAF & World Athletics certified gear.
        </p>
        <button
          onClick={() => {
            onSelectCategory('hot-deals');
            onSelectSubcategory(null);
          }}
          className="mt-2 w-full bg-[#c40000] hover:bg-[#a00000] text-white py-1.5 px-3 rounded text-[11px] font-bold text-center transition cursor-pointer"
        >
          View Hot Deals
        </button>
      </div>
    </aside>
  );
};
