import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.svg";
import logoMini from "../../surfboard.svg"
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return(
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="store" className="navbar-logo"/>
          <img src={logoMini} alt="store" className="navbar-logo-mini"/>
        </Link>        
        <Link to="/" className="products-link">
          <button className="navbar-btn">Products</button>             
        </Link>          
        <Link to="/cart" className="cart-link">
          <button className="navbar-btn">
            <i className="fas fa-cart-plus" />
            Cart
          </button>
        </Link>        
      </nav>
    )
  }
}