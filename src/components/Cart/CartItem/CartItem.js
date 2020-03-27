import React from 'react';
import './CartItem.css';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cartitem-container">
      <img src={img} alt="product" className="cartitem-img" />
      <p className="cartitem-title">{title}</p>
      <p className="cartitem-price">$ {price}</p>
      <div className="cartitem-dec-inc-btns">
        <button 
          className="btn-black"
          onClick={() => decrement(id)}
        >-
        </button>
        <button className="btn-black">{count}</button>
        <button
          className="btn-black"
          onClick={() => increment(id)}
        >+
        </button>
      </div>
      <div className="cart-icon ">
        <i className="fas fa-trash" onClick={() => removeItem(id)} />
      </div>
      <p className="cartitem-item-total"><strong>Item total: $ {total}</strong></p>
    </div>
  )
}
