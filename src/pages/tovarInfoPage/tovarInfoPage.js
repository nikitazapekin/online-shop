import Navigation from "../../components/navigation/navigation.js"
import "./tovarInfoPage.scss"
import Stars from "../../components/stars/stars.js"
import { useParams } from "react-router"
import Nn from "./new.png"
import Sale from "./sale.png"
import { useEffect, useState } from "react"
const TovarInfoPage=()=> {
    const {id} =useParams()
    const [item, setItem]=useState();
useEffect(()=> {
    fetch('http://localhost:5000/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id}),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
           setItem(data)
        })
        .catch((error) => console.error('Error:', error));
      
}, [])

  
    return (
        <div className="tovarInfoPage">
            <Navigation />
        {item!=undefined  && (
            <div className="puschaseCard">
                <div className="imagePurchaseBlock">
                <img src={item[0].logo} alt="item" className="purchaseCardImage" />
                {item[0].neww==true ? <img src={Nn} className="itemNew" alt="itemNew" /> : null}
                {item[0].sale==true ? <img src={Sale} className="itemSale" alt="itemNewww" /> : null}
                </div>
                <h1 className="itemTitle">{item[0].title}</h1>
                <h2 className="itemDescribtion">{item[0].describtion} </h2>
                <h2 className="priceOfItem">{item[0].price} rub</h2>
                <button className="buyBtn">Buy</button>
                <Stars />
            </div>
        )}
    
        </div>
    )
}
export default TovarInfoPage