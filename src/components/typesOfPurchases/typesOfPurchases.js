import "./typesOfPurchases.scss"
import { typesOfPurchases } from "../../renderingConstants.js";
import { useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';
const TypesOfPurchases=()=> {
    const items=useRef()
    const navigate = useNavigate();
    useEffect(()=> {

        if(items!=undefined){
            const elems=items.current.children
            Object.values(elems).forEach((item, index)=> {
item.addEventListener("click", ()=> {
    navigate(`/catalogue/${item.textContent}`);
})
            })
        }
    },[])
    return (
        <div ref={items} className="typesOfPurchases">
{typesOfPurchases.map((item=> (
    <p className="typeOfPurchase">{item}</p>
)))}
         
        </div>
    )
}
export default TypesOfPurchases;