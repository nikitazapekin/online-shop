/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import {BrowserRouter } from"react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>

);

*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/errorBoundary/errorBoundary.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

try {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
} catch (error) {
  console.error('An error occurred during rendering:', error);
  <Provider store={store}>
  <BrowserRouter>
   <ErrorBoundary />
  </BrowserRouter>
</Provider>
}
