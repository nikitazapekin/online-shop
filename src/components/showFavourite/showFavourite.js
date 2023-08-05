


/*
import "./showFavourite.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { showNewFavourite } from "../../redux/reducers/showFavouriteReducer.js";
import { useDispatch, useSelector } from "react-redux";
const ShowFavourite = (props) => {
  const { username } = props;
const [favData, setFavData]=useState(undefined)
const [price, setPrice] =useState(0)
 const [isRemoving, setIsRemoving] =useState(false)
const [removingPrice, setRemovingPrice]=useState()
const [allItems, setAllItems]=useState([])
//const fav = useSelector((state) => state.favourite.todos);
const fav = useSelector((state) => state.favourite.todos);
const dispatch=useDispatch()
//console.log("fav"+fav)
//dispatch(showNewFavourite(JSON.stringify({name: username})));
console.log(123)

useEffect(() => {
  const handleAction = async () => {
    await dispatch(showNewFavourite(JSON.stringify({ name: username })));
    const items=fav.map(item=> {
      return item.fav
    })
    console.log(items)
    setFavData(items)
   // console.log("fav"+fav)
   console.log(JSON.stringify(fav))
  };
  if (favData === undefined) {
    handleAction();
  }
}, [ dispatch, fav]);

useEffect(()=> {
  if(favData!=undefined){
    console.log(favData)
    favData.forEach(item=> {


item.forEach(it=> {
  console.log(it)
  setAllItems((prev)=>[...prev, it])
})
    })
  }
  console.log(1)
},[dispatch, fav])

  return (
<div className="showFavouritee">
  {
  // favData!=undefined && ( favData.map(item=> (
  allItems!=undefined && ( allItems.map(item=> (
      <div className="favDataItem">
 <Link style={{textDecoration: "none"}} to={`/tovarInfo/${item.id}`}>
    <img src={item.logo} alt="logo" className="favDataImage" />
    <div className="favItemBlock">
    <div className="lineOfFav">
    <p className="favDataTitle">{item.title}</p>
    <p className="favDataPrice">{item.price}rub</p>
    </div>
    <p className="favItemDescribtion">
      {item.describtion}
    </p>
    </div>
    </Link>
        </div> 
    ))
   )
  }
 {favData!=undefined && favData!='' && favData!=null && (  

favData.map(item=> (
  <div className="favDataItem">
    <Link style={{textDecoration: "none"}} to={`/tovarInfo/${item.id}`}>
    <img src={item.logo} alt="logo" className="favDataImage" />
    <div className="favItemBlock">
    <div className="lineOfFav">
    <p className="favDataTitle">{item.title}</p>
    <p className="favDataPrice">{item.price}rub</p>
    </div>
    <p className="favItemDescribtion">
      {item.describtion}
    </p>
    </div>
    </Link>
    <FontAwesomeIcon className='favTrashCan' icon={faTrashCan} bounce style={{ color: "#ec0909" }}
    onClick={(event)=> {
   setRemovingPrice(item.price)
      fetch('http://localhost:5000/removeFavv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
     //   body: JSON.stringify({test: "test"}),
     body: JSON.stringify({id: item.id, name: username})
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setFavData(data)
            setIsRemoving(true)
      
        })
        .catch((error) => console.error('Error:', error));
    }
  }
    />
  </div>
 
))
)} 
<button className="payForAll"
onClick={()=> {
  setPrice(0)
  fetch('http://localhost:5000/removeAllFavv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

 body: JSON.stringify({data: favData, name: username})
  })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setFavData(data)

  
    })
    .catch((error) => console.error('Error:', error));
}}
>Pay for everything {price}</button>   

</div>
  );
};

export default ShowFavourite; */



import "./showFavourite.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const ShowFavourite = (props) => {
  const { username } = props;
const [favData, setFavData]=useState()
const [price, setPrice] =useState(0)
 const [isRemoving, setIsRemoving] =useState(false)
const [removingPrice, setRemovingPrice]=useState()
    useEffect(()=> {
      fetch('http://localhost:5000/favv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
       //   body: JSON.stringify({test: "test"}),
       body: JSON.stringify({name: username})
        })
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              setFavData(data.fav)

            
          //   setItem(data)
          console.log(data.fav)
          })
          .catch((error) => console.error('Error:', error));
        

  }, [])
  useEffect(()=> {
if(favData!=undefined && !isRemoving){
    console.log(favData)
    favData.forEach(item=> {
      setPrice(prev=> prev+item.price)
    })
    setIsRemoving(false)
  }
  if(isRemoving){
    setPrice((prev)=>prev-removingPrice)
  }
  }, [favData])
  return (
<div className="showFavouritee">
  {favData!=undefined && (
favData.map(item=> (
  <div className="favDataItem">
    <Link style={{textDecoration: "none"}} to={`/tovarInfo/${item.id}`}>
    <img src={item.logo} alt="logo" className="favDataImage" />
    <div className="favItemBlock">
    <div className="lineOfFav">
    <p className="favDataTitle">{item.title}</p>
    <p className="favDataPrice">{item.price}rub</p>
    </div>
    <p className="favItemDescribtion">
      {item.describtion}
    </p>
    </div>
    </Link>
    <FontAwesomeIcon className='favTrashCan' icon={faTrashCan} bounce style={{ color: "#ec0909" }}
    onClick={(event)=> {
   setRemovingPrice(item.price)
      fetch('http://localhost:5000/removeFavv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
     //   body: JSON.stringify({test: "test"}),
     body: JSON.stringify({id: item.id, name: username})
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setFavData(data)
            setIsRemoving(true)
      
        })
        .catch((error) => console.error('Error:', error));
    }
  }
    />
  </div>
 
))
  )}
<button className="payForAll"
onClick={()=> {
  setPrice(0)
  fetch('http://localhost:5000/removeAllFavv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

 body: JSON.stringify({data: favData, name: username})
  })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setFavData(data)

  
    })
    .catch((error) => console.error('Error:', error));
}}
>Pay for everything {price}</button>
</div>
  );
};

export default ShowFavourite;