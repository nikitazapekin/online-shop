import Navigation from "../../components/navigation/navigation.js"
import "./cataloguePageItem.scss"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CataloguePageItem =()=> {
    const [elems, setElems]=useState()
    const {id} =useParams()
    const idInLowerCase=id.toLowerCase()
    console.log(idInLowerCase)


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
            <h1 className="titleOfCataloguePage">
            Found products {id}
            </h1>
<div className="catalogPageItemTable">
{elems!=undefined && elems.map(item=> (
    <Link to={`/tovarInfo/${item.id}`}>
    <div className="cataloguePageItemTableElement">
<img src={item.logo} className="purchaseImage" alt="purchase" />
<p className="purchaseTitle">{item.title}</p>

    </div>
    </Link>
))}
</div>
</div>
    )
}
export default CataloguePageItem