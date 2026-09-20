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
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-800 pb-24 px-4 sm:px-6 pt-6">
      {/* Breadcrumb & Back Navigation */}
      {/* <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span
            className="cursor-pointer hover:text-rose-600"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-rose-600 font-medium capitalize">
            {currentCategory ? currentCategory.name : categoryName} Collection
          </span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-rose-200 text-slate-700 px-3 py-1.5 rounded-xl shadow-xs hover:bg-rose-50 transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>
      </div> */}

      {/* Category Header Banner */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-rose-700 via-rose-600 to-pink-700 text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-md relative overflow-hidden">
        <div className="max-w-2xl space-y-3 z-10 relative">
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
            {categoryProducts.length} Artisan Items Available
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold capitalize tracking-tight">
            {currentCategory
              ? currentCategory.name
              : `${categoryName} Collection`}
          </h1>
          <p className="text-sm text-rose-100 font-light leading-relaxed">
            Discover our handpicked collection of premium handcrafted{" "}
            {categoryName} bangles and cuffs designed for absolute elegance.
          </p>
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
