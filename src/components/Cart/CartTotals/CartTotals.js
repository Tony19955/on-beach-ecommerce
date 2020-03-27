import React from 'react';
import { Link } from 'react-router-dom';
import './CartTotals.css';

function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <section className="cart-totals-container">
        <Link to="/">        
          <button 
            className="clear-cart-btn"
            onClick={() => clearCart()}
          >
            Clear cart
          </button>
        </Link>
        <h5 className="text-title">Sub total: $ {cartSubTotal}</h5>
        <h5 className="text-title">Tax: $ {cartTax}</h5>
        <h5 className="text-title">Cart total: $ {cartTotal}</h5>
      </section>
    </React.Fragment>
  );
}

export default CartTotals;