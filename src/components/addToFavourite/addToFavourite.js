import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./addToFavourite.scss";
import { isAuth } from "../../redux/reducers/isLogged.js";
import { addNewFavourite } from "../../redux/reducers/addToFavouriteReducer.js";
const AddToFavourite = (props) => {
  const isLogged = useSelector((state) => state.addToFavouriteReducer.isLogged);
  const username = useSelector((state) => state.addToFavouriteReducer.name);
  const dispatch = useDispatch();
  const { id } = props;
  const [isAdded, setIsAdded] = useState(false);
  const [sendValue, setSendValue] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(isAuth());
        setSendValue({ name: username, id: id });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [username, dispatch]);
  const handleAction = async () => {
    await dispatch(addNewFavourite( JSON.stringify(sendValue)));
  };
  return (
    <div
      className="addToFavourite"
      onClick={() => {
        if (isAdded && isLogged) {
          setIsAdded(false);
        }
        if (!isAdded && isLogged) {
          setIsAdded(true);
handleAction()
        }
      }}
    >
      <button className="addToFavouriteItem">
        {!isAdded ? "Добавить в корзину" : "Убрать из корзины"}
      </button>
    </div>
  );
};
export default AddToFavourite;
