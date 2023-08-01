import "./navigation.scss"
import "./responsiveNavigation.scss"
import { Link } from "react-router-dom"
import Gl from "./log.png"
import { useSelector } from "react-redux"
import { useCallback, useState, useEffect } from "react"

import useDebounce from "../../hooks/debounce.js"
import BurgerMenu from "../burgerMenu/burgerMenu.js"
import { useNavigate } from "react-router-dom"
const Navigation =()=> {
  const navigate = useNavigate();
  const [isAuth, setIsAuth]=useState(false)
  const stateData = useSelector((state) => state);
  const stateOfAuth= stateData.authReducer
  console.log("thhhh" +stateOfAuth)
  const [value, setValue]=useState('')
  const [elems, setElems]=useState()
  const [isClicked, setIsClicked]=useState(false)
  const displayStyles={
    display: isClicked ? "block" : "none"
  }
  useEffect(()=> {
  const cookiesString = document.cookie;
  const cookiesArray = cookiesString.split(';');
  const userCookie = cookiesArray.find(cookie => cookie.trim().startsWith('user='));
 // console.log( (userCookie))
  // Если куки с именем 'user' найден, получаем его значение
  let userValue = null;
  if (userCookie) {
  let userCookieValue = userCookie.split('=')[1];
    let indexOfcav=userCookieValue.lastIndexOf('}')
  let  userCookieValueNew=userCookieValue.substring(indexOfcav+1, -userCookieValue.length)
  //  console.log(userCookieValueNew)
    try {
      userValue = JSON.parse(decodeURIComponent(userCookieValueNew));
      setIsAuth(userValue)
   //   console.log(userValue)
    } catch (error) {
      console.error('Ошибка разбора куки user:', error);
    }
  }
}, [])
  const debouncedSearch=useDebounce(search,500)
function search(query) {
  fetch("http://localhost:5000/tovars")
    .then((response) => response.json())
    .then((json) => {
      if (json !== undefined) {
      //  console.log(json)
        const filteredItems = json.data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
     
        setElems(filteredItems);
        
    
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
              (elems).slice(0, 5).map(item=> (
                  <Link style={{textDecoration: "none", color: "black"}} to={`/tovarInfo/${item.id}`}>
<div className="searchedItem">{item.title} </div>
</Link>
                ))
              )} 
             </div>
            </div>
            <div className="navigationItem">
              {!isAuth.isLogged ? (
                 <div className="navigationItemUser">
                 <Link to="/register" style={{textDecoration: "none"}}>  <button className="signUpBtn">Sign up</button></Link>  
                 <Link to="/login" style={{textDecoration: "none"}}>     <button className="signInBtn">Sign in</button> </Link>
                   </div>
              ) : (
               <div  className="accountNavigation" onClick={()=>{
             if(isClicked){
              setIsClicked(false)
             }
                else {
                  setIsClicked(true)
                }
               }}>{isAuth.name}
               <div className="accountNavigationItems" style={displayStyles}>
               <div className="accountNavigationItem">
              <Link style={{textDecoration: "none", color:" #fff"}} to={`/user/${isAuth.id}`}> Account </Link>
                </div>
                <div className="accountNavigationItem" onClick={()=> {

                  // Функция для удаления всех cookie
function deleteAllCookies() {
  // Получаем все доступные cookie
  var cookies = document.cookie.split(";");

  // Проходимся по каждому cookie и удаляем его, устанавливая дату истечения в прошлое
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}


deleteAllCookies();
navigate(`/`);
                }}>
                Exit
                </div>
               </div>
               </div>
              )}
        

          
            </div>
            <div className="navigationFon">

            </div>
         <div className="burgerItem">
          <BurgerMenu />
         </div>
            </div>
        </nav>
    )
}
export default Navigation