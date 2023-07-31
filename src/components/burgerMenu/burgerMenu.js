import React, { useState } from 'react';
import "./burgerMenu.scss"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from 'react';
const BurgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

 
  useEffect(() => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
      icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
      });
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="burger-icon icon nav-icon-3" onClick={()=>{
        toggleMenu()
        }}>
        <span></span>
        <span></span>
        <span></span>



  </button> 
   
      <nav className={`burger-menu ${isOpen ? 'burger-menu-open' : ''}`}>
        <ul>
        
          <li>
            <Link to="/catalogue">Catalogue</Link>
          </li>
          <li>
          <Link to="/products">Products</Link>
          </li>
          <li>
          <Link to="/register">Sign up</Link>
          </li>
          <li>
          <Link to="/login">Sign in</Link>
          </li>
        </ul>
  </nav> 
    </div>
  );
};

export default BurgerMenu;