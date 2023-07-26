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

function App() {


  return (
    <div className="App">
  <Routes >
  <Route path="/" element={ <Homepage />} />
<Route path="/register" element={ <RegistrationWebPage />} />
<Route path="/login" element={ <LoginPage />} />
<Route path="/user" element={ <WelcomeUser />} />
<Route path="/catalogue" element={ <CataloguePage />} />
<Route path="/catalogue/:id" element={<CataloguePageItem />} /> 
<Route path="/add" element={<AddPurchase />} />
</Routes>

    </div>
  );
}

export default App;
