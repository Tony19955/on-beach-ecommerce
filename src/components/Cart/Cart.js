import React, { Component } from 'react';
import Title from '../Title/Title';
import EmptyCart from './EmptyCart/EmptyCart';
import CartList from './CartList/CartList';
import CartTotals from './CartTotals/CartTotals';
import { ProductConsumer } from '../../context';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <section className="cart-container">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />                  
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>        
      </section>
    );
  }
}

export default Cart;