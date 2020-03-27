import React, { Component } from 'react';
import './Default.css';

class Default extends Component {
  render() {
    return (
      <div className="default-container text-title">
        <h1>404</h1>
        <h1>Error</h1>
        <h2>Page not found</h2>
        <h3>The requested URL
          <span className="text-danger">
            {this.props.location.pathname}
          </span> {" "}
          was not found
        </h3>
      </div>
    );
  }
}

export default Default;