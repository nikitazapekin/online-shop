import React, { useState } from 'react';
import "./burgerMenu.scss"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { isAuthFunc } from '../../functions/authFunctions.js';
import { exitFromAccount } from '../../functions/authFunctions.js';
const BurgerMenu = () => {
  const navigate = useNavigate();
const [isLoggedUser, setIsLoggedUser]=useState()
  useEffect(()=> {
    try{
      setIsLoggedUser(isAuthFunc())
    } catch(err){
      console.log(err)
    }
  }, [])
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
      icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
      });
    });
    return () => {
      icons.forEach(icon => {
        icon.removeEventListener('click', (event) => {
          icon.classList.toggle("open");
        });
      });
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick=()=> {
    setIsLoggedUser(exitFromAccount())
    exitFromAccount()
    navigate("/")
  }
  return isLoggedUser !== undefined && (
    <div className='burgerWrapper'>
      <button className="burger-icon icon nav-icon-3" onClick={toggleMenu}>
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
          {!isLoggedUser.isAuth ? (
            <>
              <li>
                <Link to="/register">Sign up</Link>
              </li>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile">{isLoggedUser.user}</Link>
              </li>
              <li>
                <Link to="/logout" onClick={handleClick}>Logout</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;