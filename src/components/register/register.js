import "./register.scss"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useRef, useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../functions/authFunctions.js';

const Register =()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const [isLogged, setIsLogged]=useState(false)
 const [isInvalid, setIsInvalid]=useState(false)
 const [form, setForm]= useState({
  email: '',
  password: ''
      })
      const changeHandler=(event)=> {
        setForm({...form, [event.target.name]: event.target.value})
            }
          const register = () => {
            const data = JSON.stringify({
              "email": form.email,
              "password": form.password,
              "username": form.username,
              "date": new Date()
            });
          
            try {
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
                  if (responseData === "is registered") {
                    setIsLogged(true);
                  }
                  if (responseData === "is invalid") {
                    setIsInvalid(true);
                  }
                  if (responseData !== "is registered" && responseData !== "is invalid") {
                    navigate(`/user/${responseData.id}`);
          login(form.username, responseData.id)
                  }
                });
            } catch (error) {
              console.error('An error occurred:', error);
  
            }
          }
          
    return (
        <div className="registerFormPage">
            <h1>Регистрация</h1>
         <form className="registerFormElem">
            <input 
            required
               name="email"
               onChange={changeHandler}
            type="email"
             className="registerForm registrationItem" 
            placeholder="type email" />
            <input
            required
             name="password"
               onChange={changeHandler}
             type="password"
              className="registerPasswordForm registrationItem"
               placeholder="type password" />
                  <input 
                  required
                onChange={changeHandler}
            type="text"
             className="username registrationItem"
              name="username"
               placeholder="Enter username"
               />
               <button
  onClick={(event) => {
    event.preventDefault()
  register()
  }} 
  type="submit"
  className="continue registrationItem"
>
  sign up
</button>;
               </form>
               <div style={{display: !isLogged ? "none" : "block"}} 
               className="registerUserIsLogged">
                Пользователь зарегистрирован</div>
              <div style={{display: !isInvalid ? "none" : "block"}} 
               className="registerUserIsLogged">
Неверная почта</div> 
        <Link to="/login" style={{textDecoration: "none", color: "#fff"}} >
          <h2 className="orLogin registrationItem">  
        or Login
        </h2>
           </Link>

        <div className="registerFon"></div>
        </div>
    )
}
export default Register 
