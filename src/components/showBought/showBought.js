

import "./showBought.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showNewBout } from "../../redux/reducers/bout.js";
const ShowBought=(props)=> {
  const dispatch=useDispatch()

    const { username } = props;
    const [boughtData, setBoughtData]=useState()
 
    useEffect(()=> {
        fetch('http://localhost:5000/bought', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
      
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