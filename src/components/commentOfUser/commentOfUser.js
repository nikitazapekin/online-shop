
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import addToFavouriteReducer from '../../redux/reducers/addToFavouriteReducer.js';
import "./commentOfUser.scss";
import User from "./user.jpg";
import { isAuth } from '../../redux/reducers/isLogged.js';
import StarsOfUserComment from '../starsOfUserComment/starsOfUserComment.js';
const CommentOfUser = (props) => {
  const dispatch=useDispatch()
    const [userName, setUserName]=useState()
    const { author, text, rate, date, id, number } = props;
    const isLogged = useSelector((state) => state.addToFavouriteReducer.isLogged);
    const username = useSelector((state) => state.addToFavouriteReducer.name);
useEffect(()=> {
  dispatch(isAuth())
}, [])
    return (
        <div className="commentOfUser">
            <div className="commentOfUserSection">
                {author!=undefined && text!=undefined && (
                    <>
                <img className="avatarOfUser" src={User} alt="logo" />
                <div className="blockOfUserComment">
                    <p className="userCommentTitle">{author}</p>
                    <p className="userCommentText">{text}</p>
                </div>
                </>
                )}
            </div>
{rate!=undefined && date!=undefined && (
    <>
          <StarsOfUserComment rate={rate} />
            <p className="userCommentDate">{date.slice(0, 10)}</p>
            </>
)}
        </div>
    )
}

export default CommentOfUser;
//https://fontawesome.com/icons/trash-can?f=classic&s=solid&an=bounce&pc=%23ec0909
//npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
