/*
import "./showBought.scss";
import { showNewBought } from "../../redux/showBoughtReducer.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import showBoughtReducer from "../../redux/showBoughtReducer.js";
const ShowBought=(props)=> {
    const { username } = props;
    const [boughtData, setBoughtData]=useState()
    const boughtDat = useSelector((state) => state.bought.todos);
    const dispatch=useDispatch()
    useEffect(() => {
      const handleAction = async () => {
        await dispatch(showNewBought(JSON.stringify({name: username})));
        setBoughtData(boughtDat[0])
      };
      if (boughtData === undefined) {
        handleAction();
      }
    }, [boughtData, dispatch, boughtDat, username]);
    return (
        <div className="showBoughtt">
           {boughtData!=undefined && (
            boughtData.map((item)=> (
<div className="boughtDataItem">
<img src={item.logo} alt="logo" className="boughtDataImage" />
    <div className="boughtItemBlock">
    <div className="lineOfBought">
    <p className="boughtDataTitle">{item.title}</p>
    <p className="boughtDataPrice">{item.price}rub</p>
    </div>
    <p className="boughtItemDescribtion">
      {item.describtion}
    </p>
    </div>
</div>
            ))
           )}
           <button onClick={()=> {console.log(boughtDat)}}>cdscdsdsds</button>
    </div>
    )
}
export default ShowBought */


/*
import "./showBought.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { showNewBought } from "../../redux/reducers/showBoughtReducer.js";
import { useDispatch, useSelector } from "react-redux";
const ShowBought=(props)=> {
    const { username } = props;
    const [boughtData, setBoughtData]=useState()
    const bought = useSelector((state) => state.bought.todos);
const dispatch=useDispatch()

    useEffect(() => {
      const handleAction = async () => {
        await dispatch(showNewBought(JSON.stringify({ name: username })));
      };
      handleAction();
    }, []);
    
    
    useEffect(() => {
   
      if(bought!=undefined){
        console.log(bought)
      }
    }, [bought]);
    
   useEffect(()=> {
        fetch('http://localhost:5000/bought', {
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
                setBoughtData(data)
            })
            .catch((error) => console.error('Error:', error));
          
  
    }, []) 
    return (
        <div className="showBoughtt">
           {boughtData!=undefined && (
            boughtData.map((item)=> (
<div className="boughtDataItem">
<img src={item.logo} alt="logo" className="boughtDataImage" />
    <div className="boughtItemBlock">
    <div className="lineOfBought">
    <p className="boughtDataTitle">{item.title}</p>
    <p className="boughtDataPrice">{item.price}rub</p>
    </div>
    <p className="boughtItemDescribtion">
      {item.describtion}
    </p>
    </div>
</div>
            ))
           )}
    </div>
    )
}
export default ShowBought */

import "./showBought.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const ShowBought=(props)=> {
    const { username } = props;
    const [boughtData, setBoughtData]=useState()
    useEffect(()=> {
        fetch('http://localhost:5000/bought', {
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
                setBoughtData(data)
            })
            .catch((error) => console.error('Error:', error));
          
  
    }, [])
    return (
        <div className="showBoughtt">
           {boughtData!=undefined && (
            boughtData.map((item)=> (
<div className="boughtDataItem">
<img src={item.logo} alt="logo" className="boughtDataImage" />
    <div className="boughtItemBlock">
    <div className="lineOfBought">
    <p className="boughtDataTitle">{item.title}</p>
    <p className="boughtDataPrice">{item.price}rub</p>
    </div>
    <p className="boughtItemDescribtion">
      {item.describtion}
    </p>
    </div>
</div>
            ))
           )}
    </div>
    )
}
export default ShowBought