
import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/navigation.js";
import "./tovarInfoPage.scss";
import Nn from "./new.png";
import Sale from "./sale.png";
import { useParams } from "react-router"
import Comments from "../../components/comments/comments.js";
import AddToFavourite from "../../components/addToFavourite/addToFavourite.js";
import Footer from "../../components/footer/footer.js";
import Spinner from "../../components/spinner/spinner.js";
import Buy from "../../components/buy/buy.js";
import { showNewBuy } from "../../redux/reducers/buyReducer.js";
import { useSelector, useDispatch } from "react-redux";
const TovarInfoPage = () => {
    const dispatch=useDispatch()
    const username = useSelector((state) => state.addToFavouriteReducer.name);
    const isLogged = useSelector((state) => state.addToFavouriteReducer.isLogged);
    const userId = useSelector((state) => state.addToFavouriteReducer.id);
    const { id } = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true); 
const [isBuy, setIsBuy]=useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItem(data);
                setLoading(false); 
            })
            .catch((error) => console.error('Error:', error));

    }, []);

    return (
        <div className="tovarInfoPage">
        
            <Navigation />
            {loading ? ( 
                <Spinner />
            ) : (
                <div className="puschaseCard">
                  
                    <div className="imagePurchaseBlock">
                        <img src={item[0].logo} alt="item" className="purchaseCardImage" />
                        {item[0].neww ? <img src={Nn} className="itemNew" alt="itemNew" /> : null}
                        {item[0].sale ? <img src={Sale} className="itemSale" alt="itemNewww" /> : null}
                    </div>
                    <h1 className="itemTitle">{item[0].title}</h1>
                    <h2 className="itemDescribtion">{item[0].describtion} </h2>
                    <h2 className="priceOfItem">{item[0].price} rub</h2>
                    <h2 className="itemCountry">country {item[0].country}</h2>
                    <button className="buyBtn" onClick={()=>{
setIsBuy(true)
dispatch(showNewBuy({username: username, userId: userId, id: id}))
                    }}>Buy</button>
                    <div className="purchasedCardFon"></div>
                    <Comments id={id} itemm={item} />
                    <AddToFavourite id={id} />
                </div>
            )}
            {isBuy ?  (

                <Buy setIsBuy={setIsBuy} />

            ) :
            (
             <></>
            )
            }
            <Footer /> 

        </div>
    );
};

export default TovarInfoPage;
