import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoundPageItemsElem from '../foundPageItemsElem/foundPageItemsElem.js';
import { foundPageItemsPost } from '../../redux/reducers/foundPageItems/foundPageItemsThunk.js';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const FoundPageItems = ({ id }) => {
	const dispatch = useDispatch();
	const [elems, setElems] = useState([]);
	const state = useSelector((state) => state.foundPageItemsReducer);
	useEffect(() => {
		dispatch(foundPageItemsPost(id));
	}, []);
	useEffect(() => {
		setElems(state.post);
	}, [state]);
	return (
		<>
		<ErrorBoundary>
			<div className="productsPagesTable">
				{elems != undefined && elems.map((item, index) => <FoundPageItemsElem item={item} key={index} />)}
			</div>
		</ErrorBoundary>
		</>
	);
};

export default FoundPageItems;
//готовл
