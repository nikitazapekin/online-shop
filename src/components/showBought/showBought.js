
import "./showBought.scss";
import { useEffect, useState } from "react";
import { buyProductsPost } from "../../redux/reducers/boughtProducts/boughtProductsThunk.js";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "../errorBoundary/errorBoundary.js";
const ShowBought=({username})=> {
  const dispatch=useDispatch()
const [boughtData, setBoughtData]=useState()
  const state = useSelector(state => state.buyProductsReducer);
 useEffect(()=> {
dispatch(buyProductsPost(({name: username})))
 }, [])
   useEffect(()=> {
    setBoughtData(state.post)

   }, [state])
    return (
      <ErrorBoundary>

        <div className="showBoughtt">
          {boughtData!=undefined && boughtData!=null && (
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
            </ErrorBoundary>
    )
}
export default ShowBought