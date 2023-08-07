
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { test, setData } from "../../redux/reducers/filteredItemsReducer.js";
import FoundPageItemsElem from "../foundPageItemsElem/foundPageItemsElem.js";
import { Link } from "react-router-dom";
const FoundPageItems = (props) => {
  const data = useSelector((state) => state.testSlice.data);
  const dispatch = useDispatch();
  const [elems, setElems] = useState([]);
  const { id } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const el = await dispatch(test(id));
        dispatch(setData(el));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch, id]);
  useEffect(() => {
    if (data && data.payload) {
      setElems(data.payload);
      console.log(data.payload)
    }
  }, [data]);
  return (
    <>
    <div className="productsPagesTable">
      {elems!=undefined &&
        elems.map((item, index) =>(
<FoundPageItemsElem item={item} key={index}  />
        )
        )}
        </div>
   </>
  );
};

export default FoundPageItems;
