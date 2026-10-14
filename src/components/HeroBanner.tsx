import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroBannerProps {
  onShopNow: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onShopNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: 'Super Saving Sale',
      title: 'MEGA SALE',
      subTitle: 'UP TO 60% OFF',
      rightHeading: 'NEW ARRIVAL',
      rightSale: 'SALE UP TO 60% OFF',
      rightTagline: 'PERFECT GIFT FOR WHOLE FAMILY',
      ctaText: 'SHOP NOW',
      bgGradient: 'from-amber-50 via-slate-50 to-blue-50',
    },
    {
      id: 2,
      badge: 'Certified World Athletics',
      title: 'TRACK & FIELD',
      subTitle: 'EQUIPMENT EXCELLENCE',
      rightHeading: 'HIGHEST EXPORTS',
      rightSale: 'NO. 1 SINCE 2004-05',
      rightTagline: 'JAVELINS • DISCUS • SHOT PUT • HURDLES',
      ctaText: 'EXPLORE ATHLETICS',
      bgGradient: 'from-red-50 via-slate-50 to-amber-50',
    },
    {
      id: 3,
      badge: 'Home & Professional Gym',
      title: 'FITNESS REVOLUTION',
      subTitle: 'UP TO 40% OFF',
      rightHeading: 'PRO TRAINING GEAR',
      rightSale: 'AGILITY & STRENGTH',
      rightTagline: 'PUSH UP BARS • SPEED LADDERS • YOGA MATS',
      ctaText: 'SHOP FITNESS',
      bgGradient: 'from-emerald-50 via-slate-50 to-cyan-50',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
        {/* Banner Frame */}
        <div className="relative h-[280px] sm:h-[320px] md:h-[350px] w-full rounded border border-gray-300 overflow-hidden shadow-xs select-none">
          {/* Slide 1 - Mega Sale replica */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 transition-all duration-700`}
          >
            {/* Left Graphics & Mega Sale Badge */}
            <div className="w-full md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left z-10">
              <div className="inline-block bg-white text-gray-800 text-[11px] font-bold px-3 py-1 rounded shadow-xs border border-gray-300 mb-2 uppercase tracking-wide">
                {slides[currentSlide].badge}
              </div>

              <div className="relative my-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#e8590c] tracking-tight leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)] uppercase italic">
                  {slides[currentSlide].title}
                </h2>
                <div className="inline-block bg-[#1b2b65] text-white font-black text-xs sm:text-sm px-2.5 py-0.5 rounded-sm mt-1 uppercase tracking-wider">
                  {slides[currentSlide].subTitle}
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-2 font-medium max-w-xs hidden sm:block">
                Direct from factory manufacturer • 100% Genuine Sports Gear • Trusted since 1957
              </p>
            </div>

            {/* Middle montage illustration: Carrom, Chess, Cricket, Fitness Gear */}
            <div className="w-full md:w-4/12 flex items-center justify-center py-2 relative">
              <div className="relative flex items-center justify-center space-x-2">
                {/* Visual sport montage badges */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white/80 p-2 shadow-inner border border-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&auto=format&fit=crop&q=80"
                    alt="Sports Equipment Montage"
                    className="w-full h-full object-cover rounded-full mix-blend-multiply transition-transform hover:scale-105 duration-300"
                  />
                  {/* Floating badge */}
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                    V-PRO
                  </div>
                </div>

                {/* Sub gear thumbnail preview */}
                <div className="hidden sm:flex flex-col space-y-2">
                  <div className="w-16 h-16 rounded bg-white p-1 border border-gray-300 shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=150&auto=format&fit=crop&q=80"
                      alt="Carrom Board"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-16 h-16 rounded bg-white p-1 border border-gray-300 shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=150&auto=format&fit=crop&q=80"
                      alt="Chess Board"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side Text & Call to Action button */}
            <div className="w-full md:w-3/12 flex flex-col items-center md:items-end text-center md:text-right z-10 mt-2 md:mt-0">
              <div className="text-gray-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                {slides[currentSlide].rightHeading}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#c40000] tracking-tight leading-tight uppercase">
                {slides[currentSlide].rightSale}
              </div>
              <div className="text-[11px] font-semibold text-gray-700 tracking-wider mt-1 uppercase">
                {slides[currentSlide].rightTagline}
              </div>

              <button
                onClick={onShopNow}
                className="mt-3.5 bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-2 rounded shadow-md transition transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-1"
              >
                <span>{slides[currentSlide].ctaText}</span>
              </button>
            </div>
          </div>

          {/* Previous / Next Arrow buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-red-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
