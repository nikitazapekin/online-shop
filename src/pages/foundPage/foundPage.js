import Navigation from "../../components/navigation/navigation.js"
import Footer from "../../components/footer/footer.js"
import "./foundPage.scss"
import { useParams } from "react-router"
import FoundPageItems from "../../components/foundPageItems/foundPageItems.js"
import ScrollArrow from "../../components/scrollArrow/scrollArrow.js"
import { useState, useEffect } from "react"
import Spinner from "../../components/spinner/spinner.js"
const FoundPage=()=> {
    const id=useParams()
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
        <div className="foundPage">
            <Navigation />
            {
            isLoading? (
<Spinner />
            ) : 
            (
<>

<FoundPageItems id={id} />
<ScrollArrow />
</>
            )
            }
            <Footer />
        </div>
    )
}
export default FoundPage