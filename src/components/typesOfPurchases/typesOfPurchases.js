import "./typesOfPurchases.scss"
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
            <p className="typeOfPurchase">Lamp</p>
            <p className="typeOfPurchase">Sofa</p>
            <p className="typeOfPurchase">Table</p>
            <p className="typeOfPurchase">Chair</p>
            <p className="typeOfPurchase">Decoration</p>
            <p className="typeOfPurchase">Shelve</p>
            <p className="typeOfPurchase">Curtain</p>
            <p className="typeOfPurchase">Door</p>
            <p className="typeOfPurchase">Wardrobe</p>
            <p className="typeOfPurchase">Plate</p>
            <p className="typeOfPurchase">Pillow</p>
            <p className="typeOfPurchase">Blanket</p>
            <p className="typeOfPurchase">Electronic</p>
            <p className="typeOfPurchase">Various</p>
        </div>
    )
}
export default TypesOfPurchases;