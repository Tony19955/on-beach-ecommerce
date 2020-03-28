import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import './Modal.css';

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (              
              <div className="modal-container">
                <div className="modal-content">
                  <h3>Item added to the cart</h3>                  
                  <img src={img} alt="product" className="modal-img" />
                  <h5 className="modal-title">{title}</h5>
                  <h5 className="modal-price">Price: ${price}</h5>
                  <div className="modal-btns">
                    <Link to='/'>
                      <button 
                        className="modal-continue-btn back-btn"
                        onClick={() => closeModal()}
                      > Continue shopping
                      </button>
                    </Link>
                    <Link to='/cart'>
                      <button 
                        className="modal-go-to-cart-btn add-btn"
                        onClick={() => closeModal()}
                      > Go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>             
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;