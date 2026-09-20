import React, { useState } from "react";
import {
  Search,
  Globe,
  ShoppingCart,
  MessageSquare,
  List,
  User,
  Camera,
  Menu,
  X,
  ChevronDown,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm">
        
        {/* ================= MAIN HEADER ================= */}
        <div className=" mx-auto px-4 sm:px-6 lg:px-15">
          <div className="h-16 md:h-[76px] flex items-center justify-between gap-3 md:gap-6">

            {/* LEFT - MOBILE MENU + LOGO */}
            <div className="flex items-center gap-3">
              
              {/* Mobile Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="
                  md:hidden
                  w-9 h-9
                  rounded-full
                  flex items-center justify-center
                  text-slate-600
                  bg-rose-50
                  hover:bg-rose-100
                  hover:text-rose-600
                  transition
                "
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              {/* Logo */}
              <div
                onClick={() => navigate("/")}
                className="flex items-center cursor-pointer"
              >
                <img
                  src="/logo f.png"
                  alt="Lvyreli"
                  className="
                    h-10
                    sm:h-12
                    md:h-14
                    w-auto
                    object-contain
                  "
                />
              </div>
            </div>

            {/* ================= SEARCH ================= */}
            <div
              className="
                hidden sm:flex
                flex-1
                max-w-2xl
                h-11
                items-center
                rounded-full
                border border-rose-200
                bg-white
                overflow-hidden
                shadow-sm
                focus-within:border-rose-400
                focus-within:ring-4
                focus-within:ring-rose-50
                transition
              "
            >
              {/* Category */}
              <button
                className="
                  hidden md:flex
                  items-center gap-1
                  px-4
                  h-full
                  text-xs
                  font-medium
                  text-slate-500
                  border-r border-rose-100
                  hover:text-rose-600
                  transition
                "
              >
                Products
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Input */}
              <input
                type="text"
                placeholder="Search for bangles, jewelry & more..."
                className="
                  flex-1
                  min-w-0
                  h-full
                  px-4
                  text-sm
                  text-slate-700
                  placeholder:text-slate-400
                  outline-none
                  bg-transparent
                "
              />

              {/* Search Button */}
              <button
                className="
                  h-9
                  mr-1
                  px-4
                  sm:px-5
                  rounded-full
                  flex items-center justify-center gap-2
                  bg-rose-500
                  hover:bg-rose-600
                  text-white
                  text-sm
                  font-medium
                  transition
                  shadow-sm
                  cursor-pointer
                "
              >
                <Camera className="hidden lg:block w-4 h-4" />
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline">Search</span>
              </button>
            </div>

            {/* ================= RIGHT ACTIONS ================= */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">

              {/* Country */}
              <button
                className="
                  hidden xl:flex
                  items-center gap-1.5
                  px-2
                  py-2
                  rounded-full
                  text-xs
                  font-medium
                  text-slate-600
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                <span className="text-base">🇧🇩</span>
                <span>BD</span>
              </button>

              {/* Language */}
              <button
                className="
                  hidden xl:flex
                  items-center gap-1.5
                  px-2
                  py-2
                  rounded-full
                  text-xs
                  font-medium
                  text-slate-600
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                <Globe className="w-4 h-4" />
                <span>English · BDT</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => navigate("/wishlist")}
                className="
                  hidden sm:flex
                  relative
                  w-9 h-9
                  items-center justify-center
                  rounded-full
                  text-slate-600
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                <Heart className="w-5 h-5" />

                <span
                  className="
                    absolute
                    -top-0.5
                    -right-0.5
                    w-4
                    h-4
                    rounded-full
                    bg-rose-500
                    text-white
                    text-[9px]
                    flex items-center justify-center
                  "
                >
                  0
                </span>
              </button>

              {/* Cart */}
              <button
                onClick={() => navigate("/cart")}
                className="
                  relative
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  text-slate-600
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                <ShoppingCart className="w-5 h-5" />

                <span
                  className="
                    absolute
                    -top-0.5
                    -right-0.5
                    w-4
                    h-4
                    rounded-full
                    bg-rose-500
                    text-white
                    text-[9px]
                    flex items-center justify-center
                  "
                >
                  0
                </span>
              </button>

              {/* Message */}
              <button
                className="
                  hidden md:flex
                  w-9 h-9
                  items-center justify-center
                  rounded-full
                  text-slate-600
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                <MessageSquare className="w-5 h-5" />
              </button>

              {/* User */}
              <button
                onClick={() => navigate("/profile")}
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  bg-rose-50
                  text-rose-500
                  hover:bg-rose-100
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ================= MOBILE SEARCH ================= */}
          <div className="sm:hidden pb-3">
            <div
              className="
                h-10
                flex items-center
                rounded-full
                border border-rose-200
                bg-white
                overflow-hidden
                shadow-sm
                focus-within:border-rose-400
                transition
              "
            >
              <Search className="w-4 h-4 ml-3 text-rose-400" />

              <input
                type="text"
                placeholder="Search bangles & jewelry..."
                className="
                  flex-1
                  min-w-0
                  px-2.5
                  text-sm
                  outline-none
                  bg-transparent
                  text-slate-700
                  placeholder:text-slate-400
                "
              />

              <button
                className="
                  h-8
                  w-8
                  mr-1
                  rounded-full
                  flex items-center justify-center
                  bg-rose-500
                  hover:bg-rose-600
                  text-white
                  transition
                "
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden md:block border-t border-rose-50 bg-white">
          <div
            className="
              
              mx-auto
              px-4 sm:px-6 lg:px-15
              h-11
              flex items-center
              justify-between
            "
          >
            {/* Left Navigation */}
            <div className="flex items-center gap-7">

              {/* Categories */}
              <button
                onClick={() => navigate("/categories")}
                className="
                  flex items-center gap-2
                  text-sm
                  font-semibold
                  text-slate-800
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                <span
                  className="
                    w-7 h-7
                    rounded-full
                    bg-rose-50
                    flex items-center justify-center
                    text-rose-500
                  "
                >
                  <List className="w-4 h-4" />
                </span>

                <span>All Categories</span>
              </button>

              <button
                className="
                  text-sm
                  text-slate-600
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                New Arrivals
              </button>

              <button
                className="
                  text-sm
                  text-slate-600
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                Best Sellers
              </button>

              <button
                className="
                  text-sm
                  text-slate-600
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                Bridal Collection
              </button>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-6 text-xs text-slate-500">

              <button
                className="
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                About Lvyreli
              </button>

              <button
                className="
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                Help Center
              </button>

              <button
                className="
                  hover:text-rose-600
                  transition
                  cursor-pointer
                "
              >
                Sell on Lvyreli
              </button>
            </div>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div
            className="
              md:hidden
              bg-white
              border-t border-rose-100
              shadow-lg
              px-4
              py-4
            "
          >
            {/* Categories */}
            <button
              onClick={() => {
                navigate("/categories");
                setMobileMenuOpen(false);
              }}
              className="
                w-full
                flex items-center gap-3
                px-3 py-3
                rounded-xl
                bg-rose-50
                text-slate-800
                font-semibold
                text-sm
                hover:bg-rose-100
                transition
              "
            >
              <span
                className="
                  w-8 h-8
                  rounded-full
                  bg-white
                  flex items-center justify-center
                  text-rose-500
                "
              >
                <List className="w-4 h-4" />
              </span>

              <span>All Categories</span>
            </button>

            {/* Mobile Links */}
            <div className="mt-3 space-y-1">

              <button
                className="
                  w-full
                  text-left
                  px-3 py-2.5
                  rounded-lg
                  text-sm
                  text-slate-700
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                New Arrivals
              </button>

              <button
                className="
                  w-full
                  text-left
                  px-3 py-2.5
                  rounded-lg
                  text-sm
                  text-slate-700
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                Best Sellers
              </button>

              <button
                className="
                  w-full
                  text-left
                  px-3 py-2.5
                  rounded-lg
                  text-sm
                  text-slate-700
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                Bridal Collection
              </button>
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-rose-100" />

            {/* Bottom Links */}
            <div className="grid grid-cols-2 gap-2">

              <button
                className="
                  px-3 py-2.5
                  rounded-lg
                  text-xs
                  text-slate-500
                  bg-slate-50
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                About Lvyreli
              </button>

              <button
                className="
                  px-3 py-2.5
                  rounded-lg
                  text-xs
                  text-slate-500
                  bg-slate-50
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                Help Center
              </button>

              <button
                className="
                  col-span-2
                  px-3 py-2.5
                  rounded-lg
                  text-xs
                  text-slate-500
                  bg-slate-50
                  hover:bg-rose-50
                  hover:text-rose-600
                  transition
                "
              >
                Sell on Lvyreli
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}