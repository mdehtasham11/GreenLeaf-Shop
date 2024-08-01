import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const products = [
  { 
    id: 1, 
    name: 'Eco-Friendly Toothbrush', 
    description: 'A biodegradable toothbrush made from bamboo.', 
    image: 'https://images.pexels.com/photos/4202388/pexels-photo-4202388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
  },
  { 
    id: 2, 
    name: 'Reusable Shopping Bags', 
    description: 'Durable and reusable shopping bags to reduce plastic waste.', 
    image: 'https://images.pexels.com/photos/3737681/pexels-photo-3737681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  
  },
  { 
    id: 3, 
    name: 'Organic Cotton T-Shirts', 
    description: 'Comfortable and eco-friendly t-shirts made from organic cotton.', 
    image: 'https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg' 
  },
];

const FeaturedProducts = forwardRef((props, ref) => {
  return (
    <section className="featured-products" ref={ref}>
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});

export default FeaturedProducts;
