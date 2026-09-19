import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Star,
  ShoppingBag,
  Heart,
} from "lucide-react";
import Hero from "./Slider";

export default function Home() {
  // Circular categories matching your layout reference, customized for bangles
  const categories = [
    {
      name: "Resin Bangles",
      img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "Wooden Bangles",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "Boho Stacks",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "Lac Bangles",
      img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "Bridal Sets",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "Minimalist Gold",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "Glass Bangles",
      img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "More Collections",
      img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=200&auto=format&fit=crop&q=60",
    },
  ];

  // Expert-curated hot picks layout columns
  const curatedSections = [
    {
      title: "Resin & Glossy Stacks",
      subtitle: "Vibrant & lightweight daily wear",
      items: [
        {
          name: "Sunset Glossy Resin Set",
          price: "৳1,250",
          img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=300&auto=format&fit=crop&q=60",
        },
        {
          name: "Pastel Botanical Resin Cuff",
          price: "৳950",
          img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=300&auto=format&fit=crop&q=60",
        },
      ],
    },
    {
      title: "Wooden & Boho Cuffs",
      subtitle: "Earthy, organic & free-spirited",
      items: [
        {
          name: "Carved Wooden Artisan Band",
          price: "৳980",
          img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&auto=format&fit=crop&q=60",
        },
        {
          name: "Boho Charm & Thread Stack",
          price: "৳1,450",
          img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&auto=format&fit=crop&q=60",
        },
      ],
    },
    {
      title: "Lac Festive Collections",
      subtitle: "Traditional colors & mirror work",
      items: [
        {
          name: "Royal Crimson Lac Bangles",
          price: "৳1,890",
          img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300&auto=format&fit=crop&q=60",
        },
        {
          name: "Bridal Meenakari Lac Set",
          price: "৳2,490",
          img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300&auto=format&fit=crop&q=60",
        },
      ],
    },
  ];

  return (
    <div className=" min-h-screen font-sans text-slate-800 pb-20">
      {/* ================= HERO BANNER SECTION (Women-Friendly Rose/Terra Gradient) ================= */}

      <Hero />
      {/* ================= FLOATING CATEGORIES CARD ================= */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Source by category
            </h2>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-rose-50 hover:border-rose-300 transition cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-rose-50 hover:border-rose-300 transition cursor-pointer">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Circle Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group cursor-pointer text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-rose-50 border-2 border-rose-100 group-hover:border-rose-500 transition duration-300 shadow-sm mb-2">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <span className="text-sm font-medium text-slate-800 group-hover:text-rose-600 transition line-clamp-1">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERT CURATED HOT PICKS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Expert-curated hot picks
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Handpicked trendy bangle assortments for every style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {curatedSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    {section.title}
                  </h3>
                  <span className="text-xs bg-rose-100 text-rose-700 font-semibold px-2 py-0.5 rounded-md">
                    Hot
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  {section.subtitle}
                </p>

                {/* Inner Item Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="group cursor-pointer bg-rose-50/20 p-2.5 rounded-xl border border-rose-50 hover:border-rose-200 transition"
                    >
                      <div className="relative h-28 rounded-lg overflow-hidden bg-white mb-2">
                        <span className="absolute top-1 left-1 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                          #{i + 1}
                        </span>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <h4 className="text-[11px] font-medium text-slate-800 line-clamp-1 group-hover:text-rose-600">
                        {item.name}
                      </h4>
                      <p className="text-xs font-bold text-rose-700 mt-1">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">
                  Explore collection
                </span>
                <ArrowRight className="w-4 h-4 text-rose-600" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
