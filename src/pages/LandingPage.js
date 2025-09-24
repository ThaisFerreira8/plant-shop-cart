import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">PlantShop</h1>
          <p className="company-description">
            Transforme sua casa em um verdadeiro jardim com nossas plantas domésticas cuidadosamente selecionadas. 
            Oferecemos uma variedade única de plantas tropicais, suculentas e flores que trazem vida, 
            cor e bem-estar para qualquer ambiente. Cada planta é escolhida com carinho para garantir 
            que você tenha o melhor em qualidade e beleza natural.
          </p>
          <Link to="/products" className="get-started-btn">
            Começar Compras
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
