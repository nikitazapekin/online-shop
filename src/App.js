
import './App.css';
import AppRoutes from './routes/appRoutes.js';
import { isAuthFunc } from './functions/authFunctions.js';
function App() {

  const user =(isAuthFunc()).isAuth
  return (
    <div className="App">
      <AppRoutes user={user} />
    </div>
  );
}

export default App;


