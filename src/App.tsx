/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { QuickInfoBar } from './components/QuickInfoBar';
import { HeroBanner } from './components/HeroBanner';
import { Sidebar } from './components/Sidebar';
import { HotDeals } from './components/HotDeals';
import { FeaturedCategories } from './components/FeaturedCategories';
import { AboutVinexSection } from './components/AboutVinexSection';
import { Footer } from './components/Footer';
import { CartModal, CartItem } from './components/CartModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import {
  WhyVinexModal,
  OrderGuideModal,
  CoverageModal,
  AuthModal,
  ContactQuoteModal,
} from './components/InfoModals';
import { PRODUCTS, Product } from './data/products';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Navigation & Category states
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  // Shopping Cart state
  const [cart, setCart] = useState<CartItem[]>([
    // Pre-populate with 1 item so users immediately see cart functionality
    { product: PRODUCTS[0], quantity: 1 },
  ]);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [lastPlacedOrderId, setLastPlacedOrderId] = useState<string>('VNX-84210');
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x "${product.name}" to cart!`);
  };

  const handleBuyNow = (product: Product, quantity = 1) => {
    handleAddToCart(product, quantity);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.offerPrice * item.quantity,
    0
  );

  // Search logic
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchQuery.trim());
    if (searchQuery.trim()) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    }
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setActiveSearch('');
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  // Filtered Products computation
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
      return list;
    }

    if (selectedCategory === 'hot-deals') {
      return list.filter((p) => p.isHotDeal);
    }

    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedSubcategory) {
      list = list.filter((p) => p.subcategory === selectedSubcategory);
    }

    return list;
  }, [selectedCategory, selectedSubcategory, activeSearch]);

  // Display hot deals: if no search/filter, show default hot deals list
  const hotDealsList = useMemo(() => {
    if (activeSearch || selectedCategory || selectedSubcategory) {
      return filteredProducts;
    }
    return PRODUCTS.filter((p) => p.isHotDeal).slice(0, 4);
  }, [activeSearch, selectedCategory, selectedSubcategory, filteredProducts]);

  const dealsTitle = activeSearch
    ? `Search Results for "${activeSearch}" (${filteredProducts.length})`
    : selectedSubcategory
    ? `${selectedSubcategory.toUpperCase()} (${filteredProducts.length})`
    : selectedCategory
    ? `CATEGORY: ${selectedCategory.toUpperCase()} (${filteredProducts.length})`
    : 'HOT DEALS ON VINEXSHOP';

  return (
    <div className="min-h-screen bg-[#ececec] flex flex-col font-sans text-gray-800 antialiased selection:bg-red-700 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white text-xs px-4 py-2.5 rounded shadow-xl flex items-center space-x-2 border-l-4 border-red-600 animate-in fade-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={(mode) => {
          setAuthTab(mode);
          setActiveModal('auth');
        }}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
        onResetSearch={handleResetSearch}
      />

      {/* Navigation Bar */}
      <Navbar
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSelectedSubcategory(null);
          setActiveSearch('');
        }}
        onOpenModal={(modal) => {
          if (modal === 'authLogin') {
            setAuthTab('login');
            setActiveModal('auth');
          } else if (modal === 'authRegister') {
            setAuthTab('register');
            setActiveModal('auth');
          } else {
            setActiveModal(modal);
          }
        }}
        onNavigateHome={handleResetSearch}
        selectedCategory={selectedCategory}
      />

      {/* 5 Quick Feature Info Boxes */}
      <QuickInfoBar
        onOpenModal={(modal) => {
          if (modal === 'allIndiaShipping') {
            setActiveModal('coverage');
          } else {
            setActiveModal(modal);
          }
        }}
      />

      {/* Hero Carousel (Displayed primarily on home view) */}
      {!activeSearch && !selectedCategory && !selectedSubcategory && (
        <HeroBanner
          onShopNow={() => {
            setSelectedCategory('hot-deals');
          }}
        />
      )}

      {/* Main Two-Column Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-5">
        <div className="flex flex-col md:flex-row gap-5 items-start">
          {/* Left Column: Sports Equipment Sidebar */}
          <Sidebar
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActiveSearch('');
            }}
            selectedSubcategory={selectedSubcategory}
            onSelectSubcategory={(sub) => {
              setSelectedSubcategory(sub);
              setActiveSearch('');
            }}
          />

          {/* Right Column: Hot Deals, Products, Featured Cards, Store Overview */}
          <div className="flex-1 w-full min-w-0">
            {/* Active Filter Bar (when searching or category selected) */}
            {(activeSearch || selectedCategory || selectedSubcategory) && (
              <div className="mb-3 bg-white border border-gray-300 rounded px-3 py-2 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Active Filter:</span>
                  <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded">
                    {activeSearch
                      ? `Keyword: "${activeSearch}"`
                      : selectedSubcategory || selectedCategory}
                  </span>
                </div>
                <button
                  onClick={handleResetSearch}
                  className="text-red-700 font-bold hover:underline cursor-pointer text-[11px]"
                >
                  Clear Filter ✕
                </button>
              </div>
            )}

            {/* Hot Deals Grid */}
            <HotDeals
              products={hotDealsList}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onViewAll={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
                setActiveSearch('');
              }}
              title={dealsTitle}
              isFiltered={Boolean(activeSearch || selectedCategory || selectedSubcategory)}
            />

            {/* Featured Action Cards (Tennis Racquets, Badminton Rackets, Chessboard) */}
            {!activeSearch && !selectedCategory && (
              <FeaturedCategories
                onSelectCategory={(catId) => {
                  setSelectedCategory(catId);
                }}
              />
            )}

            {/* Comprehensive Store Bio / Award Section */}
            <AboutVinexSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={(modal) => {
          if (modal === 'cart') {
            setIsCartOpen(true);
          } else if (modal === 'authLogin') {
            setAuthTab('login');
            setActiveModal('auth');
          } else if (modal === 'authRegister') {
            setAuthTab('register');
            setActiveModal('auth');
          } else if (modal === 'allProducts') {
            handleResetSearch();
          } else if (modal === 'hotDeals') {
            setSelectedCategory('hot-deals');
          } else {
            setActiveModal(modal);
          }
        }}
        cartCount={cartCount}
      />

      {/* Modals & Dialogs */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={(orderId) => {
          setLastPlacedOrderId(orderId);
          showToast(`Order #${orderId} booked successfully!`);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      <TrackOrderModal
        isOpen={activeModal === 'trackOrder'}
        onClose={() => setActiveModal(null)}
        initialOrderId={lastPlacedOrderId}
      />

      <WhyVinexModal
        isOpen={activeModal === 'whyVinex'}
        onClose={() => setActiveModal(null)}
      />

      <OrderGuideModal
        isOpen={activeModal === 'orderGuide'}
        onClose={() => setActiveModal(null)}
      />

      <CoverageModal
        isOpen={activeModal === 'coverage'}
        onClose={() => setActiveModal(null)}
      />

      <AuthModal
        isOpen={activeModal === 'auth'}
        onClose={() => setActiveModal(null)}
        initialTab={authTab}
        onLoginSuccess={(name) => {
          setCurrentUser(name);
          showToast(`Welcome back, ${name}!`);
        }}
      />

      <ContactQuoteModal
        isOpen={activeModal === 'contactQuote' || activeModal === 'faq'}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
