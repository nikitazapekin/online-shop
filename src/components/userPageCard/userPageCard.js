import { useParams } from "react-router"
import "./userPageCard.scss"
import { useState, useEffect } from "react"
import AddLogoOfUser from "../addLogoOfUser/addLogoOfUser.js"
const UserPageCard =()=> {
  const [dataUser, setDataUser]=useState()
  const {id} =useParams()

  const data = JSON.stringify({"id": id});
  useEffect(()=> {

 
  fetch('http://localhost:5000/userId', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
    .then(response => response.json())
    .then(responseData => {
      setDataUser(responseData)
      console.log(responseData);
    }) .catch((error) => {
      console.error('Error fetching data:', error);
    }); 
  }, [])
    return (
        <div className="userPageCard">
{dataUser!=undefined && (
  <div>
<div className="userPageCardBlock">
  <h1 className="userPageTitle">{dataUser.username}</h1>
<h2 className="userPageLogged">Date of registration: {(dataUser.date).slice(0,10)}</h2>
</div>
  </div>
)}
<div className="userPageCardFon"></div>
        </div>
    )
}
export default UserPageCard