import "./login.css"
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
                      const data = JSON.stringify({"email": form.email, "password": form.password });
                      console.log(data)
                      fetch('http://localhost:5000/log', { 
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: data
                      })
                        .then(response => response.json())
                        .then(responseData => {
                          console.log(responseData);
                          if(responseData=="logged"){
                            navigate('/account');
                          }
                        })
                        .catch(error => {
                          console.error('Ошибка:', error);
                        });
                    }
    return (
        <div className="login">
            <h1>Логин</h1>
            <input
            name="email"
            onChange={changeHandler}
             type="text" 
             className="loginForm"
              placeholder="type email" />
            <input
            name="password"
            onChange={changeHandler}
             type="password"
              className="passwordForm"
               placeholder="type password" />
            <button 

onClick={() => {
  sendRequest()
   /* const data = JSON.stringify({"email": form.email, "password": form.password });
    console.log(data)
    fetch('http://localhost:5000/log', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        if(responseData=="logged"){
          navigate('/account');
        }
      })
      .catch(error => {
        console.error('Ошибка:', error);
      }); */
  }}

            type="button" 
            className="continue">continue</button>
            <Link to="/" style={{textDecoration: "none", color: "#fff"}}>  or register </Link>
        </div>
    )
}
export default Login 