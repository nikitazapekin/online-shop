import { useParams } from "react-router"
import "./userPageCard.scss"
import { useState, useEffect } from "react"
import ShowFavourite from "../showFavourite/showFavourite.js"
import ShowBought from "../showBought/showBought.js"
const UserPageCard =()=> {
  const [dataUser, setDataUser]=useState()
  const {id} =useParams()
  const [selectPurchases, setSelectPurchases] =useState(false)
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
  {dataUser.date!=undefined && (

    <h2 className="userPageLogged">Date of registration: {(dataUser.date).slice(0,10)}</h2>
  )}
</div>
  </div>
)}
<div className="userFavouriteAndBought">
  <p onClick={()=> setSelectPurchases(false)} className="showFavourite">Favourite</p>
  <p  onClick={()=> setSelectPurchases(true)}  className="showBought">Purchased</p>
</div>
{dataUser!=undefined && !selectPurchases && (
<>
   <ShowFavourite username={dataUser.username} /> 
  </>
)}
{dataUser!=undefined && selectPurchases && (
<>
  <ShowBought username={dataUser.username} />
  </>
)}
<div className="userPageCardFon"></div>
        </div>
    )
}
export default UserPageCard