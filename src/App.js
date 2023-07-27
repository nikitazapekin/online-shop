import logo from './logo.svg';
import './App.css';
//import Login from './components/login/login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationWebPage from './pages/registrationWebPage/registrationWebPage.js';
import WelcomeUser from './components/welcomeUser/welcomeUser.js';
import Homepage from './pages/homepage/homepage.js';
import LoginPage from './pages/loginPage/loginPage.js';
import CataloguePage from './pages/cataloguePage/cataloguePage.js';

import {  useSearchParams } from 'react-router-dom';
import CataloguePageItem from './pages/cataloguePageItem/cataloguePageItem.js';
import AddPurchase from './components/addPurchase/addPurchase.js';
import TovarInfoPage from './pages/tovarInfoPage/tovarInfoPage.js';
import ProductsPage from './pages/productsPage/productsPage.js';
import UserPage from './pages/userPage/userPage.js';
function App() {


  return (
    <div className="App">
  <Routes >
  <Route path="/" element={ <Homepage />} />
<Route path="/register" element={ <RegistrationWebPage />} />
<Route path="/login" element={ <LoginPage />} />
<Route path="/user/:id" element={ <UserPage />} />
<Route path="/account/:id" element={ <UserPage />} />
<Route path="/catalogue" element={ <CataloguePage />} />
<Route path="/catalogue/:id" element={<CataloguePageItem />} /> 
<Route path="/add" element={<AddPurchase />} />
<Route path="/tovarInfo/:id" element={ <TovarInfoPage />} />
<Route path="/products" element={ <ProductsPage />} />
</Routes>

    </div>
  );
}

export default App;



/*
import React from "react";
import { LinksPage } from "./pages/LinksPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { Routes } from 'react-router-dom';
import { AuthPage } from "./pages/AuthPage";

const postData = {
 "me": 'ddvsdsvdvsdvsvds', // Replace this with the actual data you want to send
};

fetch('http://localhost:5000/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // This will log the response from the server
  })
  .catch((error) => {
    console.error('Error:', error);
  });



export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/links" element={<LinksPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      
        </Routes>
        );
      }
    
      return (
        <Routes>
          <Route path="/" element={<AuthPage />} />
        
        </Routes>
      );
    };
    
    function App() {
      const routes = useRoutes(true);
    
      return (
        <Router>
          <div className="container">
            {routes}
          </div>
        </Router>
      );
    }
    
    export default App;
    */