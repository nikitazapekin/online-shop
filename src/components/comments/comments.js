
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
  const {id, itemm} =props;
  console.log(id)
  const [item, setItem]=useState(itemm)
  console.log(item)
  const inputForm=useRef()
 
  useEffect(()=> {
if(item!=undefined){
  (item.map(elem=> {
    console.log(elem)
     elem.comments.map(elemm=> {
    console.log(elemm.author)
   console.log( elemm.rate)
    console.log(elemm.text)
    console.log(elemm.date)
    console.log(item.id)
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

        const cleanup = () => {
        };
      
     
        return cleanup;
    }
      }, []);
      
const addedComments = {};

    return (
        <div className="commentsForm">
<div className="addComment">
    <input ref={inputForm}  onChange={changeHandler} name="comment" type="text" className="addCommentForm" placeholder="type comment" />
    <button className="addCommentBtn" onClick={()=> {
     // if(inputForm!=undefined){
       const textComment =inputForm.current.value
       console.log(textComment)
const cookiesString = document.cookie;
const cookiesArray = cookiesString.split(';');
const userCookie = cookiesArray.find(cookie => cookie.trim().startsWith('user='));
let userValue = null;
if (userCookie) {
  let userCookieValue = userCookie.split('=')[1];
  let indexOfcav=userCookieValue.lastIndexOf('}')
  let username;
let  userCookieValueNew=userCookieValue.substring(indexOfcav+1, -userCookieValue.length)
 // console.log(userCookieValueNew)
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
//   setItem(responseData.comments)
setItem((prev)=> [...prev, responseData])
    console.log(responseData);
  }) 
} else {
  console.log("зарегистрируйьесь")
}

 // console.log(form)
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
    return el.comments.map((elemm, index) => {
      const commentKey = `${elemm.author}_${elemm.text}`; //проверка на дублирование
      if (!addedComments[commentKey]) {
        addedComments[commentKey] = true;
        return (
          <CommentOfUser
            key={index} 
            author={elemm.author}
            rate={elemm.rate}
            text={elemm.text}
            date={elemm.date}
            id={id}
            number={index}
          />
        );
      }
      return null;
    });
  })}
 
</div>

</div> 
        </div>
    )
}
export default Comments