import "./productsPages.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwitchSearch from "../switchSearch/switchSearch.js";
import ScrollArrow from "../scrollArrow/scrollArrow.js";
import ProductsPagesItem from "../productsPagesItem/productsPagesItem.js";
const ProductsPages =()=> {
const [currentPage, setCurrentPage]=useState(1)
const [photos, setPhotos]=useState([])
const [fetching, setFetching]=useState(true)
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
setPhotos([...photos, ...res.data])
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
        {/*  <SwitchSearch /> */}
<div className="productsPagesTable">
  {photos.map((item, index)=> (
    <ProductsPagesItem item={item} key={index} />
  ))}
  
</div>
<ScrollArrow />
        </div>
    )
}
export default ProductsPages
