import React from "react";
import {
  Search,
  MapPin,
  Globe,
  ShoppingCart,
  MessageSquare,
  List,
  User,
  Camera,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  // Mock category items based on the reference layout
  const categories = [
    {
      name: "Thermal printers",
      img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=100&auto=format&fit=crop&q=60",
    },
    {
      name: "Video Cameras",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&auto=format&fit=crop&q=60",
    },
    {
      name: "Prosumer Drones",
      img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=100&auto=format&fit=crop&q=60",
    },
    {
      name: "TV Antenna",
      img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=100&auto=format&fit=crop&q=60",
    },
    {
      name: "Microphones",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=100&auto=format&fit=crop&q=60",
    },
    {
      name: "Mobile Lenses",
      img: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=100&auto=format&fit=crop&q=60",
    },
    {
      name: "Gaming Mouse",
      img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=100&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* ================= 1. HEADER NAVIGATION ================= */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className=" mx-auto px-4 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-extrabold tracking-tight text-orange-600">
              Lvyreli<span className="text-slate-900">.com</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl flex items-center border-2 border-orange-500 rounded-full overflow-hidden bg-white shadow-sm">
            <div className="flex items-center px-4 text-slate-400 gap-1 border-r border-slate-200 cursor-pointer hover:text-slate-600">
              <span className="text-sm font-medium">Products</span>
            </div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-4 py-2.5 text-sm outline-none text-slate-700"
            />
            <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 font-medium transition cursor-pointer">
              <Camera className="w-4 h-4" />
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
            </button>
          </div>

          {/* Right Action Icons & Localization */}
          <div className="flex items-center gap-6 text-slate-700">
            <div className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold hover:text-orange-600">
              <span className="text-base">🇧🇩</span>
              <span>BD</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold hover:text-orange-600">
              <Globe className="w-4 h-4" />
              <span>English-BDT</span>
            </div>
            <div className="relative cursor-pointer hover:text-orange-600">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div className="relative cursor-pointer hover:text-orange-600">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Sub Navigation Bar */}
        <div className="border-t border-slate-100 bg-white">
          <div className=" mx-auto px-4 h-11 flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer text-slate-900 font-semibold hover:text-orange-600">
                <List className="w-4 h-4" />
                <span>All categories</span>
              </div>
              <span className="cursor-pointer hover:text-orange-600 text-slate-600">
                Verified manufacturers
              </span>
              <span className="cursor-pointer hover:text-orange-600 text-slate-600">
                Dropshipping
              </span>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-600">
              <span className="cursor-pointer hover:underline">
                About Alibaba.com
              </span>
              <span className="cursor-pointer hover:underline">
                Help Center
              </span>
              <span className="cursor-pointer hover:underline">Accio Work</span>
              <span className="cursor-pointer hover:underline">
                Sell on Alibaba.com
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= 2. HERO BANNER SECTION ================= */}
      <section className="relative bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-900 text-white pt-16 pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Consumer Electronics
          </h1>
          <p className="text-sm md:text-base text-amber-100 font-light max-w-xl mx-auto">
            All listed manufacturers verified by professional third-party
            certification companies
          </p>
        </div>
      </section>

      {/* ================= 3. FLOATING CATEGORY CAROUSEL CARD ================= */}
      <main className="w-3/4 mx-auto px-4 -mt-24 relative z-20 pb-16">
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              Source by category
            </h2>
          </div>

          <div className="relative flex items-center">
            {/* Scroll Left Button */}
            <button className="absolute -left-3 z-10 bg-white border border-slate-200 shadow-md p-1.5 rounded-full hover:bg-slate-50 transition">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            {/* Categories List */}
            <div className="flex items-center justify-between w-full overflow-x-auto gap-4 px-2 py-2 no-scrollbar">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group cursor-pointer min-w-[90px]"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shadow-inner mb-2 group-hover:border-orange-500 transition">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <span className="text-xs text-center text-slate-700 font-medium group-hover:text-orange-600 line-clamp-2 w-24">
                    {cat.name}
                  </span>
                </div>
              ))}

              {/* More Icon Circle */}
              <div className="flex flex-col items-center group cursor-pointer min-w-[90px]">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200 shadow-inner mb-2 group-hover:border-orange-500 transition">
                  <span className="text-xl font-bold text-slate-500">•••</span>
                </div>
                <span className="text-xs text-center text-slate-700 font-medium group-hover:text-orange-600">
                  More
                </span>
              </div>
            </div>

            {/* Scroll Right Button */}
            <button className="absolute -right-3 z-10 bg-white border border-slate-200 shadow-md p-1.5 rounded-full hover:bg-slate-50 transition">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* ================= 4. EXPERT-CURATED HOT PICKS SECTION ================= */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Expert-curated hot picks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Power Banks & Power Station */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-4">
                  Power Banks & Power Station
                </h3>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl relative">
                  <span className="absolute top-2 left-2 bg-amber-400 text-white font-bold text-[10px] px-1.5 py-0.5 rounded">
                    #1
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1609592424158-47253556d115?w=200&auto=format&fit=crop&q=60"
                    alt="Power bank"
                    className="w-24 h-24 object-contain mx-auto"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200&auto=format&fit=crop&q=60"
                    alt="Power bank station"
                    className="w-20 h-20 object-contain mx-auto opacity-80"
                  />
                </div>
                <p className="text-xs text-slate-600 mt-4 line-clamp-2">
                  Custom Logo Slim Mini Fast Charger 20000mAh Powerbank
                  Outdoor...
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-lg font-extrabold text-slate-900">
                  ৳356.48-1,204.63
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Min. order: 20 pieces
                </div>
              </div>
            </div>

            {/* Card 2: Walkie Talkie */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-4">
                  Walkie Talkie
                </h3>
                <div className="flex items-center justify-center gap-4 bg-slate-50 p-4 rounded-xl relative h-32">
                  <span className="absolute top-2 left-2 bg-amber-400 text-white font-bold text-[10px] px-1.5 py-0.5 rounded">
                    #1
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=200&auto=format&fit=crop&q=60"
                    alt="Walkie talkie"
                    className="h-24 object-contain"
                  />
                </div>
                <p className="text-xs text-slate-600 mt-4 line-clamp-2">
                  Binqi BQ-360 4G LTE POC Long Range 5000km Portable Handheld...
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-lg font-extrabold text-slate-900">
                  ৳ 2,511.28
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Min. order: 2 pieces
                </div>
              </div>
            </div>

            {/* Card 3: Mouse */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-4">
                  Mouse
                </h3>
                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl relative h-32">
                  <span className="absolute top-2 left-2 bg-amber-400 text-white font-bold text-[10px] px-1.5 py-0.5 rounded">
                    #1
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=200&auto=format&fit=crop&q=60"
                    alt="Gaming Mouse"
                    className="h-24 object-contain"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="w-4 h-4 rounded-full bg-slate-800 border"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border"></div>
                    <div className="w-4 h-4 rounded-full bg-emerald-500 border"></div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-4 line-clamp-2">
                  Ultra Slim Mouse Inalambrico Dual Mode Bt Rechargeable
                  Colorful...
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-lg font-extrabold text-slate-900">
                  BDT 169.64-194.22
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Min. order: 1 piece
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Chat Widget Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-lg px-4 py-2.5 rounded-full flex items-center gap-2 font-medium text-sm transition">
          <MessageCircle className="w-5 h-5 text-orange-500" />
          <span>Messages</span>
        </button>
      </div>
    </div>
  );
}
