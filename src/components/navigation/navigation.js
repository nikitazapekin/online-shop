import "./navigation.scss"
import { Link } from "react-router-dom"
import Gl from "./log.png"

import { useCallback, useState } from "react"

import useDebounce from "../../hooks/debounce.js"
const Navigation =()=> {
  const [value, setValue]=useState('')
  const [elems, setElems]=useState()
  let elemsCopy;
  const debouncedSearch=useDebounce(search,500)
function search(query) {
  fetch("http://localhost:5000/tovars")
    .then((response) => response.json())
    .then((json) => {
      if (json !== undefined) {
        const filteredItems = json.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setElems(filteredItems);
      //  elemsCopy=filteredItems
      //  elemsCopy=elemsCopy.slice(0, 5)
      }
    });
}

const onChange =(e)=> {
  setValue(e.target.value)
 debouncedSearch(e.target.value)
}

    return (
        <nav className="navigation">
            <div className="navigationWrapper">
        <div className="navigationItem">
         <Link to="/" style={{textDecoration: "none"}}> <img className="logoOfWebPage" alt="logo" src={Gl}  /></Link>  
            </div> 
            <div className="navigationItem">
       <Link style={{textDecoration: "none", color: "#fff"}} to="/catalogue"> Catalogue
       </Link> 
            </div>
            <div className="navigationItem">
            <Link style={{textDecoration: "none", color: "#fff"}} to="/products"> Products </Link> 
            </div>
            <div className="navigationItem">
               <input type="search" className="searchNavigation" placeholder="type smth" value={value} onChange={onChange} />
             <div className="searchedItems">
              {elems!=undefined && value.length!==0 && (
                elems.slice(0, 5).map(item=> (
                  <Link style={{textDecoration: "none", color: "black"}} to={`/tovarInfo/${item.id}`}>
<div className="searchedItem">{item.title} </div>
</Link>
                ))
              )}
             </div>
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