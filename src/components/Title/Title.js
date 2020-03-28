import React from 'react';
import './Title.css';

function Title({name, title}) {
  return (
    <div className="title-container main-title">
      <h1>{name} <strong className="text-bright">{title}</strong></h1>      
    </div>
  );
}

export default Title;