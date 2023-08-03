import { useEffect, useState } from "react";
import "./addToFavourite.scss"
const AddToFavourite=(props)=> {
    const {id}=props
    const [isAdded, setIsAdded]=useState(false)
    const [sendValue, setSendValue]=useState()
    const [isLogged, setIsLogged]=useState(false)
    useEffect(()=> {


    const cookiesString = document.cookie;
    const cookiesArray = cookiesString.split(';');
    const userCookie = cookiesArray.find(cookie => cookie.trim().startsWith('user='));
    if (userCookie) {
        setIsLogged(true)
        let userCookieValue = userCookie.split('=')[1];
        let indexOfcav=userCookieValue.lastIndexOf('}')
        let username;
       
      let  userCookieValueNew=userCookieValue.substring(indexOfcav+1, -userCookieValue.length)
    try {
        const userValue = JSON.parse(decodeURIComponent(userCookieValueNew));
       const username=userValue.name
       setSendValue({name: username, id: id})
      } catch (error) {
        console.error('Ошибка разбора куки user:', error);
      }
    }
},[])
    return (
        <div className="addToFavourite" onClick={()=> {
            if(isAdded && isLogged){
                setIsAdded(false)
                console.log(sendValue)
              
            } 
            if(!isAdded && isLogged){
                setIsAdded(true)
               fetch('http://localhost:5000/addToFav', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sendValue),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                     
                    })
                    .catch((error) => console.error('Error:', error)); 
            }
        }}>
<button className="addToFavouriteItem">{!isAdded ? "Добавить в корзину" : "Убрать из корзины"}</button>
        </div>
    )
}
export default AddToFavourite;