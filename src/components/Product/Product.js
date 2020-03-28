import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <section className="product-container">
        <ProductConsumer>
          {(value) => (
            <React.Fragment>
              <div className="img-container" onClick={() => 
                value.handleDetail(id)}>
                <Link to="/details">
                  <img src={img} alt="product" className="product-img" />
                </Link>

                <button 
                  className="add-to-cart-btn" 
                  disabled={inCart ? true : false} 
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                  {inCart 
                  ? 
                  (<p className="cart-btn-text" disabled>In Cart</p>) 
                  : 
                  (<i className="fas fa-cart-plus"/>)}
                </button>
              </div>

              <p className="product-title main-text">{title}</p>
              <h5 className="product-price main-text">${price}</h5>
            </React.Fragment>
          )}          
        </ProductConsumer>
      </section>
    );
  }
}

//Checking if product objects are valid
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;