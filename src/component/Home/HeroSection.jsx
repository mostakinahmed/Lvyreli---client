import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  ShoppingBag,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Hero from "./Slider";
import productsData from "../../data/products.json";
import categoriesData from "../../data/categories.json";

export default function Home() {
  const navigate = useNavigate();

  // JSON data
  const categories = categoriesData.categories || [];
  const products = productsData.products || [];

  // Create curated sections from products
  const curatedSections = [
    {
      title: "Everyday Elegance",
      subtitle: "Simple and graceful bangles for your everyday style",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
      items: [
        // your existing items
      ],
    },

    {
      title: "Bridal Collection",
      subtitle: "Beautiful traditional bangles for your special moments",
      image:
        "https://serenagenovese.com/wp-content/uploads/2019/01/Dubai-indian-wedding-photographer_0005.jpg",
      items: [
        // your existing items
      ],
    },

    {
      title: "Festive Glam",
      subtitle: "Colorful statement bangles to complete your festive look",
      image:
        "https://meevyy.com/cdn/shop/files/1_5be3f0cd-4fd3-406b-b0ed-bb016275f97c.png?v=1772530726&width=1946",
      items: [
        // your existing items
      ],
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 pb-5">
      {/* ================= HERO ================= */}
      <Hero />

      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-rose-100/80 px-5 py-7 md:py-5 sm:px-8 ">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-px bg-rose-200"></span>

              <span
                className="text-[11px] uppercase tracking-[0.25em] 
          text-rose-400 font-medium"
              >
                Discover Your Style
              </span>

              <span className="w-8 h-px bg-rose-200"></span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Shop by Category
            </h2>
          </div>

          {/* Categories */}
          <div
            className="flex items-start justify-between gap-4 
        overflow-x-auto pb-3 scrollbar-hide scroll-smooth"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/category/${cat.slug}`)}
                className="group cursor-pointer text-center flex-shrink-0 
            w-[105px] sm:w-[125px]"
              >
                {/* Image */}
                <div className="relative mx-auto w-[82px] h-[82px] sm:w-[96px] sm:h-[96px]">
                  {/* Soft background ring */}
                  <div
                    className="absolute inset-0 rounded-full 
                bg-gradient-to-br from-rose-50 to-pink-100
                scale-[1.08] opacity-70
                group-hover:scale-[1.14]
                transition-transform duration-500"
                  />

                  {/* Image */}
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden
                border-[3px] border-white
                ring-1 ring-rose-100
                shadow-md
                group-hover:ring-rose-300
                group-hover:shadow-lg
                transition-all duration-300"
                  >
                    <img
                      src={cat.img}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover
                  group-hover:scale-110
                  transition-transform duration-500"
                    />

                    {/* Soft overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t
                  from-rose-900/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Category Name */}
                <h3
                  className="mt-3 text-[13px] sm:text-sm
              font-medium text-slate-800
              group-hover:text-rose-600
              transition-colors duration-300
              line-clamp-1"
                >
                  {cat.name}
                </h3>

                {/* Count */}
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-1 h-1 rounded-full bg-rose-400"></span>
            <span className="w-12 h-px bg-rose-200"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span className="w-12 h-px bg-rose-200"></span>
            <span className="w-1 h-1 rounded-full bg-rose-400"></span>
          </div>
        </div>
      </section>

      {/* ================= EXPERT CURATED HOT PICKS ================= */}
      {/* ================= EXPERT CURATED HOT PICKS ================= */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 mt-10 sm:mt-13">
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-5 sm:mb-6">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
            <span className="w-6 sm:w-8 h-px bg-rose-200"></span>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium text-rose-400">
              Curated For You
            </span>
          </div>

          <h2 className="text-lg sm:text-2xl font-semibold text-slate-900">
            Expert-curated picks
          </h2>

          <p className="text-[10px] sm:text-sm text-slate-400 mt-0.5 sm:mt-1">
            Handpicked bangle collections made for every mood & occasion
          </p>
        </div>

        {/* ========================================================= */}
        {/* MOBILE: HORIZONTAL SCROLL / DESKTOP: 3 COLUMN GRID       */}
        {/* ========================================================= */}

        <div
          className="
      flex
      overflow-x-auto
      gap-3
      sm:gap-5
      lg:gap-6
      pb-3
      snap-x
      snap-mandatory
      scrollbar-hide

      md:grid
      md:grid-cols-3
      md:overflow-visible
      md:pb-0
      md:snap-none
    "
        >
          {curatedSections.map((section, idx) => {
            /* ================= STATIC COLLECTION IMAGES ================= */
            const collectionImages = [
              "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",

              "https://serenagenovese.com/wp-content/uploads/2019/01/Dubai-indian-wedding-photographer_0005.jpg",

              "https://meevyy.com/cdn/shop/files/1_5be3f0cd-4fd3-406b-b0ed-bb016275f97c.png?v=1772530726&width=1946",
            ];

            return (
              <div
                key={idx}
                className="
            group/card
            relative
            bg-white
            rounded-2xl
            sm:rounded-[1.75rem]
            border
            border-rose-100
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
            overflow-hidden

            /* MOBILE CARD WIDTH */
            min-w-[88%]
            xs:min-w-[82%]

            snap-center

            /* DESKTOP */
            md:min-w-0
            md:w-auto
            md:snap-none
          "
              >
                {/* ================= DECORATIVE BACKGROUND ================= */}

                <div
                  className="
              absolute
              -top-12
              -right-12
              sm:-top-16
              sm:-right-16
              w-28
              h-28
              sm:w-36
              sm:h-36
              rounded-full
              bg-rose-50
              opacity-60
              pointer-events-none
            "
                />

                <div
                  className="
              absolute
              -bottom-16
              -left-12
              sm:-bottom-20
              sm:-left-16
              w-32
              h-32
              sm:w-40
              sm:h-40
              rounded-full
              bg-pink-50
              opacity-50
              pointer-events-none
            "
                />

                {/* ================= CARD CONTENT ================= */}

                <div className="relative z-10 p-3.5 sm:p-6">
                  {/* ===================================================== */}
                  {/* COLLECTION HEADER                                      */}
                  {/* ===================================================== */}

                  <div className="flex items-center gap-2.5 sm:gap-4">
                    {/* ================= LEFT TEXT ================= */}

                    <div className="flex-1 min-w-0">
                      {/* COLLECTION NUMBER */}

                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                        <span
                          className="
                      w-6
                      h-6
                      sm:w-7
                      sm:h-7
                      rounded-full
                      bg-rose-50
                      text-rose-500
                      flex
                      items-center
                      justify-center
                      text-[9px]
                      sm:text-[10px]
                      font-semibold
                    "
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="
                      text-[8px]
                      sm:text-[9px]
                      uppercase
                      tracking-wider
                      text-rose-400
                      font-medium
                    "
                        >
                          Collection
                        </span>
                      </div>

                      {/* COLLECTION TITLE */}

                      <h3
                        className="
                    text-sm
                    sm:text-lg
                    font-semibold
                    text-slate-900
                    group-hover/card:text-rose-600
                    transition-colors
                    leading-tight
                    sm:leading-snug
                  "
                      >
                        {section.title}
                      </h3>

                      {/* COLLECTION SUBTITLE */}

                      <p
                        className="
                    text-[9px]
                    sm:text-xs
                    text-slate-400
                    leading-relaxed
                    mt-1
                    sm:mt-1.5
                    line-clamp-2
                    sm:line-clamp-3
                  "
                      >
                        {section.subtitle}
                      </p>

                      {/* HOT PICK */}

                      <div className="mt-2 sm:mt-3">
                        <span
                          className="
                      inline-flex
                      items-center
                      gap-1
                      sm:gap-1.5
                      text-[8px]
                      sm:text-[9px]
                      uppercase
                      tracking-wide
                      bg-rose-50
                      text-rose-500
                      border
                      border-rose-100
                      font-semibold
                      px-2
                      sm:px-2.5
                      py-0.5
                      sm:py-1
                      rounded-full
                    "
                        >
                          <span
                            className="
                        w-1
                        h-1
                        sm:w-1.5
                        sm:h-1.5
                        rounded-full
                        bg-rose-400
                      "
                          />
                          Hot Pick
                        </span>
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* COLLECTION IMAGE                                  */}
                    {/* ================================================= */}

                    <div
                      className="
                  relative
                  w-20
                  h-24
                  sm:w-32
                  sm:h-36
                  shrink-0
                  rounded-xl
                  sm:rounded-2xl
                  overflow-hidden
                  bg-rose-50
                  shadow-sm
                "
                    >
                      <img
                        src={collectionImages[idx % collectionImages.length]}
                        alt={section.title}
                        loading="lazy"
                        className="
                    w-full
                    h-full
                    object-cover
                    group-hover/card:scale-105
                    transition-transform
                    duration-700
                  "
                      />

                      {/* IMAGE OVERLAY */}

                      <div
                        className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-rose-900/20
                    via-transparent
                    to-transparent
                  "
                      />
                    </div>
                  </div>

                  {/* ===================================================== */}
                  {/* DIVIDER                                               */}
                  {/* ===================================================== */}

                  <div
                    className="
                flex
                items-center
                gap-1.5
                sm:gap-2
                my-3.5
                sm:my-5
              "
                  >
                    <span className="flex-1 h-px bg-rose-100"></span>

                    <span
                      className="
                  w-1
                  h-1
                  sm:w-1.5
                  sm:h-1.5
                  rounded-full
                  bg-rose-300
                "
                    />

                    <span className="flex-1 h-px bg-rose-100"></span>
                  </div>

                  {/* ===================================================== */}
                  {/* PRODUCTS                                               */}
                  {/* ===================================================== */}

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {section.items.map((item, i) => (
                      <div
                        key={item.id}
                        onClick={() => navigate(`/product-details/${item.id}`)}
                        className="
                    group
                    relative
                    cursor-pointer
                    bg-rose-50/40
                    rounded-xl
                    sm:rounded-2xl
                    p-1.5
                    sm:p-2
                    border
                    border-transparent
                    hover:border-rose-200
                    hover:bg-rose-50/70
                    transition-all
                    duration-300
                  "
                      >
                        {/* ================= PRODUCT IMAGE ================= */}

                        <div
                          className="
                      relative
                      h-24
                      sm:h-32
                      rounded-lg
                      sm:rounded-xl
                      overflow-hidden
                      bg-white
                      mb-1.5
                      sm:mb-2
                      shadow-sm
                    "
                        >
                          {/* RANKING */}

                          <span
                            className="
                        absolute
                        top-1.5
                        left-1.5
                        sm:top-2
                        sm:left-2
                        z-10
                        min-w-5
                        sm:min-w-6
                        h-4
                        sm:h-5
                        px-1
                        sm:px-1.5
                        rounded-full
                        bg-white/95
                        backdrop-blur-sm
                        text-rose-500
                        text-[8px]
                        sm:text-[9px]
                        font-semibold
                        flex
                        items-center
                        justify-center
                        shadow-sm
                      "
                          >
                            #{i + 1}
                          </span>

                          {/* WISHLIST */}

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="
                        absolute
                        top-1.5
                        right-1.5
                        sm:top-2
                        sm:right-2
                        z-10
                        w-6
                        h-6
                        sm:w-7
                        sm:h-7
                        rounded-full
                        bg-white/95
                        backdrop-blur-sm
                        flex
                        items-center
                        justify-center
                        shadow-sm
                        text-slate-400
                        hover:text-rose-500
                        hover:bg-rose-50
                        transition-all
                      "
                          >
                            <Heart
                              className="
                          w-3
                          h-3
                          sm:w-3.5
                          sm:h-3.5
                        "
                            />
                          </button>

                          {/* PRODUCT IMAGE */}

                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-500
                      "
                          />

                          {/* HOVER OVERLAY */}

                          <div
                            className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-rose-900/10
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
                          />
                        </div>

                        {/* ================= PRODUCT NAME ================= */}

                        <h4
                          className="
                      text-[10px]
                      sm:text-xs
                      font-medium
                      text-slate-800
                      line-clamp-1
                      group-hover:text-rose-600
                      transition-colors
                    "
                        >
                          {item.name}
                        </h4>

                        {/* ================= PRICE + RATING ================= */}

                        <div
                          className="
                      flex
                      items-center
                      justify-between
                      mt-1
                      sm:mt-2
                      pt-0.5
                      sm:pt-1
                    "
                        >
                          {/* PRICE */}

                          <p
                            className="
                        text-[10px]
                        sm:text-xs
                        font-semibold
                        text-rose-600
                      "
                          >
                            {item.price}
                          </p>

                          {/* RATING */}

                          <div
                            className="
                        flex
                        items-center
                        gap-0.5
                        text-[8px]
                        sm:text-[9px]
                        text-amber-500
                        font-semibold
                      "
                          >
                            <Star
                              className="
                          w-2.5
                          h-2.5
                          fill-current
                        "
                            />

                            {item.rating}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ===================================================== */}
                  {/* EXPLORE COLLECTION                                    */}
                  {/* ===================================================== */}

                  <button
                    type="button"
                    onClick={() => navigate("/categories")}
                    className="
                mt-3
                sm:mt-5
                pt-3
                sm:pt-4
                border-t
                border-rose-100
                flex
                items-center
                justify-between
                w-full
                cursor-pointer
                group/explore
              "
                  >
                    <span
                      className="
                  text-[10px]
                  sm:text-xs
                  font-medium
                  text-slate-500
                  group-hover/explore:text-rose-600
                  transition-colors
                "
                    >
                      Explore collection
                    </span>

                    <span
                      className="
                  w-6
                  h-6
                  sm:w-7
                  sm:h-7
                  rounded-full
                  bg-rose-50
                  flex
                  items-center
                  justify-center
                  text-rose-500
                  group-hover/explore:bg-rose-500
                  group-hover/explore:text-white
                  transition-all
                  duration-300
                "
                    >
                      <ArrowRight
                        className="
                    w-3
                    h-3
                    sm:w-3.5
                    sm:h-3.5
                    group-hover/explore:translate-x-0.5
                    transition-transform
                  "
                      />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM DECORATION ================= */}

        <div
          className="
      flex
      items-center
      justify-center
      gap-1.5
      sm:gap-2
      mt-6
      sm:mt-8
    "
        >
          <span className="w-1 h-1 rounded-full bg-rose-200"></span>

          <span className="w-7 sm:w-10 h-px bg-rose-100"></span>

          <span className="w-1.5 h-1.5 rounded-full bg-rose-300"></span>

          <span className="w-7 sm:w-10 h-px bg-rose-100"></span>

          <span className="w-1 h-1 rounded-full bg-rose-200"></span>
        </div>
      </section>
    </div>
  );
}
