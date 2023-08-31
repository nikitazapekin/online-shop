import "./userPage.scss"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import UserPageCard from "../../components/userPageCard/userPageCard.js"
import Navigation from "../../components/navigation/navigation.js"
import { useState } from "react"
import Spinner from "../../components/spinner/spinner.js"
import { ErrorBoundary } from "../../components/errorBoundary/errorBoundary.js"
const UserPage=()=> {
    const [isLoading, setIsLoading] = useState(true);
    const timeoutId=500
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false); 
        }, timeoutId);  
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
    return (
      <ErrorBoundary>
        <div className="userPage">
               <Navigation />
            {isLoading? (
              <Spinner />
              ) :
              (
                <UserPageCard />
                )
              }
        </div>
              </ErrorBoundary>
    )
}
export  default UserPage
