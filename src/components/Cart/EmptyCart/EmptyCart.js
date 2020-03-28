import React from 'react';
import './EmptyCart.css';

function EmptyCart() {
  return (
    <div className="empty-cart-container">
      <h1 className="empty-cart-title main-title">Your cart <span className="text-bright">is empty</span></h1>
    </div>
  );
}

export default EmptyCart;