import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import productsData from "../data/products.json";
import { motion } from "framer-motion";

export default function Checkout() {
  const navigate = useNavigate();

  const { id } = useParams(); // Grabs the product id from the route

  // Find the product being purchased
  const product = productsData.products.find((p) => p.id === id) || {
    name: "Sunset Glossy Resin Stack",
    price: "৳1,250",
    img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=200&auto=format&fit=crop&q=80",
  };

  // Form state for customer details
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Dhaka",
    address: "",
    note: "",
    paymentMethod: "cod", // cod = Cash on Delivery
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FDFBF7] -mt-30 md:-mt-20 min-h-screen flex items-center justify-center px-4 font-sans text-slate-800 relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Success Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="max-w-md w-full bg-white p-8 rounded-3xl border border-rose-100 shadow-2xl text-center space-y-4 relative z-10"
        >
          {/* Animated Checkmark Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto shadow-inner"
          >
            <CheckCircle2 className="w-10 h-10" />
          </motion.div>

          <h2 className="text-2xl font-black text-slate-900">
            Order Placed Successfully!
          </h2>

          <p className="text-xs text-slate-500 leading-relaxed">
            Thank you for shopping with{" "}
            <strong className="text-rose-600">Lvyreli</strong>,{" "}
            {formData.fullName}. We have received your order and will call your
            number (
            <span className="text-slate-800 font-semibold">
              {formData.phone}
            </span>
            ) for delivery confirmation shortly.
          </p>

          <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 text-left text-xs space-y-1 text-slate-600">
            <p>
              <strong>Shipping Address:</strong> {formData.address},{" "}
              {formData.city}
            </p>
            <p>
              <strong>Payment Method:</strong> Cash on Delivery (COD)
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/")}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl shadow-lg transition cursor-pointer mt-4 text-sm"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className=" md:w-[1200px] mx-auto  min-h-screen font-sans text-slate-800 py-4 px-4 -mt-3 md:mt-0">
      {/* Top Header / Back Button */}
      <div className=" flex items-center justify-between md:mb-8 mb-4">
        <h1 className="text-lg md:ml-2 sm:text-xl font-extrabold text-slate-900">
          Lvyreli{" "}
          <span className="text-rose-600 font-medium">Secure Checkout</span>
        </h1>

        <div className=" hidden md:flex items-center gap-1 text-emerald-600 text-xs font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <ShieldCheck className="w-4 h-4" />
          <span className="hidden sm:inline">Encrypted Checkout</span>
        </div>
      </div>

      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ================= LEFT: FORM INPUTS (7 Cols) ================= */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-rose-100">
            Shipping Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Nusrat Jahan"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-xs sm:text-sm bg-rose-50/30 border border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="017XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-rose-50/30 border border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-rose-50/30 border border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City / Region *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-rose-50/30 border border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition"
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Other">Other Districts</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Delivery Area
                </label>
                <input
                  type="text"
                  name="area"
                  placeholder="e.g. Dhanmondi / Gulshan"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-rose-50/30 border border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Street Address *
              </label>
              <textarea
                name="address"
                required
                rows="2"
                placeholder="House no, Road no, Area details"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-xs sm:text-sm bg-rose-50/30 border border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Delivery Note (Optional)
              </label>
              <input
                type="text"
                name="note"
                placeholder="e.g. Please call before delivery"
                value={formData.note}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-xs sm:text-sm bg-rose-50/30 border border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition"
              />
            </div>

            {/* Payment Method Selector */}
            <div className="pt-3">
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Payment Method
              </label>
              <div className="flex items-center gap-3 p-3.5 bg-rose-50/50 rounded-2xl border border-rose-200 cursor-pointer">
                <input
                  type="radio"
                  checked
                  readOnly
                  className="accent-rose-600 w-4 h-4"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Cash on Delivery (Pay securely upon receiving your package)
                </span>
              </div>
            </div>

            <div className="flex gap-7">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full md:w-2/3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3.5 px-2 rounded-2xl shadow-sm transition flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cancel</span>
              </button>
              <button
                type="submit"
                className="w-full md:w-3/4 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Confirm Order</span>
              </button>
            </div>
          </form>
        </div>

        {/* ================= RIGHT: ORDER SUMMARY (5 Cols) ================= */}
        {/* ================= RIGHT: ORDER SUMMARY (5 Cols) ================= */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-rose-100">
              Order Summary
            </h3>

            {/* Larger Dynamic Item Card Image */}
            <div className="flex items-center gap-4 py-3 border-b border-rose-50">
              <img
                src={product.img || product.images?.[0]}
                alt={product.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-rose-200 shadow-sm shrink-0"
              />
              <div className="flex-1 min-w-0 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2">
                  {product.name}
                </h4>
                <span className="text-[11px] text-slate-500 block">
                  Size: 2.6 (Standard)
                </span>
                <span className="text-[11px] font-semibold text-rose-600 block">
                  Qty: 1
                </span>
              </div>
              <span className="text-sm font-black text-slate-900 shrink-0">
                {product.price}
              </span>
            </div>

            {/* Price Calculations */}
            <div className="space-y-2 text-xs text-slate-600 pt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">
                  {product.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery Charge</span>
                <span className="font-semibold text-slate-800">৳80</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-rose-100 text-sm font-black text-slate-900">
                <span>Total Amount</span>
                <span className="text-rose-600">
                  ৳
                  {(
                    (parseInt(product.price?.replace(/[^\d]/g, "")) || 1250) +
                    80
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="bg-rose-50/50 p-5 rounded-3xl border border-rose-100 space-y-3">
            <div className="flex items-center gap-3 text-xs text-slate-700">
              <Truck className="w-5 h-5 text-rose-600 shrink-0" />
              <span>
                Fast home delivery across Bangladesh within 2–3 business days.
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-700">
              <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0" />
              <span>
                100% inspection guaranteed before bubble-wrap packaging.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
