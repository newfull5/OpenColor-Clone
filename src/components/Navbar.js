/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from './logo.png';
import './Navbar.css';

const Navbar = ({value}) => {
  return (
    <main className="nav-template">
      <div className="nav-wrap">
        <img src={logo} />
        <button className="btn-activated">Swatches</button>
        <button>Ingredients</button>
        <button>Instructions</button>
        <button>Downloads</button>
        <button>GitHub</button>
      </div>
    </main>
  );
};

export default Navbar;