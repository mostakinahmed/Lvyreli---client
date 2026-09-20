import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Tag, Flame } from "lucide-react";
import productsData from "../../data/products.json";

export default function OfferProductsSection() {
  const navigate = useNavigate();
  const products = productsData.products || [];

  // Filter or grab products that have a discount or special offer
  const offerProducts = products.filter(p => p.originalPrice).slice(0, 3);

  return (
    <section className="bg-gradient-to-r from-rose-100/90 via-pink-50 to-rose-100/90 py-10 px-4 sm:px-4 my-16  rounded-t-[2rem] border-rose-200 shadow-inner relative overflow-hidden">
      
      {/* Decorative background glow blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* Expanded to 1500px width container */}
      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:mb-10 mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-rose-600 text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md mb-3 animate-pulse">
            <Flame className="w-4 h-4 fill-current" />
            <span>Limited Time Flash Deals</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Special Deals & Artisan Offers
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl mx-auto font-medium">
            Grab handpicked bangle sets and exclusive seasonal assortments at unbeatable reduced prices.
          </p>
        </motion.div>

        {/* Offer Products Grid with Smaller, Compact Cards & Framer Motion Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5">
          {offerProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.01 }}
              onClick={() => navigate(`/product-details/${prod.id}`)}
              className="group bg-white rounded-3xl p-4 sm:p-5 border-2 border-rose-200/90 shadow-md hover:shadow-2xl hover:border-rose-500 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden max-w-sm sm:max-w-md mx-auto w-full"
            >
              {/* Savings Banner Ribbon with Pulse Animation */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-extrabold px-3.5 py-1 rounded-bl-2xl shadow-sm flex items-center gap-1 z-10"
              >
                <Tag className="w-3 h-3" />
                <span>SAVE BIG</span>
              </motion.div>

              <div>
                {/* Compact Product Image */}
                <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-rose-50 mb-3 shadow-inner">
                  <motion.img
                    src={prod.img}
                    alt={prod.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-lg text-[10px] font-bold text-rose-700 shadow-sm">
                    {prod.category?.toUpperCase()} COLLECTION
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold mb-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{prod.rating}</span>
                  <span className="text-slate-400 text-[10px]">({prod.reviews} reviews)</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-rose-600 transition line-clamp-1">
                  {prod.name}
                </h3>
                
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-light">
                  Handcrafted premium {prod.category} bangle set designed for elegant everyday wear.
                </p>
              </div>

              {/* Price & Action Footer */}
              <div className="mt-4 pt-3 border-t border-rose-100 flex items-center justify-between">
                <div>
                  <div className="text-[9px] uppercase font-extrabold text-rose-600 tracking-wider">Offer Price</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base sm:text-lg font-black text-slate-900">{prod.price}</span>
                    {prod.originalPrice && (
                      <span className="text-[11px] text-slate-400 line-through font-semibold">{prod.originalPrice}</span>
                    )}
                  </div>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product-details/${prod.id}`);
                  }}
                  className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Grab Deal</span>
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}