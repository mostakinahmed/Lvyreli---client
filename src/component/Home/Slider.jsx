import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  // Array of 3 banners tailored for Lvyreli with rich atmospheric glow
  const slides = [
    {
      title: "Lvyreli Women's Boutique",
      subtitle:
        "Explore our vibrant resin & glossy stacking bangles.",
      badge: "✨ Verified Artisanal Handcrafted Bangles",
      bgGlow: "from-rose-600/40 via-pink-600/30 to-rose-900/60",
      btnText: "Shop Resin Collection",
    },
    {
      title: "Earthy Wooden & Boho Cuffs",
      subtitle:
        "Sustainable, organic, and naturally unique textures.",
      badge: "🌿 Sustainable Wooden & Boho Stacks",
      bgGlow: "from-amber-600/40 via-orange-600/30 to-stone-900/60",
      btnText: "Explore Boho Sets",
    },
    {
      title: "Traditional Lac Festive Wear",
      subtitle:
        "Vibrant colors, mirror work, and cultural elegance.",
      badge: "💎 Traditional Lac & Bridal Sets",
      bgGlow: "from-pink-600/40 via-rose-700/30 to-purple-950/60",
      btnText: "Discover Festive Wear",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(timer); // Clean up on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  return (
    <div className="bg-[#FDFBF7] font-sans text-slate-800">
      {/* ================= BACKGROUND GLOW & GLASSY ATMOSPHERE ================= */}
      <section className="relative h-[380px] sm:h-[400px] flex items-center justify-center px-4 text-center overflow-hidden shadow-sm bg-[#1E1817]">
        {/* Dynamic Background Glow Layer */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentIndex].bgGlow} transition-all duration-700 z-0`}
        />

        {/* Floating Decorative Glass Orbs for Atmospheric Depth */}
        <div className="absolute -top-12 -left-12 w-56 h-56 rounded-full bg-rose-500/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -righ************t-12 w-64 h-64 rounded-full bg-amber-500/25 blur-3xl pointer-events-none" />

        {/* Solid Text Container (No backdrop blur behind text for maximum clarity) */}
        <div className="max-w-4xl mx-auto px-6 py-4 md:space-y-4  space-y-2 z-10 relative transition-all duration-500">
          <span className="inline-flex items-center gap-1.5 bg-black/30 border border-white/20 text-white text-xs font-medium px-3.5 py-1 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-200 animate-pulse" />
            {slides[currentIndex].badge}
          </span>

          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            {slides[currentIndex].title}
          </h1>

          <p className="text-sm sm:text-base text-rose-100 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
            {slides[currentIndex].subtitle}
          </p>

          <div className="pt-2">
            <button className="bg-white hover:bg-rose-50 text-slate-900 font-semibold text-sm md:text-md md:px-8 md:py-3 px-4 py-1.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto cursor-pointer">
              <span>{slides[currentIndex].btnText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Manual Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full transition cursor-pointer z-20 shadow-md border border-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full transition cursor-pointer z-20 shadow-md border border-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-white shadow-md"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
