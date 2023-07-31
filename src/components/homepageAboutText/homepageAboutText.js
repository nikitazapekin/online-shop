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

   /*
    window.addEventListener('scroll', function (){
       // elems.
         let value =window.scrollY;
         setDistance(value)
         console.log(value)
     })
  
     return () => {
       window.removeEventListener('scroll')
            
     
            }; */
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

<button  style={{position: "absolute", zIndex: 111}} onClick={()=> console.log(elems.current)}>
        sjsjsssssssss
    </button>
</>
    )
}
export default HomepageAboutText


