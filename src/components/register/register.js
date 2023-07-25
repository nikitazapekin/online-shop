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
         {/*   <button
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
            className="continue registrationItem">sign up</button> */}


<button
  onClick={() => {
    sendRequest();
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
            navigate('/user');
          });
        } else {
          setIsLogged(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
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
