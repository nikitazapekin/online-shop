import "./navigation.scss"
import { Link } from "react-router-dom"
import Gl from "./log.png"
const Navigation =()=> {
    return (
        <nav className="navigation">
            <div className="navigationWrapper">
        <div className="navigationItem">
         <Link to="/" style={{textDecoration: "none"}}> <img className="logoOfWebPage" alt="logo" src={Gl}  /></Link>  
            </div> 
         
            <div className="navigationItem">
       <Link style={{textDecoration: "none", color: "#fff"}} to="/catalogue">      Catalogue
       </Link> 
            </div>
            <div className="navigationItem">
               <input type="search" className="searchNavigation" placeholder="type smth" />
            </div>
            <div className="navigationItem">
              <div className="navigationItemUser">
            <Link to="/register" style={{textDecoration: "none"}}>  <button className="signUpBtn">Sign up</button></Link>  
            <Link to="/login" style={{textDecoration: "none"}}>     <button className="signInBtn">Sign in</button> </Link>
              </div>

          
            </div>
            <div className="navigationFon">

            </div>
            </div>
        </nav>
    )
}
export default Navigation