import { useEffect, useState } from "react";
import {useDispatch } from "react-redux";
import "./addToFavourite.scss";
import { isAuthFunc } from "../../functions/authFunctions.js";
import { addToFavouritePost } from "../../redux/reducers/addToFav/addToFavouriteThunk.js";
import { ErrorBoundary } from "../errorBoundary/errorBoundary.js";
const AddToFavourite = ({id, setIsUnlogged}) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [sendValue, setSendValue] = useState();
  const [times, setTimes]=useState(false)
  useEffect(()=> {
setSendValue({idd: id, obj: isAuthFunc()})
  }, []) 

const handleAction=()=> {
  if (!isAdded && !times && sendValue.obj.isAuth) {
    setIsAdded(true);
    setTimes(true)
    dispatch(addToFavouritePost((sendValue)))
  }
  if (!sendValue.obj.isAuth) {
  setIsUnlogged(true)

  }
}
  return (
    <>
<ErrorBoundary>
    <div>
    </div>
  <div
className="addToFavourite"
onClick={() => {
  handleAction()
}
}
>
<button className="addToFavouriteItem">
  {!isAdded ? "Добавить в корзину" : "Добавлено!"}
</button> 
</div> 
  </ErrorBoundary>
</>
  );
};

export default AddToFavourite;

//ИСПРАВИЛ