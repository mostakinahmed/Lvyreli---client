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

      {/* ================= CATEGORIES ================= */}

      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Shop by Category
            </h2>

            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded-full border border-slate-200 
          flex items-center justify-center text-slate-600 
          hover:bg-rose-50 hover:border-rose-300 
          transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                className="w-8 h-8 rounded-full border border-slate-200 
          flex items-center justify-center text-slate-600 
          hover:bg-rose-50 hover:border-rose-300 
          transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* One Row Categories */}
          <div
            className="flex justify-between overflow-x-auto pb-2 
      scrollbar-hide scroll-smooth"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/category/${cat.slug}`)}
                className="flex flex-col items-center group 
          cursor-pointer text-center flex-shrink-0 w-24"
              >
                {/* Category Image */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 
            rounded-full overflow-hidden 
            bg-rose-50 border-2 border-rose-100 
            group-hover:border-rose-500 
            transition duration-300 shadow-sm mb-2"
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover 
              group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Category Name */}
                <span
                  className="text-sm font-medium text-slate-800 
            group-hover:text-rose-600 transition 
            line-clamp-1 w-full"
                >
                  {cat.name}
                </span>

                {/* Product Count */}
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {cat.count}
                </span>
              </div>
            ))}
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
