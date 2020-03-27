import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import './Details.css';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="product-detail-container">

              <div className="product-detail-img-container">
                <img src={img} alt="product-photo" className="product-detail-img" />
              </div>

              <div className="product-detail-details-container">
                <h1 className="product-detail-title text-title">{title}</h1>
                <p className="product-detail-info">{info}</p>
                <div className="product-detail-left-container">
                  <h4 className="product-detail-company">
                    <span className="text-title text-bright">Made by: </span>{company}
                  </h4>
                  <span className="product-detail-price">
                    <span className="text-title text-bright">Price: </span>${price}
                  </span>
                </div>
                <div className="product-detail-btns">
                  <Link to="/">
                    <button className="product-detail-back-btn">Back to products</button>
                  </Link>                 
                  <button 
                    disabled={inCart ? true : false} 
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    className="product-detail-add-to-cart-btn">
                    {inCart ? "In Cart" : "Add to Cart"}
                  </button>                                   
                </div>
              </div>

            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;