
import "./comments.scss"
import { useState, useRef, useEffect } from "react"
import User from "./user.jpg"
import CommentOfUser from "../commentOfUser/commentOfUser.js"
function checkRate(value){
if(value==0){
    return 5
}
if(value==2){
    return 4
}
if(value==4){
    return 3
}
if(value==6){
    return 2
}
if(value==8){
    return 1
}

return 0
}
const Comments=(props)=> {
  const {id, item} =props;
  const inputForm=useRef()
 
  useEffect(()=> {
if(item!=undefined){
  (item.map(elem=> {
    console.log(elem)
     elem.comments.map(elemm=> {
     // console.log(elemm)
    console.log(elemm.author)
   console.log( elemm.rate)
    console.log(elemm.text)
    console.log(elemm.date)
     })
    }))
  }
  }, []) 
    const [form, setForm]= useState({
       comment: '',
        rate: ''
            })
             
      const changeHandler=(event)=> {
        setForm({...form, [event.target.name]: event.target.value})
            }
    const stars=useRef()
    useEffect(() => {
        if(stars!=undefined){
        const handleStarClick = (event) => {
            if(stars.current.children!=undefined){
          let items = stars.current.children;
          for (let i = 0; i < items.length; i += 2) {
            if (stars.current.children[i].checked) {
                let rate=i;
             //   console.log(rate)
                
           setForm({ ...form, rate: checkRate(rate)});
            }
          }
     
        }
        };
        if(stars.current.children!=undefined){
        Object.values(stars.current.children).forEach(item => {
          item.addEventListener("click", handleStarClick);
        });
    }
        // Функция очистки, удаляющая слушателей при размонтировании компонента
        const cleanup = () => {
      /*      if(stars.current.children!=undefined){
          (stars.current.children).forEach(item => {
            item.removeEventListener("click", handleStarClick);
          }) 
        } */
        };
      
     
        return cleanup;
    }
      }, []);
      

    return (
        <div className="commentsForm">
<div className="addComment">
    <input ref={inputForm}  onChange={changeHandler} name="comment" type="text" className="addCommentForm" placeholder="type comment" />
    <button className="addCommentBtn" onClick={()=> {
     // if(inputForm!=undefined){
       const textComment =inputForm.current.value
       console.log(textComment)
    //  }
     /* if(form.comment.length==0){
        form.comment=inputForm.textContent
      }
      console.log(form.comment) */
const cookiesString = document.cookie;
const cookiesArray = cookiesString.split(';');
const userCookie = cookiesArray.find(cookie => cookie.trim().startsWith('user='));
console.log( (userCookie))
// Если куки с именем 'user' найден, получаем его значение
let userValue = null;
if (userCookie) {
  let userCookieValue = userCookie.split('=')[1];
  let indexOfcav=userCookieValue.lastIndexOf('}')
  let username;
let  userCookieValueNew=userCookieValue.substring(indexOfcav+1, -userCookieValue.length)
  console.log(userCookieValueNew)
  try {
    userValue = JSON.parse(decodeURIComponent(userCookieValueNew));
    username=userValue.name
  } catch (error) {
    console.error('Ошибка разбора куки user:', error);
  }
fetch('http://localhost:5000/addComment', { 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({form, id, date: new Date(), username, textComment})
})
  .then(response => response.json())
  .then(responseData => {
    console.log(responseData);
  }) 
} else {
  console.log("зарегистрируйьесь")
}

  console.log(form)
}}>Send </button>
    <div className="starRateComment"> 
    


    <div ref={stars}  className="rating">

<input type="radio" name="rating" id="r1" />
<label for="r1"></label>

<input type="radio" name="rating" id="r2" />
<label for="r2"></label>

<input type="radio" name="rating" id="r3" />
<label for="r3"></label>

<input type="radio" name="rating" id="r4" />
<label for="r4"></label>

<input type="radio" name="rating" id="r5" />
<label for="r5"></label>

</div>


    </div>

</div>

<h1 className="comments">Comments</h1>
<div className="userCommentsBlock">
<div className="commentsItems">



       
  {item !== undefined &&
    item.map((el) => {
      return el.comments.map((elemm, index) => (
        <CommentOfUser author={elemm.author} rate={elemm.rate} text={elemm.text} date={elemm.date} />
     
      ));
    })}
</div>
 {/* <div key={index} className="commentOfUser">
          <img className="avatarOfUser" src={User} alt="logo" />

          {elemm.author}. {elemm.rate}. {elemm.text}. {elemm.date}
      </div> */}


</div> 
        </div>
    )
}
export default Comments