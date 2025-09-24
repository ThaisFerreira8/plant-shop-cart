import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { PLANTS_DATA, CATEGORIES } from '../data/plants';
import './ProductsPage.css';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredPlants = selectedCategory === 'Todas' 
    ? PLANTS_DATA 
    : PLANTS_DATA.filter(plant => plant.category === selectedCategory);

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">Nossas Plantas</h1>
        
        <div className="category-filter">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="plants-grid">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="plant-card">
              <div className="plant-image">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-category">{plant.category}</p>
                <p className="plant-description">{plant.description}</p>
                <div className="plant-price">R$ {plant.price.toFixed(2)}</div>
                <button
                  className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'No Carrinho' : 'Adicionar ao Carrinho'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
