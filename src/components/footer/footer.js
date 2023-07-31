import "./footer.scss"
import { useEffect, useState } from "react"
const Footer=()=>{
const [heightOfScrolling, setHeightOfScrolling]=useState()
    useEffect(()=> {
        let scrollHeight = document.documentElement.scrollHeight;
     // let scrollHeight = document.documentElement.offsetHeight;
        console.log(scrollHeight);
        setHeightOfScrolling(scrollHeight)
    },[])
    useEffect(()=> {
        document.addEventListener('scroll', scrollHandler)
        return function(){
          document.removeEventListener('scroll', scrollHandler)
        }
          }, [])
          const scrollHandler=(e)=> {
            if( e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+ window.innerHeight)<100){ // подвал
        console.log('scroll')
            }
      

          }
  
  
    return (
        <div style={{position: "absolute", top: heightOfScrolling}} className="footer">
            <div className="footerItem">Template by 2023</div>
            <div className="footerFon"></div>
        </div>
    )
}
export default Footer