import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import TShirts from "./pages/TShirts";
import Toothbrush from "./pages/Toothbrush";
import Shoppingbags from "./pages/ShoppingBags";

import "./App.css";

function App() {
  const featuredProductsRef = useRef(null);
  const scrollToFeaturedProducts = () => {
    featuredProductsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent scrollToFeaturedProducts={scrollToFeaturedProducts} featuredProductsRef={featuredProductsRef} />
        <Footer />
      </div>
    </Router>
  );
}

function MainContent({ scrollToFeaturedProducts, featuredProductsRef }) {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Hero scrollToFeaturedProducts={scrollToFeaturedProducts} />
          <FeaturedProducts ref={featuredProductsRef} />
        </>
      } />
      <Route path="/product/3" element={<TShirts />} />
      <Route path="/product/2" element={<Shoppingbags />} />
      <Route path="/product/1" element={<Toothbrush />} />

    </Routes>
  );
}

export default App;
