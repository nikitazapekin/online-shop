import "./register.scss"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useRef, useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";


let lengthOfLogs=0;

const Register =()=> {

  const navigate = useNavigate();
const dispatch=useDispatch();

 const [isLogged, setIsLogged]=useState(false)
 const [form, setForm]= useState({
  email: '',
  password: ''
      })

  
    
      const changeHandler=(event)=> {
        setForm({...form, [event.target.name]: event.target.value})
            }



    return (
        <div className="registerFormPage">
            <h1>Регистрация</h1>
         
            <input 
               name="email"
               onChange={changeHandler}
            type="email"
             className="registerForm registrationItem" 
            placeholder="type email" />
            <input
             name="password"
               onChange={changeHandler}
             type="password"
              className="registerPasswordForm registrationItem"
               placeholder="type password" />
                  <input 
                onChange={changeHandler}
            type="text"
             className="username registrationItem"
              name="username"
               placeholder="Enter username"
               />
               <div style={{display: !isLogged ? "none" : "block"}} className="registerUserIsLogged">Пользователь зарегистрирован</div>


<button
  onClick={() => {
    const data = JSON.stringify({"email": form.email, "password": form.password, "username": form.username, "date": new Date() });
    fetch('http://localhost:5000/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        if(responseData!="is registered"){
          navigate(`/user/${responseData.id}`);
          let expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000)); 
//document.cookie = "имя=cok;expires=" + expirationDate.toUTCString()+";HttpOnly";
document.cookie = `user=${JSON.stringify({name: form.username, isLogged: true, id: responseData.id})}expires=` + expirationDate.toUTCString()//+";HttpOnly";  
        }
      })


// Срок годности до конца текущего сеанса (закрытие браузера)
//document.cookie = "имя=значение;expires=0";

// Срок годности на определенное количество секунд
   
/*
const myObject = { name: "Nikita" };
const myObjectJson = JSON.stringify(myObject);

let expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000));

// Устанавливаем cookie с атрибутами и значением JSON (без HttpOnly)
document.cookie = `имя=${myObjectJson};expires=${expirationDate.toUTCString()}`;

// Получаем cookie и преобразуем его значение обратно в объект
function getCookieValueAsObject(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(";").shift();
    return JSON.parse(cookieValue);
  }
}

const cookieObject = getCookieValueAsObject("имя");
console.log(cookieObject); // Выведет { name: "Nikita" }
 */




   
  }} 
  type="button"
  className="continue registrationItem"
>
  sign up
</button>;

        <Link to="/login" style={{textDecoration: "none", color: "#fff"}} ><h2 className="orLogin registrationItem">  or Login
        </h2>
           </Link>
        <div className="registerFon"></div>
        </div>
    )
}
export default Register 
