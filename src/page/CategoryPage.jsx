import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Heart, Star, ChevronRight, ArrowLeft } from "lucide-react";

// Import your local JSON files
import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";

export default function CategoryPage() {
  const { categoryName } = useParams(); // Grabs category slug from URL (e.g., "wooden", "resin")
  const navigate = useNavigate();

  // 🌟 Forces the page to open at the top instantly when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [categoryName]);

  // Find category details from categories.json
  const currentCategory = categoriesData.categories.find(
    (cat) =>
      cat.slug === categoryName ||
      cat.name.toLowerCase().includes(categoryName?.toLowerCase()),
  );

  // Filter all products matching this category slug from products.json
  const categoryProducts = productsData.products.filter(
    (prod) => prod.category.toLowerCase() === categoryName?.toLowerCase(),
  );

  return (
    <div className="bg-[#FDFBF7] font-sans text-slate-800 pb-24 px-4 sm:px-6 pt-6">
      {/* Category Header Banner */}

      <div className="max-w-7xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-3xl min-h-[280px] bg-rose-900 shadow-xl border border-rose-200">
          {/* Real Crisp Banner Image without any blur or gradient */}
          <img
            src={currentCategory?.banner}
            alt={currentCategory?.name || `${categoryName} Collection`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Content Container with High Visibility Text (Bold, Big Size, Strong Shadows) */}
          <div className="relative z-10 min-h-[280px] flex items-center justify-between p-6 sm:p-12">
            <div className="max-w-2xl space-y-4">
              {/* Category Pill Badge */}
              <span className="inline-flex items-center gap-2 bg-rose-600 text-white text-xs sm:text-sm font-extrabold tracking-wider px-4 py-2 rounded-full shadow-lg border-2 border-white">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                {categoryProducts.length} Artisan Items Curated
              </span>

              {/* Title: Extra Bold, Big Size, Deep Text Shadow */}
              <h1 className="text-4xl sm:text-6xl font-black capitalize tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                {currentCategory
                  ? currentCategory.name
                  : `${categoryName} Collection`}
              </h1>

             

              {/* Minimalist Divider */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs text-white font-extrabold uppercase tracking-widest drop-shadow">
                  Lvyreli Signature
                </span>
                <span className="w-12 h-0.5 bg-white shadow" />
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>

            {/* Floating Preview Badge (Visible on Desktop) */}
            <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-rose-950/95 rounded-2xl border-2 border-white text-white shadow-2xl min-w-[170px]">
              <span className="text-[11px] uppercase tracking-widest text-rose-200 font-black mb-1">
                Authenticity
              </span>
              <span className="text-2xl font-black text-white">100%</span>
              <span className="text-xs text-rose-100 font-bold text-center mt-0.5">
                Handcrafted Quality
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-rose-100 p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              No products found in this collection
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Check back soon or explore other stunning categories!
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-rose-600 text-white text-xs font-semibold px-6 py-3 rounded-xl shadow cursor-pointer hover:bg-rose-700 transition"
            >
              Return to Home
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categoryProducts.map((prod) => (
              <motion.div
                key={prod.id}
                onClick={() => navigate(`/product-details/${prod.id}`)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-3 sm:p-4 border border-rose-100/80 shadow-xs hover:shadow-xl transition flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-40 sm:h-52 rounded-xl overflow-hidden bg-rose-50/50 mb-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-rose-600 flex items-center justify-center shadow transition cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                    <img
                      src={prod.img}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-1 text-amber-500 text-[11px] font-semibold mb-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{prod.rating}</span>
                    <span className="text-slate-400 text-[10px]">
                      ({prod.reviews})
                    </span>
                  </div>

                  <h3 className="font-semibold text-slate-900 text-xs sm:text-sm line-clamp-1 group-hover:text-rose-600 transition">
                    {prod.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {prod.price}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-[10px] text-slate-400 line-through">
                        {prod.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Buy Now Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product-details/${prod.id}`);
                    }}
                    className="bg-rose-600 hover:bg-rose-700 text-white p-1.5 sm:px-3 sm:py-2 rounded-xl shadow transition flex items-center gap-1 text-xs font-medium cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span className="hidden sm:inline">Buy Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
