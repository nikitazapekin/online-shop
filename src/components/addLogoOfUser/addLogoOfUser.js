

import React, { useEffect, useRef, useState } from "react";
import User from "./user.jpg";
import "./addLogoOfUser.scss";

const AddLogoOfUser = (props) => {
 const {id}=props
  const myForm = useRef(null);
  const imageInput = useRef(null);
  const [link, setLink] = useState(User);
const [isAdded, setIsAdded]=useState(false)




const data = JSON.stringify({"id": id});
useEffect(()=> {


fetch('http://localhost:5000/userId', { 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data
})
  .then(response => response.json())
  .then(responseData => {
   // setDataUser(responseData)

    console.log(responseData);
  }) .catch((error) => {
    console.error('Error fetching data:', error);
  }); 
}, [])




  useEffect(() => {
    const handleClick = () => {
      imageInput.current.click();
    };

    const handleImageChange = (event) => {
      let fileInput = event.target;
      let file = fileInput.files[0];

      if (file) {
        let reader = new FileReader();

        reader.onload = function (e) {
          setLink(e.target.result);
          setIsAdded(true)



        

          const data = JSON.stringify({"id": id, "logo": e.target.result});
            fetch('http://localhost:5000/userImage', { 
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: data
            })
              .then(response => response.json())
              .then(responseData => {
              //  setDataUser(responseData)
                console.log(responseData);
              }) .catch((error) => {
                console.error('Error fetching data:', error);
              }); 
          


        };
console.log(file)
        reader.readAsDataURL(file);
      }
    };

    myForm.current.addEventListener("click", handleClick);
    imageInput.current.addEventListener("change", handleImageChange);

    return () => {
        if(myForm.current!=undefined && imageInput.current!=undefined){
      myForm.current.removeEventListener("click", handleClick);
      imageInput.current.removeEventListener("change", handleImageChange);
        }
    };
  }, []);

  return (
    <>
      <form id="myForm" ref={myForm}>
        <input style={{width: "0", height: "0"}} type="file" ref={imageInput} accept="image/*" />
      </form>
      <img
        src={link}
        alt="logo"
        className="userPhoto"
        onClick={() => imageInput.current.click()}
      />
   {!isAdded ?   <div className="plus">  +  </div>  : null}
    </>
  );
};

export default AddLogoOfUser;

