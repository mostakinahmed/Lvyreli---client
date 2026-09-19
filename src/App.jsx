import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Navber from "./component/Navber";
import Footer from "./component/Footer";
import ProductDetails from "./page/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FDF6F0] flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-50">
          <Navber />
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Pages */}
            <Route path="/product-details" element={<ProductDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
