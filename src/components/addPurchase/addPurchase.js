import { useState } from "react"

const AddPurchase=()=> {
const [stat, setStat]=useState(24)
 const [form, setForm]= useState({
  email: '',
  password: ''
      })
    const changeHandler=(event)=> {
        setForm({...form, [event.target.name]: event.target.value})
            }
    return (
        <div className="addPurchase">
            type, id, sale, price, country, title, logo, describtion, rate 

            <h1>Добавить свой товар</h1>
            <h1>type</h1>
            <input onChange={changeHandler} name="type" placeholder="type" />
            <h1>id</h1>
            <input onChange={changeHandler} name="id" placeholder="sale" />
            <h1>sale</h1>
            <input onChange={changeHandler} name="sale" placeholder="sale" />
            <h1>price</h1>
            <input onChange={changeHandler} name="price" placeholder="price" />
            <h1>country</h1>
            <input onChange={changeHandler} name="country" placeholder="country" />
            <h1>title</h1>
            <input onChange={changeHandler} name="title" placeholder="title" />
            <h1>logo</h1>
            <input onChange={changeHandler} name="logo" placeholder="logo" />
            <h1>describtion</h1>
            <input onChange={changeHandler} name="describtion" placeholder="describtion" />
            <h1>rate</h1>
            <input onChange={changeHandler} name="rate" placeholder="rate" />

            <h1>new</h1>
            <input onChange={changeHandler} name="neww" placeholder="rate" />
            <button onClick={()=> {
 const data = JSON.stringify({   "type": form.type, "id": stat, "sale": form.sale, "neww": form.neww,  "price": form.price, "country": form.country, "title": form.title, "logo": form.logo, "describtion": form.describtion, "rate": form.rate  });
 console.log(data)
 fetch('http://localhost:5000/add', { 
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: data
 })
   .then(response => response.json())
   .then(responseData => {
     console.log(responseData);
   
   })
   .catch(error => {
     console.error('Ошибка:', error);
   });
   setStat(prev=> prev+1)
            }}>add</button>

            {stat}
        </div>
    )
}
export default AddPurchase;