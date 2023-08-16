import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import {BrowserRouter } from"react-router-dom"
import { ErrorBoundary } from './components/errorBoundary/errorBoundary.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <BrowserRouter>
   {/* <ErrorBoundary> */}
        
    <App />
  {/*  </ErrorBoundary> */}
    </BrowserRouter>
    </Provider>

);





//npm i react-error-boundary
