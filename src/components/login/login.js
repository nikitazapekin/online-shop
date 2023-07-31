import "./login.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
const Login =()=> {
  const navigate = useNavigate();
    const [form, setForm]= useState({
        email: '',
        password: '',
            })
            const changeHandler=(event)=> {
                setForm({...form, [event.target.name]: event.target.value})
                    }
                    const sendRequest=()=> {
                     
                    }
    return (
        <div className="login">
         <h1>Логин</h1>
            <input
            name="email"
            onChange={changeHandler}
             type="text" 
             className="loginForm registrationItem"
              placeholder="type email" />
            <input
            name="password"
            onChange={changeHandler}
             type="password"
              className="passwordForm registrationItem"
               placeholder="type password" />
            <button 

onClick={() => {
  const data = JSON.stringify({"email": form.email, "password": form.password });
  fetch('http://localhost:5000/login', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      if(responseData!="is non registered"){
       // navigate(`/user/${responseData.id}`);





        
  const data = JSON.stringify({"id": responseData.id});
  

 
  fetch('http://localhost:5000/userId', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
    .then(response => response.json())
    .then(responseData => {
     // setDataUser(responseData)
      console.log(responseData);
      let expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000)); 
      //document.cookie = "имя=cok;expires=" + expirationDate.toUTCString()+";HttpOnly";
      document.cookie = `user=${JSON.stringify({name: responseData.username, isLogged: true, id: responseData.id})}expires=` + expirationDate.toUTCString()
      navigate(`/user/${responseData.id}`);
    }) .catch((error) => {
      console.error('Error fetching data:', error);
    }); 

      
      }
    }) .catch((error) => {
      console.error('Error fetching data:', error);
    });
  
  }}

            type="button" 
            className="continue registrationItem">continue</button>
<Link to={`/register`} style={{textDecoration: "none", color: "#fff"}}><h2 className="registrationItem">  or register</h2> </Link> 
<div className="registerrFon"></div>  
        </div>
    )
}
export default Login 
