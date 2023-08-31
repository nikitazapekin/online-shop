import Footer from "../../components/footer/footer.js"
import Navigation from "../../components/navigation/navigation.js"
import ScrollArrow from "../../components/scrollArrow/scrollArrow.js"
import { Suspense } from "react"
import "./productsPage.scss"
import { useState, useEffect } from "react"
import Spinner from "../../components/spinner/spinner.js"
import React from "react"
const LazyProducts=React.lazy(()=> import("../../components/productsPages/productsPages.js"))
const ProductsPage =()=> {
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
        <div className="productsPage">
               <Navigation />
            {
                isLoading? (
                    <Spinner />
                ) :
                (
                    <>
                    <h1 className="productsTitle">Products</h1>
                   <Suspense fallback={(<h1>loading</h1>)}> 
                <LazyProducts />
                    </Suspense>
                    <ScrollArrow />
</>
                )
            }
         
          <Footer />
        </div>
    )
}
export default ProductsPage