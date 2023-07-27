
import "./comments.scss"
import { useState, useRef, useEffect } from "react"
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
const Comments=()=> {
    const [form, setForm]= useState({
       comment: '',
       // password: '',
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
                console.log(rate)
                
           setForm({ ...form, rate: checkRate(rate)});
            }
          }
       // }
        }
        };
        if(stars.current.children!=undefined){
        Object.values(stars.current.children).forEach(item => {
          item.addEventListener("click", handleStarClick);
        });
    }
        // Функция очистки, удаляющая слушателей при размонтировании компонента
        const cleanup = () => {
            if(stars.current.children!=undefined){
          (stars.current.children).forEach(item => {
            item.removeEventListener("click", handleStarClick);
          })
        }
        };
      
        // Возвращаем функцию очистки из useEffect
        return cleanup;
    }
      }, []);
      
 



    return (
        <div className="commentsForm">
<div className="addComment">
    <input  onChange={changeHandler} name="comment" type="text" className="addCommentForm" placeholder="type comment" />
    <button className="addCommentBtn">Send </button>
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


<button
onClick={()=> {
  console.log(form)
}}
>ccc</button>


        </div>
    )
}
export default Comments