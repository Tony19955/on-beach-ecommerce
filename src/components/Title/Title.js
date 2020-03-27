import React from 'react';
import './Title.css';

function Title({name, title}) {
  return (
    <div className="title-container text-title">
      <h1>{name} <strong className="text-pink">{title}</strong></h1>      
    </div>
  );
}

export default Title;