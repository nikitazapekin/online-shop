import { useParams } from "react-router";
import "./userPageCard.scss";
import { useState, useEffect } from "react";
import ShowFavourite from "../showFavourite/showFavourite.js";
import ShowBought from "../showBought/showBought.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  fetchTodos,
} from "../../redux/reducers/userPageCardReducer.js";
const UserPageCard = () => {
  const { id } = useParams();
  const dataa = JSON.stringify({ id: id });
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState();
  const [selectPurchases, setSelectPurchases] = useState(false);
  useEffect(() => {
    const handleAction = async () => {
      await dispatch(addNewTodo(dataa));
     setDataUser(todos.todos[((todos.todos.length))-1]);
    };
    if (dataUser === undefined) {
     handleAction();
    }
  }, [dataUser, dispatch, todos.todos]);
  return (
    <div className="userPageCard">
        {dataUser != undefined && (
        <div>
          <div className="userPageCardBlock">
            <h1 className="userPageTitle">{dataUser.username}</h1>
            {dataUser.date != undefined && (
              <h2 className="userPageLogged">
                Date of registration: {dataUser.date.slice(0, 10)}
              </h2>
            )}
          </div>
        </div>
      )}
      <div className="userFavouriteAndBought">
        <p onClick={() => setSelectPurchases(false)} className="showFavourite">
          Favourite
        </p>
        <p onClick={() => setSelectPurchases(true)} className="showBought">
          Purchased
        </p>
      </div>
      {dataUser != undefined && !selectPurchases && (
        <>
          <ShowFavourite username={dataUser.username} />
        </>
      )}
      {dataUser != undefined && selectPurchases && (
        <>
          <ShowBought username={dataUser.username} />
        </>
      )}
     
      <div className="userPageCardFon"></div>
    </div>
  );
};
export default UserPageCard;

