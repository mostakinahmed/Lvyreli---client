import React from "react";
import { motion } from "framer-motion";
import { Zap, Heart, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import your real local JSON files
import productsData from "../../data/products.json";
import categoriesData from "../../data/categories.json";

export default function CatSection() {
  const navigate = useNavigate();

  // Extract arrays from your JSON data files
  const allProducts = productsData.products;
  const categoriesList = categoriesData.categories;

  // Optional background accent color helper matching your boutique theme
  const accentColors = [
    "text-rose-600 bg-rose-50 border-rose-100",
    "text-amber-700 bg-amber-50 border-amber-100",
    "text-orange-700 bg-orange-50 border-orange-100",
    "text-pink-700 bg-pink-50 border-pink-100",
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-800 pb-24">
      {/* Dynamic Category Sections mapped from categories.json */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 space-y-16 mt-12">
        {categoriesList.slice(0, 4).map((section, index) => {
          // Dynamically filter products from products.json matching each category slug
          const sectionProducts = allProducts.filter(
            (prod) => prod.category === section.slug,
          );

          // Skip rendering the section if there are no products for it
          if (sectionProducts.length === 0) return null;

          // Limit to maximum 8 items (2 rows of 4 items on large screens)
          const limitedProducts = sectionProducts.slice(0, 8);

          const currentAccent = accentColors[index % accentColors.length];

          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-rose-900/10 pb-3 gap-2">
                <div>
                  <span
                    className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full border mb-1.5 ${currentAccent}`}
                  >
                    {section.count || "Featured Collection"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {section.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Explore our handcrafted selection of authentic{" "}
                    {section.name.toLowerCase()}.
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/category/${section.slug}`)}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 group cursor-pointer transition self-start sm:self-auto"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Dynamic Product Cards Grid (Limited to 2 rows / 8 items) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                {limitedProducts.map((prod) => (
                  <motion.div
                    key={prod.id}
                    onClick={() => navigate(`/product-details/${prod.id}`)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl p-2.5 sm:p-3.5 border border-rose-100/80 shadow-xs hover:shadow-lg transition flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden bg-rose-50/50 mb-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents card navigation when clicking wishlist
                          }}
                          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-rose-600 flex items-center justify-center shadow transition cursor-pointer"
                        >
                          <Heart className="w-3.5 h-3.5" />
                        </button>
                        <img
                          src={prod.img}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>

                      <div className="flex items-center gap-1 text-amber-500 text-[11px] font-semibold mb-0.5">
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

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
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
                        className="bg-rose-600 hover:bg-rose-700 text-white p-1.5 sm:px-3 sm:py-1.5 rounded-lg shadow transition flex items-center gap-1 text-[11px] font-medium cursor-pointer"
                      >
                        <Zap className="w-3 h-3 fill-current" />
                        <span className="hidden sm:inline">Buy Now</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Button at the Bottom of Each Section */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => navigate(`/category/${section.slug}`)}
                  className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold text-xs px-6 py-2.5 rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer group"
                >
                  <span>View All {section.name} Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
