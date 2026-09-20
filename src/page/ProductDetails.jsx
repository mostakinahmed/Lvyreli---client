import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Zap,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

// Import your local products database
import productsData from "../data/products.json";

export default function ProductDetails() {
  const { id } = useParams(); // Grabs product id from URL (e.g., /product-details/prod-1)
  const navigate = useNavigate();

  // 🌟 Forces the page to open at the top instantly when loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  // Find the matching product from your JSON data file
  const foundProduct = productsData.products.find((p) => p.id === id);

  // Fallback default product if ID doesn't match
  const product = foundProduct || {
    name: "Sunset Glossy Resin Stack (Set of 6)",
    price: "৳1,250",
    originalPrice: "৳1,600",
    discount: "22% OFF",
    rating: 4.9,
    reviews: 128,
    sku: "LVY-RES-092",
    availability: "In Stock (Handcrafted)",
    description:
      "Handcrafted with premium eco-resin and embedded botanical glitter flakes, this vibrant 6-piece stacking set adds a lightweight, glossy pop of color to both casual and festive wear.",
    sizes: ["2.2 (Small)", "2.4 (Medium)", "2.6 (Standard)", "2.8 (Large)"],
    img: "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591483244-7164936e5f0a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
    ],
  };

  // Ensure image gallery works whether JSON has a single 'img' or a multi-'images' array
  const productImages = product.images || [
    product.img,
    product.img,
    product.img,
  ];
  const productSizes = product.sizes || [
    "2.2 (Small)",
    "2.4 (Medium)",
    "2.6 (Standard)",
    "2.8 (Large)",
  ];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState(productSizes[2]); // Default 2.6
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Update selected image if route parameter changes
  useEffect(() => {
    if (productImages.length > 0) {
      setSelectedImage(productImages[0]);
    }
  }, [id]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-800 py-4 px-4 sm:px-6">
      {/* Navigation Breadcrumb & Back */}
      <div className="max-w-7xl hidden md:flex mt-2 mx-auto  items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span
            className="cursor-pointer hover:text-rose-600"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="capitalize text-slate-700">
            {product.category || "Collection"}
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-rose-600 font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-rose-200 text-slate-700 px-3 py-1.5 rounded-xl shadow-xs hover:bg-rose-50 transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white  sm:p-10 rounded-2xl border border-rose-100 shadow-sm">
        {/* ================= LEFT: IMAGE GALLERY (5 Cols) ================= */}
        <div className="lg:col-span-5 space-y-4 p-3">
          {/* Main Display Image */}
          <div className="relative p-3 h-80 sm:h-[450px] rounded-2xl overflow-hidden bg-rose-50/50 border border-rose-100 shadow-inner">
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
              className="w-full h-full object-contain transition duration-500"
            />
          </div>

          {/* Thumbnail Selection Row */}
          <div className="grid grid-cols-3 gap-3">
            {productImages.map((img, idx) => (
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
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: PRODUCT DETAILS & PURCHASE (7 Cols) ================= */}
        <div className="lg:col-span-7 p-5 space-y-6">
          {/* Badge & Title */}
          <div>
            <span className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
              {product.category
                ? `${product.category} Curation`
                : "Lvyreli Artisanal Curation"}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {product.name}
            </h1>
          </div>

          {/* Ratings & SKU */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-b border-rose-100 pb-4">
            <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2.5 py-1 rounded-md">
              <Star className="w-4 h-4 fill-current" />
              <span>{product.rating || 4.9}</span>
              <span className="text-slate-400 font-normal">
                ({product.reviews || 128} reviews)
              </span>
            </div>
            <span>•</span>
            <span>
              SKU:{" "}
              <strong className="text-slate-700">
                {product.sku || "LVY-ART-001"}
              </strong>
            </span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">
              {product.availability || "In Stock (Handcrafted)"}
            </span>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-slate-900">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-base text-slate-400 line-through">
                {product.originalPrice}
              </span>
            )}
            {product.discount && (
              <span className="text-xs font-bold bg-rose-500 text-white px-2 py-0.5 rounded">
                {product.discount}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description ||
              "Handcrafted with premium organic materials, this artisan bangle set adds a lightweight, elegant pop of color to both casual and festive wear."}
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
              {productSizes.map((size, idx) => (
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
                  className="px-3 py-1.5 text-slate-600 hover:bg-rose-100 transition font-bold cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 text-sm font-bold text-slate-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-slate-600 hover:bg-rose-100 transition font-bold cursor-pointer"
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

          {/* Trust Value Badges (Fully Responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-rose-100">
            {/* Safe Delivery */}
            <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100 flex sm:flex-col items-center sm:text-center gap-3 sm:gap-1">
              <Truck className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="text-[12px] font-semibold text-slate-800 block">
                  Safe Delivery
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Bubble-wrapped securely
                </span>
              </div>
            </div>

            {/* 7-Day Exchange */}
            <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100 flex sm:flex-col items-center sm:text-center gap-3 sm:gap-1">
              <RotateCcw className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="text-[12px] font-semibold text-slate-800 block">
                  7-Day Exchange
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Hassle-free sizing
                </span>
              </div>
            </div>

            {/* 100% Skin Friendly */}
            <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100 flex sm:flex-col items-center sm:text-center gap-3 sm:gap-1">
              <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="text-[12px] font-semibold text-slate-800 block">
                  100% Skin Friendly
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Non-allergic materials
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
