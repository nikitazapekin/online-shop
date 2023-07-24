import "./login.css"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
//import crypto from "crypto"
let lengthOfLogs=0;

const Register =()=> {
  const navigate = useNavigate();
const dispatch=useDispatch();

 const [isLogged, setIsLogged]=useState(false)
 const [form, setForm]= useState({
  email: '',
  password: ''
      })

      function decrypt(encryptedText) {
        const decipher = crypto.createDecipher('aes-256-cbc', 'mySecretKey');
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
      }
      const sendRequest=()=> {
      /*  fetch('http://localhost:5000/posts')
        .then(response => response.json())
        .then(json =>{

          let isReggistered=false;
      
          console.log(json)
      console.log(typeof json)
        lengthOfLogs=json.length
    
         Object.values(json).forEach((item,index)=> {
          console.log(item.email+":"+ form.email)
            if (item.email==form.email){
              isReggistered=true
            console.log(item.email)
            }
          })
          console.log(isReggistered)
          console.log(json)
      
          if(isReggistered==false){
      setIsLogged(false) 
            let data=JSON.stringify({"username": form.username, "email": form.email, "password": form.password, "id": lengthOfLogs})
           dispatch({type: "USER", payload: data})
            fetch('http://localhost:5000', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: data
            })
       
            navigate('/user');
          } else {
      setIsLogged(true)
          }
        }
          ) */
      }
      const changeHandler=(event)=> {
        setForm({...form, [event.target.name]: event.target.value})
            }
    return (
        <div className="login">
            <h1>Регистрация</h1>
         
            <input 
               name="email"
               onChange={changeHandler}
            type="email"
             className="loginForm" 
            placeholder="type email" />
            <input
             name="password"
               onChange={changeHandler}
             type="password"
              className="passwordForm"
               placeholder="type password" />
                  <input 
                onChange={changeHandler}
            type="text"
             className="username"
              name="username"
               placeholder="Enter username"
               />
               <div style={{display: !isLogged ? "none" : "block"}} className="userIsLogged">Пользователь зарегистрирован</div>
            <button
                onClick={()=> {
                  sendRequest()
                  fetch('http://localhost:5000/posts')
                  .then(response => response.json())
                  .then(json =>{
                    let isReggistered=false;
               
                    console.log(json)
              
                  lengthOfLogs=json.length
                    console.log(lengthOfLogs)
                    Object.values(json).forEach((item,index)=> {
                      console.log((item.email)+":"+ form.email)
                      if ((item.email)==form.email){
                        isReggistered=true
                      console.log(item.email)
                      }
                    })
                    console.log(isReggistered)
                    console.log(json)

                    if(isReggistered==false){
                setIsLogged(false) 
                      let data=JSON.stringify({"username": form.username, "email": form.email, "password": form.password, "id": lengthOfLogs})
                     dispatch({type: "USER", payload: data})
                      fetch('http://localhost:5000', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: data
                      })
                 
                      navigate('/user');
                    } else {
setIsLogged(true)
                    }
                  }
                    )

                }
              } 
             type="button" 
             className="continue">sign up</button>
        <Link to="/login" style={{textDecoration: "none", color: "#fff"}}>  or Login </Link>
        </div>
    )
}
export default Register 
