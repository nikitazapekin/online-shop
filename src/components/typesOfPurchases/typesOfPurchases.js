import "./typesOfPurchases.scss"
import { useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';
const TypesOfPurchases=()=> {
    const items=useRef()
    const navigate = useNavigate();
    useEffect(()=> {

        if(items!=undefined){
            console.log(items)
            console.log(items.current.children)
            const elems=items.current.children
            Object.values(elems).forEach((item, index)=> {
item.addEventListener("click", ()=> {
    console.log(item.textContent)
    navigate(`/catalogue/${item.textContent}`);
})
            })
        /*   (items.current.children).forEach(item=> {
                item.addEventListener("click", ()=> {
                 //   console.log(item.textContent)
                })
            })  */

        }
    },[])
    return (
        <div ref={items} className="typesOfPurchases">
            <p className="typeOfPurchase">Lamps</p>
            <p className="typeOfPurchase">Sofas</p>
            <p className="typeOfPurchase">Tables</p>
            <p className="typeOfPurchase">Chairs</p>
            <p className="typeOfPurchase">Decorations</p>
            <p className="typeOfPurchase">Shelves</p>
            <p className="typeOfPurchase">Curtains</p>
            <p className="typeOfPurchase">Doors</p>
            <p className="typeOfPurchase">Wardrobes</p>
            <p className="typeOfPurchase">Plates</p>
            <p className="typeOfPurchase">Pillows</p>
            <p className="typeOfPurchase">Blankets</p>
            <p className="typeOfPurchase"></p>
            <p className="typeOfPurchase">Clothes</p>
            <p className="typeOfPurchase">Various</p>
        </div>
    )
}
export default TypesOfPurchases;