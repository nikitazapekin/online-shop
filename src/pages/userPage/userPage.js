import "./userPage.scss"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import UserPageCard from "../../components/userPageCard/userPageCard.js"
import Navigation from "../../components/navigation/navigation.js"
import { useState } from "react"
import Spinner from "../../components/spinner/spinner.js"
import { ErrorBoundary } from 'react-error-boundary';
import TitleOfSite from "../../components/titleOfSite/titleOfSite.js"
import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../../components/errorFallback/errorFallback.js"

import FallbackComponent from "../../components/FallbackComponent/fallbackComponent.js"
const UserPage=()=> {
  //throw new Error("kkkk")
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
        <div className="userPage">
               <Navigation />
            {isLoading? (
                <Spinner />
            ) :
            (

              <ErrorBoundary FallbackComponent={FallbackComponent}
    
              >
                {/*<BrokenComponent /> */}
              
                <UserPageCard />
              </ErrorBoundary>
             
            )
        }
    
        </div>
    )
}
export  default UserPage
/*export default withErrorBoundary(UserPage, {
 // fallback: <div>smth went wrooo</div>
 FallbackComponent: 
}) */