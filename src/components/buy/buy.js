import "./buy.scss"
import { ErrorBoundary } from "../errorBoundary/errorBoundary.js"
const Buy=({setIsBuy})=> {
const handleClick=()=> {
  setIsBuy(false)
}
return (
  <ErrorBoundary>

    <div  className="buyComponentWrapper">
         <div  className="buyComponent">
     <h1 className="isBoughtText"> Товар куплен!
     </h1> 
        <button onClick={()=> {
          handleClick()
        }} className="buyComponentBtn">
          Ok
        </button>
    </div>
    </div>
          </ErrorBoundary>
)
}
export default Buy;
//ИСПРАВИЛ