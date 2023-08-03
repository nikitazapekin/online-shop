
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "./commentOfUser.scss";
import User from "./user.jpg";
import StarsOfUserComment from "../starsOfUserComment/starsOfUserComment.js";

const CommentOfUser = (props) => {
    const [userName, setUserName]=useState()
    const { author, text, rate, date, id, number } = props;
useEffect(()=> {
    const cookiesString = document.cookie;
    const cookiesArray = cookiesString.split(';');
    const userCookie = cookiesArray.find(cookie => cookie.trim().startsWith('user='));
    let userValue = null;
    if (userCookie) {
      let userCookieValue = userCookie.split('=')[1];
      let indexOfcav=userCookieValue.lastIndexOf('}')
      let username;
    let  userCookieValueNew=userCookieValue.substring(indexOfcav+1, -userCookieValue.length)
    
      try {
        userValue = JSON.parse(decodeURIComponent(userCookieValueNew));
        username=userValue.name
      //  console.log(username)
      setUserName(username)
      } catch (error) {
        console.error('Ошибка разбора куки user:', error);
      }
    }
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
       {/*     { userName==author ? (
            <FontAwesomeIcon className='trashCan' icon={faTrashCan} bounce style={{ color: "#ec0909" }}
            onClick={()=>{
                fetch('http://localhost:5000/removeComment', { 
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({author, text, id, number}) //JSON.stringify({form, id, date: new Date(), username, textComment})
                  })
                    .then(response => response.json())
                    .then(responseData => {
                        console.log(responseData)
                    })
            }}
        /> 
            ) : null
} */}
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
