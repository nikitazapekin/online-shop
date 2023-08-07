import "./foundPageItemsElem.scss"
import { Link } from "react-router-dom"
const FoundPageItemsElem=(props)=> {
    const {item} =props
    console.log(item)
    return (
      <>
<Link style={{textDecoration: "none", color: "#fff" }}  to={`/tovarInfo/${item.id}`}>
     <div className="productsPagesTableItem">
      <div className="productsPagesTableItemWrapper">
         <img src={item.logo} className="productsPagesTableItemImage" alt="logo" />
         <p className="productsPagesTableItemTitle">{item.title}</p>
         <p className="productsPagesTableItemTitle">{item.price}rub</p>
         </div>
         <div className="productsPagesTableItemFon"></div>
     </div>
  </Link> 
      </>
    )
}
export default FoundPageItemsElem