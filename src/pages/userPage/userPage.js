import "./userPage.scss"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import UserPageCard from "../../components/userPageCard/userPageCard.js"
import Navigation from "../../components/navigation/navigation.js"
const UserPage=()=> {

    return (
        <div className="userPage">
       <Navigation />
<UserPageCard />
        </div>
    )
}
export  default UserPage