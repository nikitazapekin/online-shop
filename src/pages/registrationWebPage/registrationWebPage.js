import Navigation from "../../components/navigation/navigation.js"
import Register from "../../components/register/register.js"
import Footer from "../../components/footer/footer.js"
import "./registerWebPage.scss"
import { useState, useEffect } from "react"
import Spinner from "../../components/spinner/spinner.js"
const RegistrationWebPage=()=> {
    const [isLoading, setIsLoading] = useState(true);
    const timeoutId=500
      useEffect(() => {
       
        setTimeout(() => {
          setIsLoading(false); 
        }, timeoutId); 
    
        // Clean up the effect
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
    return (
        <div className="registerWebPage">

   


        <Navigation />

        {isLoading? (
            <Spinner />
        ) :
        (
<>
     <Register />
     
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
       
    )
}
export default RegistrationWebPage