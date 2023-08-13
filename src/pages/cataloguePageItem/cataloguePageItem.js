import Navigation from "../../components/navigation/navigation.js"
import "./cataloguePageItem.scss"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.js";
import { useDispatch, useSelector } from "react-redux";
import { postCataloguePageItem } from "../../redux/reducers/cataloguePageItem/cataloguePageItemThunk.js";
const CataloguePageItem =()=> {
  const dispatch = useDispatch()
  const state=useSelector(state=>state.cataloguePageItemReducer)
    const [elems, setElems]=useState()
    const {id} =useParams()
    const idInLowerCase=id.toLowerCase()
    const [isLoading, setIsLoading] = useState(true);
    const timeoutId=1000
      useEffect(() => {
       
        setTimeout(() => {
          setIsLoading(false); 
        }, timeoutId); 
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
useEffect(()=> {
dispatch(postCataloguePageItem({ id: idInLowerCase }))
}, [])
useEffect(()=> {
console.log(state)
},[state])


    return (
<div className="cataloguePageItem">
            <Navigation />

            {isLoading? (
                <Spinner />
            ) :
            (
                <>
                
            <h1 className="titleOfCataloguePage">
            Found products {id}
            </h1>
<div className="productsPagesTable">
    
{elems!=undefined && (elems).map(item=> (



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
))} 
</div>
                </>
            )
            }
</div>
    )
}
export default CataloguePageItem

/*
 <Link to={`/tovarInfo/${item.id}`}>
    <div className="cataloguePageItemTableElement">
<img src={item.logo} className="purchaseImage" alt="purchase" />
<p className="purchaseTitle">{item.title}</p>

    </div>
</Link>
*/