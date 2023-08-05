import "./homepageAboutText.scss"
import { useEffect, useRef, useState } from "react"
const HomepageAboutText=()=> {
    const [distance, setDistance]=useState(0)
    const elems=useRef()
    const styles={
        position: "absolute",
left: distance-600
     //   left
    }
    const scrollFunction=()=> {
        let value =window.scrollY;
        setDistance(value)
      //  console.log(value)

    }
    useEffect(()=> {
            window.addEventListener('scroll', scrollFunction)
           
              return () => {
                window.removeEventListener('scroll', scrollFunction)
                     
              
                     }; 
    }, [])
    return (
    
    <>
 <div style={styles} ref={elems} className="content">
  <h2 class="text_shadows">Our catalogue</h2>
</div>


</>
    )
}
export default HomepageAboutText


