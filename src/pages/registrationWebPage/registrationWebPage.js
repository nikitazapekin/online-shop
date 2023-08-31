import Navigation from "../../components/navigation/navigation.js"
import Register from "../../components/register/register.js"
import Footer from "../../components/footer/footer.js"
import "./registerWebPage.scss"
import { useState, useEffect } from "react"
import Spinner from "../../components/spinner/spinner.js"
import { ErrorBoundary } from "../../components/errorBoundary/errorBoundary.js"
const RegistrationWebPage=({user})=> {
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
        <div className="registerWebPage">
        <Navigation />

        {isLoading? (
            <Spinner />
        ) :
        (
<>

     <Register user={user}  />
     
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </>
        )
    }
    <Footer />
    </div>
       </ErrorBoundary>
       
       )
}
export default RegistrationWebPage