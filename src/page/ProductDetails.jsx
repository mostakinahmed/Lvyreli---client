import React, { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Zap,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  ChevronRight,
  Share2,
} from "lucide-react";

export default function ProductDetails() {
  // Mock product data for Lvyreli
  const product = {
    name: "Sunset Glossy Resin Stack (Set of 6)",
    price: "৳1,250",
    originalPrice: "৳1,600",
    discount: "22% OFF",
    rating: 4.9,
    reviewsCount: 128,
    sku: "LVY-RES-092",
    availability: "In Stock (Handcrafted)",
    description:
      "Handcrafted with premium eco-resin and embedded botanical glitter flakes, this vibrant 6-piece stacking set adds a lightweight, glossy pop of color to both casual and festive wear.",
    sizes: ["2.2 (Small)", "2.4 (Medium)", "2.6 (Standard)", "2.8 (Large)"],
    images: [
      "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=60",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default 2.6
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-800 py-8 px-4 sm:px-6">
      

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-10 rounded-xl border border-rose-100">
        {/* ================= LEFT: IMAGE GALLERY (5 Cols) ================= */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Display Image */}
          <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden bg-rose-50/50 border border-rose-100 shadow-inner">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow transition cursor-pointer ${
                isWishlisted
                  ? "bg-rose-600 text-white"
                  : "bg-white/80 hover:bg-white text-slate-600 hover:text-rose-600"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
              />
            </button>
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition duration-500"
            />
          </div>

          {/* Thumbnail Selection Row */}
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`h-24 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                  selectedImage === img
                    ? "border-rose-600 shadow-md scale-95"
                    : "border-rose-100 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: PRODUCT DETAILS & PURCHASE (7 Cols) ================= */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge & Title */}
          <div>
            <span className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
              Lvyreli Artisanal Curation
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {product.name}
            </h1>
          </div>

          {/* Ratings & SKU */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-b border-rose-100 pb-4">
            <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2.5 py-1 rounded-md">
              <Star className="w-4 h-4 fill-current" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">
                ({product.reviewsCount} reviews)
              </span>
            </div>
            <span>•</span>
            <span>
              SKU: <strong className="text-slate-700">{product.sku}</strong>
            </span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">
              {product.availability}
            </span>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-slate-900">
              {product.price}
            </span>
            <span className="text-base text-slate-400 line-through">
              {product.originalPrice}
            </span>
            <span className="text-xs font-bold bg-rose-500 text-white px-2 py-0.5 rounded">
              {product.discount}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Select Bangle Size:</span>
              <a href="#sizing" className="text-rose-600 hover:underline">
                View Sizing Guide
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {product.sizes.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2.5 text-xs font-medium rounded-xl border transition cursor-pointer text-center ${
                    selectedSize === size
                      ? "bg-rose-600 text-white border-rose-600 shadow-md"
                      : "bg-rose-50/30 text-slate-700 border-rose-200 hover:border-rose-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector & Action Buttons */}
          <div className="space-y-4 pt-4 border-t border-rose-100">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-700">
                Quantity:
              </span>
              <div className="flex items-center border border-rose-200 rounded-xl overflow-hidden bg-rose-50/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-slate-600 hover:bg-rose-100 transition font-bold"
                >
                  -
                </button>
                <span className="px-4 text-sm font-bold text-slate-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-slate-600 hover:bg-rose-100 transition font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer">
                <Zap className="w-4 h-4 fill-current" />
                <span>Buy Now</span>
              </button>
              <button className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer">
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-rose-100 text-center">
            <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100 flex flex-col items-center">
              <Truck className="w-5 h-5 text-rose-600 mb-1" />
              <span className="text-[11px] font-semibold text-slate-800">
                Safe Delivery
              </span>
              <span className="text-[10px] text-slate-500">
                Bubble-wrapped securely
              </span>
            </div>
            <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100 flex flex-col items-center">
              <RotateCcw className="w-5 h-5 text-rose-600 mb-1" />
              <span className="text-[11px] font-semibold text-slate-800">
                7-Day Exchange
              </span>
              <span className="text-[10px] text-slate-500">
                Hassle-free sizing
              </span>
            </div>
            <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100 flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-rose-600 mb-1" />
              <span className="text-[11px] font-semibold text-slate-800">
                100% Skin Friendly
              </span>
              <span className="text-[10px] text-slate-500">
                Non-allergic resin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
