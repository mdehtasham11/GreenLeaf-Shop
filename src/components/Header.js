import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        GreenLeaf Shop
        <img 
          src={`${process.env.PUBLIC_URL}/leaf1.png`} 
          alt="Leaf Logo" 
          className="logo-img" 
        />
      </div>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
