import logo from './logo.svg';
import './App.css';
import Login from './components/login/login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register/register.js';
import WelcomeUser from './components/welcomeUser/welcomeUser.js';
import Homepage from './pages/homepage/homepage.js';
function App() {


  return (
    <div className="App">
  <Routes >
  <Route path="/" element={ <Homepage />} />
<Route path="/register" element={ <Register />} />
<Route path="/login" element={ <Login />} />
<Route path="/user" element={ <WelcomeUser />} />
</Routes>

    </div>
  );
}

export default App;
