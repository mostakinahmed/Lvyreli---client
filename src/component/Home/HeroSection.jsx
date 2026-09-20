import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  ShoppingBag,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Hero from "./Slider";
import productsData from "../../data/products.json";
import categoriesData from "../../data/categories.json";
import CuratedShowcaseSection from "./Section2";

export default function Home() {
  const navigate = useNavigate();

  // JSON data
  const categories = categoriesData.categories || [];
  const products = productsData.products || [];

  // Create curated sections from products

  return (
    <div className="min-h-screen font-sans text-slate-800 pb-5">
      {/* ================= HERO ================= */}
      <Hero />

      <section className="max-w-7xl mx-auto md:px-4 px-3 -mt-20 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-rose-100/80 px-5 py-7 md:py-5 sm:px-8 ">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-px bg-rose-200"></span>

              <span
                className="text-[11px] uppercase tracking-[0.25em] 
          text-rose-400 font-medium"
              >
                Discover Your Style
              </span>

              <span className="w-8 h-px bg-rose-200"></span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Shop by Category
            </h2>
          </div>

          {/* Categories */}
          <div
            className="flex items-start justify-between md:gap-4 gap-2 
        overflow-x-auto pb-3 scrollbar-hide scroll-smooth"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/category/${cat.slug}`)}
                className="group cursor-pointer text-center flex-shrink-0 
            w-[105px] sm:w-[125px]"
              >
                {/* Image */}
                <div className="relative mx-auto w-[82px] h-[82px] sm:w-[96px] sm:h-[96px]">
                  {/* Soft background ring */}
                  <div
                    className="absolute inset-0 rounded-full 
                bg-gradient-to-br from-rose-50 to-pink-100
                scale-[1.08] opacity-70
                group-hover:scale-[1.14]
                transition-transform duration-500"
                  />

                  {/* Image */}
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden
                border-[3px] border-white
                ring-1 ring-rose-100
                shadow-md
                group-hover:ring-rose-300
                group-hover:shadow-lg
                transition-all duration-300"
                  >
                    <img
                      src={cat.img}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover
                  group-hover:scale-110
                  transition-transform duration-500"
                    />

                    {/* Soft overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t
                  from-rose-900/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Category Name */}
                <h3
                  className="mt-3 text-[13px] sm:text-sm
              font-medium text-slate-800
              group-hover:text-rose-600
              transition-colors duration-300
              line-clamp-1"
                >
                  {cat.name}
                </h3>

                {/* Count */}
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-1 h-1 rounded-full bg-rose-400"></span>
            <span className="w-12 h-px bg-rose-200"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span className="w-12 h-px bg-rose-200"></span>
            <span className="w-1 h-1 rounded-full bg-rose-400"></span>
          </div>
        </div>
      </section>

      {/* ================= EXPERT CURATED HOT PICKS ================= */}
      {/* ================= EXPERT CURATED HOT PICKS ================= */}
      <section className="max-w-7xl mx-auto -mt-4 md:-mt-0 md:px-4 px-3">
        <CuratedShowcaseSection />
      </section>
    </div>
  );
}
