
import "./comments.scss"
import { useState, useRef, useEffect } from "react"
import User from "./user.jpg"
import CommentOfUser from "../commentOfUser/commentOfUser.js"
import { useDispatch, useSelector } from "react-redux"
import commentsReducer from "../../redux/reducers/commentsReducer.js"
import { checkRate } from "../../redux/reducers/commentsReducer.js"
import { isAuth } from "../../redux/reducers/isLogged.js"
import { addNewComment } from "../../redux/reducers/commentsAsyncReducer.js"
//import add
//import addToFa
//import addToFav
//import addToFavouriteReducer from "../../redux/reducers/addToFavouriteReducer.js"

//import { addNewComment } from "../../redux/reducers/commentsAsyncReducer.js"
const Comments=(props)=> {
/*const dispatch=useDispatch()
  const rate = useSelector((state) => state.commentsReducer.rate);
  const isLogged = useSelector((state) => state.addToFavouriteReducer.isLogged);
  const username = useSelector((state) => state.addToFavouriteReducer.name);
  const resp=useSelector((state) => state.commentsAsyncReducer.resp);
  const {id, itemm} =props;
 const [item, setItem]=useState(itemm[0].comments)
  const inputForm=useRef()
    const [form, setForm]= useState({
       comment: '',
        rate: ''
            })   
      const changeHandler=(event)=> {
        setForm({...form, [event.target.name]: event.target.value})
            }
    const stars=useRef()
  const handleStarClick = (event) => {
    if (stars.current.children != undefined) {
      let items = stars.current.children;
      for (let i = 0; i < items.length; i += 2) {
        if (stars.current.children[i].checked) {
          let rat = i;
          dispatch(checkRate(rat)); 
       
        }
      }
    }
  };

  useEffect(() => {
    if (stars.current.children != undefined) {
      Object.values(stars.current.children).forEach((item) => {
       item.addEventListener("click", handleStarClick);
      });
    }

    const cleanup = () => {
      try {
        if (stars.current.children != undefined && stars.current.children != null) {
          Object.values(stars.current.children).forEach((item) => {
             item.removeEventListener("click", handleStarClick);
          });
        }
      } catch (error) {
      
        console.error("An error occurred during cleanup:", error);
      }
    };
  
    return cleanup;
  }, []);
  useEffect(() => { 
    console.log(rate); 
    setForm({ ...form, rate: rate});
  }, [rate]);
  const checkAuth=()=> {
    const textComment =inputForm.current.value
    dispatch(isAuth())
   if(isLogged){
    dispatch(addNewComment(JSON.stringify({form, id, date: new Date(), username, textComment})))
   }  else {
    console.log("зарегистрируйся")
   }
  }
  useEffect(()=> {
    try{
      if(resp.comments!=null){
        setItem(resp.comments)
    } 
    }  catch(err){
      console.log(err)
    }
  }, [resp])   */
    return (
        <div className="commentsForm">
{/*<div className="addComment">
    <input ref={inputForm}  
    onChange={changeHandler}
     name="comment"
      type="text" 
     className="addCommentForm"
      placeholder="type comment" />
    <button 
    className="addCommentBtn" 
    onClick={()=> {
    
    checkAuth()
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

{item.map((elemm, index)=> (
   <CommentOfUser
   key={index} 
   author={elemm.author}
   rate={elemm.rate}
   text={elemm.text}
   date={elemm.date}
   id={id}
   number={index}
 />
))}
</div>

</div>  */}
        </div>
    )
}
export default Comments 