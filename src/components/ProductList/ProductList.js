import React, { Component } from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';
import { ProductConsumer } from '../../context';
import './ProductList.css';

export default class ProductList extends Component {
  render() {    
    return (
      <React.Fragment>
        <section className="product-list">
          <Title name="Our" title="Products" />
          <section className="products-container">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                })
              }}
            </ProductConsumer>
          </section>
        </section>
      </React.Fragment>      
    )
  }
}