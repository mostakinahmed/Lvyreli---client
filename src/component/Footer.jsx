import React from "react";
import { Heart, Sparkles, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2423] text-rose-100 font-sans border-t border-rose-900/30 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Brand Info */}
        <div className="space-y-2">
          <span className="text-2xl font-extrabold tracking-tight text-rose-300">
            Lvyreli<span className="text-white">.com</span>
          </span>
          <p className="text-xs text-rose-200/70 max-w-xs mx-auto md:mx-0">
            Handcrafted resin, wooden, boho, and lac bangles designed to adorn
            your everyday elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
          <a href="#collections" className="hover:text-rose-300 transition">
            Collections
          </a>
          <a href="#sizing" className="hover:text-rose-300 transition">
            Size Guide
          </a>
          <a href="#shipping" className="hover:text-rose-300 transition">
            Shipping
          </a>
          <a href="#contact" className="hover:text-rose-300 transition">
            Contact Us
          </a>
        </div>

        {/* Copyright & Made with Love */}
        <div className="flex flex-col items-center md:items-end text-xs text-rose-200/60 space-y-1">
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> for
            women everywhere
          </p>
          <p>© {new Date().getFullYear()} Lvyreli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
