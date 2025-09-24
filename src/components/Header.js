import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🌱 PlantShop</h1>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
          >
            Produtos
          </Link>
          <Link 
            to="/cart" 
            className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
