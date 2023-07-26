import "./productsPages.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
const ProductsPages =()=> {
const [items, setItems]=useState()
    
    fetch('http://localhost:5000/tovars')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((res) => {
      console.log(res)
      setItems(res)
      });

    return (
        <div className="productsPages">
<div className="productsPagesTable">
{items!=undefined && (items.map(item=> (
    <Link style={{textDecoration: "none", color: "#fff" }}  to={`/tovarInfo/${item.id}`}>
<div className="productsPagesTableItem">
    <img src={item.logo} className="productsPagesTableItemImage" alt="logo" />
    <p className="productsPagesTableItemTitle">{item.title}</p>
</div>
</Link>
)))}
</div>
        </div>
    )
}
export default ProductsPages