// src/Hero.js
import React from 'react';
import './Hero.css';

const Hero = ({ scrollToFeaturedProducts }) => {
  return (
    <section className="hero">
      <h1>Discover Sustainable Products for a Greener Future</h1>
      <p>Shop eco-friendly products, learn sustainable living practices, and reduce your environmental footprint.</p>
      <button onClick={scrollToFeaturedProducts}>Shop Now</button>
    </section>
  );
};

export default Hero;