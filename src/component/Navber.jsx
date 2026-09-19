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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeLayout() {
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 font-sans text-slate-800 shadow-xs">
      {/* ================= HEADER NAVIGATION ================= */}
      <header className="md:px-13 bg-white border-b border-slate-200 sticky top-0 z-50">
        {/* Main Header Bar */}
        <div className=" px-4 md:px-0 h-15 md:h-20 flex items-center justify-between gap-4">
          {/* Left: Mobile Menu Button & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-700 hover:text-orange-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <div className="flex  items-center cursor-pointer">
              <img
                onClick={() => navigate("/")}
                className="h-9 sm:h-20 object-contain"
                src="logo f.png"
                alt="Lvyreli Logo"
              />
            </div>
          </div>

          {/* Center: Search Bar (Responsive width) */}
          <div className="flex-1 max-w-2xl hidden sm:flex items-center border border-orange-500 rounded-full overflow-hidden bg-white shadow-sm">
            <div className="hidden md:flex items-center px-4 text-slate-400 gap-1 border-r border-slate-200 cursor-pointer hover:text-slate-600">
              <span className="text-sm font-medium">Products</span>
            </div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-4 py-2 sm:py-2.5 text-xs sm:text-sm outline-none text-slate-700"
            />
            <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 font-medium transition cursor-pointer">
              <Camera className="w-4 h-4 hidden lg:block" />
              <Search className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Search</span>
            </button>
          </div>

          {/* Right Action Icons & Localization (Hidden elements collapsed on mobile) */}
          <div className="flex items-center gap-4 sm:gap-6 text-slate-700">
            <div className="hidden lg:flex items-center gap-1.5 cursor-pointer text-xs font-semibold hover:text-orange-600">
              <span className="text-base">🇧🇩</span>
              <span>BD</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 cursor-pointer text-xs font-semibold hover:text-orange-600">
              <Globe className="w-4 h-4" />
              <span>English-BDT</span>
            </div>
            <div className="relative cursor-pointer hover:text-orange-600">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div className="relative cursor-pointer hover:text-orange-600 hidden sm:block">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Mobile Search Bar (Appears below main header on small screens) */}
        <div className="pl-2 pr-1 sm:hidden -mt-1 flex items-center border border-orange-500 rounded-full overflow-hidden bg-white mx-4 mb-2 shadow-sm">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-3 py-2 text-sm outline-none text-slate-800"
          />
          <button className="bg-orange-500 rounded-2xl text-white px-2 py-2 flex items-center justify-center">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Sub Navigation Bar */}
        <div className="border-t border-slate-100 bg-white hidden md:block">
          <div className=" px-4 lg:px-0 h-11 flex items-center justify-between text-sm font-medium">
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
                About Lvyreli
              </span>
              <span className="cursor-pointer hover:underline">
                Help Center
              </span>
              <span className="cursor-pointer hover:underline">Accio Work</span>
              <span className="cursor-pointer hover:underline">
                Sell on Lvyreli
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu (Toggled via hamburger icon) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-slate-900 font-semibold py-1 border-b border-slate-100">
              <List className="w-4 h-4 text-orange-500" />
              <span>All categories</span>
            </div>
            <div className="text-sm text-slate-700 py-1">
              Verified manufacturers
            </div>
            <div className="text-sm text-slate-700 py-1">Dropshipping</div>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-500">
              <span className="cursor-pointer">About Lvyreli</span>
              <span className="cursor-pointer">Help Center</span>
              <span className="cursor-pointer">Sell on Lvyreli</span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
