
import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/navigation.js";
import "./tovarInfoPage.scss";
import Nn from "./new.png";
import Sale from "./sale.png";
import { useParams } from "react-router"
import Footer from "../../components/footer/footer.js";
import Spinner from "../../components/spinner/spinner.js";
import Buy from "../../components/buy/buy.js";
import { useSelector, useDispatch } from "react-redux";
import { postFavourite } from "../../redux/reducers/tovarInfo/tovarInfoThunk.js";
import { buyTovarPost } from "../../redux/reducers/buyTovar/buyTovarThunk.js";
import { isAuthFunc } from "../../functions/authFunctions.js";
import Comments from "../../components/comments/comments.js";
import AddToFavourite from "../../components/addToFavourite/addToFavourite.js";
import Unlogged from "../../components/unlogged/unlogged.js";
const TovarInfoPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const state = useSelector(state => state.tovarReducer);
    const [isBuy, setIsBuy] = useState(false);
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const timeoutId = 500;
    const [isUnlogged, setIsUnlogged]=useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, timeoutId);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        dispatch(postFavourite(id));
    }, [dispatch, id]);

    useEffect(() => {
        try {
            if (state.post && state.post.length > 0) {
                setItem(state.post[0]);
            }
        } catch (err) {
            console.log(err);
        }
    }, [state]);

    useEffect(() => {
        setUserData(isAuthFunc());
    }, [isAuthFunc]);

    return (
        <div className="tovarInfoPage">
            <Navigation />
{loading ? (
    <Spinner />
) : (
            <div className="puschaseCard">
                {item !== undefined && item !== null && (
                    <div>
                        <div className="imagePurchaseBlock">
                            {item.logo && <img src={item.logo} alt="item" className="purchaseCardImage" />}
                            {item.neww && <img src={Nn} className="itemNew" alt="itemNew" />}
                            {item.sale && <img src={Sale} className="itemSale" alt="itemNewww" />}
                        </div>
                        <h1 className="itemTitle">{item.title}</h1>
                        <h2 className="itemDescribtion">{item.describtion} </h2>
                        <h2 className="priceOfItem">{item.price} rub</h2>
                        <h2 className="itemCountry">country {item.country}</h2>
                        <button className="buyBtn" onClick={async () => {
                            await dispatch(buyTovarPost({ username: userData.user, userId: userData.id, id: id }));
                            setIsBuy(true)
                        }}>Buy</button>
                            <Comments id={id} item={item} setItem={setItem} />
                    <AddToFavourite id={id} />
                    </div>
                )}
                {isBuy ? (
                       <Buy setIsBuy={setIsBuy} /> 
                ) :
                (
                    <></>
                )
                }
                <div className="purchasedCardFon"></div>
            <Unlogged setIsUnlogged={setIsUnlogged} isUnlogged={isUnlogged} />
                    <AddToFavourite setIsUnlogged={setIsUnlogged} id={id} /> 
            </div>
)}
            <Footer />
        </div>
    );
};

export default TovarInfoPage;
