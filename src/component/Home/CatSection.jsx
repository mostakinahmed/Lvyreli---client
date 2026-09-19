import React from "react";
import { motion } from "framer-motion";
import { Zap, Heart, ArrowRight, Star } from "lucide-react";

export default function CatSection() {
  // Category sections data
  const categorySections = [
    {
      id: "resin",
      title: "Resin & Glossy Stacks",
      subtitle: "Vibrant, lightweight, and modern designs made for daily wear.",
      badge: "Trending Daily",
      accentColor: "text-rose-600 bg-rose-50 border-rose-100",
      products: [
        {
          name: "Sunset Glossy Resin Set",
          price: "৳1,250",
          rating: 4.9,
          img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Pastel Botanical Resin Cuff",
          price: "৳950",
          rating: 4.8,
          img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Crystal Clear Floral Stack",
          price: "৳1,350",
          rating: 5.0,
          img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Neon Glossy Charm Bangle",
          price: "৳890",
          rating: 4.7,
          img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=400&auto=format&fit=crop&q=60",
        },
      ],
    },
    {
      id: "wooden",
      title: "Earthy Wooden Cuffs",
      subtitle:
        "Sustainable, organic, and naturally unique textures for natural lovers.",
      badge: "Eco-Friendly",
      accentColor: "text-amber-700 bg-amber-50 border-amber-100",
      products: [
        {
          name: "Carved Wooden Artisan Band",
          price: "৳980",
          rating: 4.8,
          img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Polished Walnut Wood Bangle",
          price: "৳890",
          rating: 4.7,
          img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Rustic Inlaid Wooden Cuff",
          price: "৳1,150",
          rating: 4.9,
          img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Dark Teak Minimalist Band",
          price: "৳850",
          rating: 4.6,
          img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=60",
        },
      ],
    },
    {
      id: "boho",
      title: "Boho Thread & Charm Stacks",
      subtitle:
        "Free-spirited beaded, thread, and metallic charm combinations.",
      badge: "Best Seller",
      accentColor: "text-orange-700 bg-orange-50 border-orange-100",
      products: [
        {
          name: "Boho Festival Charm Set",
          price: "৳1,450",
          rating: 5.0,
          img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Vibrant Thread Wrapped Stack",
          price: "৳790",
          rating: 4.8,
          img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Gypsy Beaded Bangle Layer",
          price: "৳1,190",
          rating: 4.9,
          img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Boho Feather & Coin Stack",
          price: "৳990",
          rating: 4.7,
          img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=60",
        },
      ],
    },
    {
      id: "lac",
      title: "Traditional Lac Festive Wear",
      subtitle:
        "Vibrant colors, mirror work, and cultural elegance for celebrations.",
      badge: "Handcrafted Luxury",
      accentColor: "text-pink-700 bg-pink-50 border-pink-100",
      products: [
        {
          name: "Royal Crimson Lac Bangles",
          price: "৳1,890",
          rating: 4.9,
          img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Bridal Meenakari Lac Set",
          price: "৳2,490",
          rating: 5.0,
          img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Festive Gold-Studded Lac",
          price: "৳1,650",
          rating: 4.8,
          img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&auto=format&fit=crop&q=60",
        },
        {
          name: "Emerald Traditional Lac Cuff",
          price: "৳1,450",
          rating: 4.8,
          img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&auto=format&fit=crop&q=60",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-800 pb-24">
      {/* Category Sections with Scroll Animations */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 space-y-16 mt-12">
        {categorySections.map((section) => (
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
                  className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full border mb-1.5 ${section.accentColor}`}
                >
                  {section.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {section.subtitle}
                </p>
              </div>
              <button className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 group cursor-pointer transition self-start sm:self-auto">
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {section.products.map((prod, pIdx) => (
                <motion.div
                  key={pIdx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-2.5 sm:p-3.5 border border-rose-100/80 shadow-xs hover:shadow-lg transition flex flex-col justify-between group"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden bg-rose-50/50 mb-3">
                      <button className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-rose-600 flex items-center justify-center shadow transition cursor-pointer">
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
                    </div>

                    <h3 className="font-semibold text-slate-900 text-xs sm:text-sm line-clamp-1 group-hover:text-rose-600 transition">
                      {prod.name}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {prod.price}
                    </span>
                    {/* Buy Now Button */}
                    <button className="bg-rose-600 hover:bg-rose-700 text-white p-1.5 sm:px-3 sm:py-1.5 rounded-lg shadow transition flex items-center gap-1 text-[11px] font-medium cursor-pointer">
                      <Zap className="w-3 h-3 fill-current" />
                      <span className="hidden sm:inline">Buy Now</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
