import "./register.scss"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react"
import { useDispatch } from "react-redux";


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
    const data = JSON.stringify({"email": form.email, "password": form.password, "username": form.username });
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
        }
      })
/*
    fetch('http://localhost:5000/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        let isRegistered = false;
        console.log(json);
        const lengthOfLogs = json.length;
        console.log(lengthOfLogs);
        Object.values(json).forEach((item, index) => {
          console.log(item.email + ':' + form.email);
          if (item.email === form.email) {
            isRegistered = true;
            console.log(item.email);
          }
        });
      

        if (!isRegistered) {
          setIsLogged(false);
          const data = JSON.stringify({
            username: form.username,
            email: form.email,
            password: form.password,
            id: lengthOfLogs,
          });
          dispatch({ type: 'USER', payload: data });
          fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: data,
          }).then(() => {
            navigate(`/user/${lengthOfLogs}`);
          });
        } else {
          setIsLogged(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      }); */
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
