import "./productsPages.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwitchSearch from "../switchSearch/switchSearch.js";
import ScrollArrow from "../scrollArrow/scrollArrow.js";
const ProductsPages =()=> {
const [items, setItems]=useState()
const [currentPage, setCurrentPage]=useState(1)
const [photos, setPhotos]=useState([])
const [fetching, setFetching]=useState(true)
const [totalCount, setTotalCount]=useState(0)

useEffect(()=>{
  if(fetching){
console.log("fetching")

fetch(`http://localhost:5000/tovars?_limit=20&_page=${currentPage}`)
.then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then((res) => {
console.log(res)
setPhotos([...photos, ...res.data])
console.log(photos)
setCurrentPage(prevState=> prevState+1)
})
 
    .finally(()=> {
      setFetching(false)
    })
  }
},[fetching])

    useEffect(()=> {
      document.addEventListener('scroll', scrollHandler)
      return function(){
        document.removeEventListener('scroll', scrollHandler)
      }
        }, [])
        const scrollHandler=(e)=> {
          if( e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+ window.innerHeight)<100){ // подвал
      console.log('scroll')
      setFetching(true)
          }
        }


        
    return (
        <div className="productsPages">
          <SwitchSearch />
<div className="productsPagesTable">
  {photos.map((item, index)=> (
     <Link style={{textDecoration: "none", color: "#fff" }}  to={`/tovarInfo/${item.id}`}>
     <div className="productsPagesTableItem">
         <img src={item.logo} className="productsPagesTableItemImage" alt="logo" />
         <p className="productsPagesTableItemTitle">{item.title}</p>
     </div>
     </Link>
  ))}
  
</div>
<ScrollArrow />
        </div>
    )
}
export default ProductsPages
