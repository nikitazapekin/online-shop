import "./buy.scss"
const Buy=({setIsBuy})=> {
const handleClick=()=> {
  setIsBuy(false)
}
return (
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
)
}
export default Buy;
//ИСПРАВИЛ