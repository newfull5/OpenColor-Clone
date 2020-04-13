import React from 'react';
import './Navbar.css';

const Navbar = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="nav-wrap">
        <div className="logo-img">
          <img src='./logo.png'></img>
        </div>
        <button className="nav-Swatches">
          Swatches
        </button>
        <button className="nav-Ingredients">
          Ingredients
        </button>
        <button className="nav-Instructions">
          Instructions
        </button>
        <button className="nav-Downloads">
          Downloads
        </button>
        <button className="nav-GitHub">
          GitHub
        </button>
      </div>
    </main>
  );
};

export default Navbar;