import Navigation from "../../components/navigation/navigation.js"
import "./cataloguePageItem.scss"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.js";
const CataloguePageItem =()=> {
    const [elems, setElems]=useState()
    const {id} =useParams()
    const idInLowerCase=id.toLowerCase()
    const [isLoading, setIsLoading] = useState(true);
    const timeoutId=1000
      useEffect(() => {
       
        setTimeout(() => {
          setIsLoading(false); 
        }, timeoutId); 
    
        // Clean up the effect
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

useEffect(()=> {
    fetch('http://localhost:5000/id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: idInLowerCase }),
      })
        .then((res) => res.json())
        .then((data) => {
                setElems(data)
            console.log(data)
        })
        .catch((error) => console.error('Error:', error));
      
}, [])



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