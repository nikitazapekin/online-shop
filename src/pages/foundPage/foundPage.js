import Navigation from "../../components/navigation/navigation.js"
import Footer from "../../components/footer/footer.js"

import "./foundPage.scss"
import { useParams } from "react-router"
import ScrollArrow from "../../components/scrollArrow/scrollArrow.js"
import { useState, useEffect } from "react"
import Spinner from "../../components/spinner/spinner.js"
//import { Suspense, React } from "react"
import FoundPageItems from "../../components/foundPageItems/foundPageItems.js"
//const LazyFoundPageItems=React.lazy(()=> import("../../components/foundPageItems/foundPageItems.js"))
const FoundPage=()=> {
    const id=useParams()
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
        <div className="foundPage">
            <Navigation />
            {
            isLoading? (
<Spinner />
            ) : 
            (
<>

<FoundPageItems />
{/*
<Suspense fallback={<p>scwc</p>}>
<LazyFoundPageItems id={id} />
            </Suspense> */}
<ScrollArrow />
</>
            )
            }
            <Footer />
        </div>
    )
}
export default FoundPage