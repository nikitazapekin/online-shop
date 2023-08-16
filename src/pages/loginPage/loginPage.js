//import Login from "../../components/login/login.js"
import Navigation from "../../components/navigation/navigation.js"
import "./loginPage.scss"
import Footer from "../../components/footer/footer.js"
import Login from "../../components/login/login.js"
import Spinner from "../../components/spinner/spinner.js"
import { useState, useEffect } from "react"
const LoginPage=()=> {
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
        <>
        <Navigation />
        {isLoading ? 
        (
           <Spinner /> 
        )
: (
<>
<div className="area" >
            <ul className="circles">
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
        <Login />
        </>
)
        }
    <Footer />  
        </>
    )
}
export default LoginPage