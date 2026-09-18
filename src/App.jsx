import React from "react";
import Home from "./page/Home";
import Navber from "./component/Navber";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Added top-0 and z-50 so it stays securely pinned on top */}
      <div className="sticky top-0 z-50">
        <Navber />
      </div>

      <Home />
      <Footer />
    </div>
  );
}

export default App;
