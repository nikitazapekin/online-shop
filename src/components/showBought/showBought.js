
import "./showBought.scss";
import { useEffect, useState } from "react";
import { buyProductsPost } from "../../redux/reducers/boughtProducts/boughtProductsThunk.js";
import { useDispatch, useSelector } from "react-redux";
const ShowBought=({username})=> {
  const dispatch=useDispatch()
const [boughtData, setBoughtData]=useState()
  const state = useSelector(state => state.buyProductsReducer);
 useEffect(()=> {
dispatch(buyProductsPost(({name: username})))
 }, [])
   useEffect(()=> {
    console.log(JSON.stringify(state))
    setBoughtData(state.post)
   }, [state])
    return (
        <div className="showBoughtt">
           {boughtData!=undefined && (
            boughtData.map((item)=> (
<div className="boughtDataItem">
<img src={item.logo} alt="logo" className="boughtDataImage" />
    <div className="boughtItemBlock">
    <div className="lineOfBought">
    <p className="boughtDataTitle">{item.title}</p>
    <p className="boughtDataPrice">{item.price}rub</p>
    </div>
    <p className="boughtItemDescribtion">
      {item.describtion}
    </p>
    </div>
</div>
            ))
            )} 
    </div>
    )
}
export default ShowBought