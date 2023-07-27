import "./userPage.scss"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import UserPageCard from "../../components/userPageCard/userPageCard.js"
const UserPage=()=> {
/*    fetch('http://localhost:5000/posts')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json) => {
console.log(json)
    }) */
  /*  const myState = useSelector((state) => state.reducer);
    const user=JSON.parse(myState)
    console.log(user.username)

    console.log(typeof myState) */
    return (
        <div className="userPage">
<UserPageCard />
        </div>
    )
}
export  default UserPage