
import './App.css';
import AppRoutes from './routes/appRoutes.js';
import { isAuthFunc } from './functions/authFunctions.js';
import { useState } from 'react';
function App() {
  const [user, setUser] =useState((isAuthFunc()).isAuth)
  console.log("RE "+(isAuthFunc()).isAuth)
  return (
    <div className="App">
      <AppRoutes setUser={setUser} user={user} />
    </div>
  );
}

export default App;


