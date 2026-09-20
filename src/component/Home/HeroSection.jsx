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

export default function Home() {
  const navigate = useNavigate();

  // JSON data
  const categories = categoriesData.categories || [];
  const products = productsData.products || [];

  // Create curated sections from products
  const curatedSections = [
    {
      title: "Trending Bangles",
      subtitle: "Popular styles customers are loving right now.",
      items: products.filter((product) => product.featured).slice(0, 4),
    },
    {
      title: "Best Sellers",
      subtitle: "Our most-loved bangle collections.",
      items: products.filter((product) => product.bestSeller).slice(0, 4),
    },
    {
      title: "New & Stylish",
      subtitle: "Fresh designs for your everyday look.",
      items: products.slice(0, 2),
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 pb-20">
      {/* ================= HERO ================= */}
      <Hero />

      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
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
            className="flex items-start justify-between gap-4 
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
      <section className="max-w-7xl mx-auto px-4 mt-12">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Expert-curated hot picks
          </h2>

          <p className="text-xs sm:text-sm text-slate-500">
            Handpicked trendy bangle assortments for every style
          </p>
        </div>

        {/* Curated Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {curatedSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 
              border border-rose-100 shadow-sm 
              hover:shadow-md transition 
              flex flex-col justify-between"
            >
              {/* Section Content */}
              <div>
                {/* Title */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    {section.title}
                  </h3>

                  <span
                    className="text-xs bg-rose-100 
                    text-rose-700 font-semibold 
                    px-2 py-0.5 rounded-md"
                  >
                    Hot
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs text-slate-500 mb-6">
                  {section.subtitle}
                </p>

                {/* Products */}
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <div
                      key={item.id}
                      onClick={() => navigate(`/product/${item.slug}`)}
                      className="group cursor-pointer 
                      bg-rose-50/20 p-2.5 rounded-xl 
                      border border-rose-50 
                      hover:border-rose-200 transition"
                    >
                      {/* Image */}
                      <div
                        className="relative h-28 rounded-lg 
                        overflow-hidden bg-white mb-2"
                      >
                        {/* Ranking */}
                        <span
                          className="absolute top-1 left-1 
                          z-10 bg-amber-500 text-white 
                          text-[9px] font-bold px-1.5 
                          py-0.5 rounded"
                        >
                          #{i + 1}
                        </span>

                        {/* Wishlist */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="absolute top-1 right-1 
                          z-10 w-6 h-6 rounded-full 
                          bg-white/90 flex items-center 
                          justify-center shadow-sm 
                          text-slate-500 hover:text-rose-600"
                        >
                          <Heart className="w-3 h-3" />
                        </button>

                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover 
                          group-hover:scale-105 
                          transition duration-300"
                        />
                      </div>

                      {/* Product Name */}
                      <h4
                        className="text-[11px] font-medium 
                        text-slate-800 line-clamp-1 
                        group-hover:text-rose-600"
                      >
                        {item.name}
                      </h4>

                      {/* Price */}
                      <p className="text-xs font-bold text-rose-700 mt-1">
                        ৳{item.price}
                      </p>

                      {/* Rating */}
                      <div
                        className="flex items-center gap-1 
                        text-[10px] text-amber-500 mt-1"
                      >
                        <Star className="w-2.5 h-2.5 fill-current" />
                        {item.rating}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore */}
              <button
                onClick={() => navigate("/categories")}
                className="mt-6 pt-4 border-t border-slate-100 
                flex items-center justify-between w-full 
                group cursor-pointer"
              >
                <span className="text-xs font-semibold text-slate-600">
                  Explore collection
                </span>

                <ArrowRight
                  className="w-4 h-4 text-rose-600 
                  group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
