import "./register.scss"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useRef, useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/reducers/registerReducer.js";


let lengthOfLogs=0;

const Register =()=> {
  const dispatch = useDispatch();

  const navigate = useNavigate();
//const dispatch=useDispatch();

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
    
  }} 
  type="button"
  className="continue registrationItem"
>
  sign up
</button>;

        <Link to="/login" style={{textDecoration: "none", color: "#fff"}} ><h2 className="orLogin registrationItem">  or Login
        </h2>
           </Link>


 
     {/* <button onClick={() => {
        console.log(count)
     dispatch(increment())}}>инкримент</button> */}
        <div className="registerFon"></div>
        </div>
    )
}
export default Register 
