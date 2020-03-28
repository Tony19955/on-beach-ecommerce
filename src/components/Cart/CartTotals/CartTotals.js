import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from '../PayPalButton/PayPalButton';
import './CartTotals.css';

function CartTotals({ value, history }) {
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
        <h5 className="cart-totals-text text-title">Sub total: $ {cartSubTotal}</h5>
        <h5 className="cart-totals-text text-title">Tax: $ {cartTax}</h5>
        <h5 className="cart-totals-text text-title">Cart total: $ {cartTotal}</h5>
        <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
      </section>
    </React.Fragment>
  );
}

export default CartTotals;