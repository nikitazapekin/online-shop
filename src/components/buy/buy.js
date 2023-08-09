import "./buy.scss"
import { useState } from "react"
const Buy=(props)=> {
const {setIsBuy}=props
return (
    <div  className="buyComponentWrapper">
         <div  className="buyComponent">
     <h1 className="isBoughtText"> Товар куплен!
     </h1> 
        <button onClick={()=> {
          setIsBuy(false)
        }} className="buyComponentBtn">
          Ok
        </button>
    </div>
    </div>
)
}
export default Buy;