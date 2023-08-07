import React, { useState } from 'react';
import "./burgerMenu.scss"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { isAuth, deleteAllCookies } from '../../redux/reducers/isLogged.js';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

const BurgerMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
const dispatch=useDispatch()
const username = useSelector((state) => state.addToFavouriteReducer.name);
const isLogged = useSelector((state) => state.addToFavouriteReducer.isLogged);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(isAuth());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [username, dispatch]);  
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
  
const fetchData = async () => {
  try {
    await dispatch(isAuth());
  } catch (error) {
    console.error(error);
  }
};
  const exitFunction=()=> {
    dispatch(deleteAllCookies("user"));
  navigate(`/`);
  fetchData();
  }
  return (
    <div className='burgerWrapper'>
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
          {!isLogged?  (
<>
          <li>
          <Link to="/register">Sign up</Link>
          </li>
          <li>
          <Link to="/login">Sign in</Link>
          </li>
          </>
          ) :
          (
           <>
            <li>
          <Link to="/register">{username}</Link>
          </li>
          <li>
          <Link to="/login" onClick={()=> {
            exitFunction()
          }}>Exit</Link>
          </li>
           </>
          )
          }
        </ul>
  </nav> 
    </div>
  );
};

export default BurgerMenu;