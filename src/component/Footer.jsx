import React from "react";
import {
  ShieldCheck,
  Truck,
  Headphones,
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  Share2,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      {/* ================= 1. VALUE PROPOSITION BAR ================= */}
      <div className="hidden border-b border-slate-800 py-8 bg-slate-950/50">
        <div className="w-3/4  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">
                Fast Worldwide Delivery
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Shipping to your doorstep safely
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">
                Secure Checkout
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                100% protected payment methods
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Easy Returns</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Hassle-free 7-day return policy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">24/7 Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Dedicated customer assistance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN FOOTER LINKS ================= */}
      <div className="w-3/4 mx-auto  px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Newsletter Column */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-orange-500">
              Lvyreli<span className="text-white">.com</span>
            </span>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed max-w-sm">
              Your trusted online destination for quality consumer electronics,
              hot-picked trends, and verified everyday goods. Shop smarter, live
              better.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h5 className="text-white text-sm font-semibold">
              Subscribe to our newsletter
            </h5>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-slate-800 border border-slate-700 text-white text-sm px-4 py-3 rounded-l-xl outline-none focus:border-orange-500 w-full"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-6 py-3 rounded-r-xl transition shrink-0 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Column 2: About */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            About Lvyreli
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-orange-500 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#press" className="hover:text-orange-500 transition">
                Press & News
              </a>
            </li>
            <li>
              <a href="#stores" className="hover:text-orange-500 transition">
                Store Locations
              </a>
            </li>
            <li>
              <a href="#policies" className="hover:text-orange-500 transition">
                Policies & Rules
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Customer Care
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#help" className="hover:text-orange-500 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#track" className="hover:text-orange-500 transition">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#returns" className="hover:text-orange-500 transition">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-orange-500 transition">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Socials */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-start gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2.5 text-slate-400">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-2.5 text-slate-400">
              <Mail className="w-4 h-4 text-orange-500 shrink-0" />
              <span>support@lvyreli.com</span>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#social"
              title="Global Network"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-600 hover:text-white flex items-center justify-center transition text-slate-300"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#share"
              title="Share"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-600 hover:text-white flex items-center justify-center transition text-slate-300"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href="#chat"
              title="Community Chat"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-600 hover:text-white flex items-center justify-center transition text-slate-300"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= 3. BOTTOM COPYRIGHT ================= */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lvyreli.com. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300 transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
