import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart 
} from '../store/cartSlice';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);

  const handleIncreaseQuantity = (plantId) => {
    dispatch(increaseQuantity(plantId));
  };

  const handleDecreaseQuantity = (plantId) => {
    dispatch(decreaseQuantity(plantId));
  };

  const handleRemoveItem = (plantId) => {
    dispatch(removeFromCart(plantId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    alert('Em breve! Funcionalidade de checkout será implementada.');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">Carrinho de Compras</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione algumas plantas incríveis ao seu carrinho!</p>
            <Link to="/products" className="continue-shopping-btn">
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Carrinho de Compras</h1>
        
        <div className="cart-summary">
          <div className="summary-item">
            <span>Total de plantas:</span>
            <span className="summary-value">{totalItems}</span>
          </div>
          <div className="summary-item total">
            <span>Custo total:</span>
            <span className="summary-value">R$ {totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-price">R$ {item.price.toFixed(2)} cada</p>
              </div>

              <div className="item-controls">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                
                <div className="item-total">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                  title="Remover item"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <button 
            className="clear-cart-btn"
            onClick={handleClearCart}
          >
            Limpar Carrinho
          </button>
          
          <div className="checkout-section">
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Finalizar Compra
            </button>
            <Link to="/products" className="continue-shopping-btn">
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
