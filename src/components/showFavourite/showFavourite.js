import './showFavourite.scss';
import { useEffect, useState, useRef } from 'react';
import { showFavouritePost } from '../../redux/reducers/showFavourite/showFavouriteThunk.js';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthFunc } from '../../functions/authFunctions.js';
import { removeFromFavPost } from '../../redux/reducers/removeFromFav/removeFromFavThunk.js';
import { payForAllPost } from '../../redux/reducers/payForAll/payForAllThunk.js';
import FavDataItem from '../favDataItem/favDataItem.js';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const ShowFavourite = () => {
	const boughtProducts = useRef();
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const state = useSelector((state) => state.showFvReducer);
	const [favData, setFavData] = useState();
	console.log(favData);
	const [price, setPrice] = useState(0);
	const [isRemoving, setIsRemoving] = useState(false);
	const [removingPrice, setRemovingPrice] = useState();
	useEffect(() => {
		let values = isAuthFunc();
		setUsername(values.user);
	}, []);
	useEffect(() => {
		let values = isAuthFunc();
		setUsername(values.user);

		if (favData !== null && favData !== undefined) {
			console.log(state);
			console.log(favData);
		} else {
			dispatch(showFavouritePost({ name: values.user }));
		}
	}, [favData]);
	useEffect(() => {
		try {
			if (state.post.fav != null && state.post.fav != undefined) {
				setFavData(state.post.fav);
			}
		} catch (err) {
			console.log(err);
		}
	}, [state.post]);
	useEffect(() => {
		if (favData != undefined && !isRemoving) {
			favData.forEach((item) => {
				setPrice((prev) => prev + item.price);
			});
			setIsRemoving(false);
		}
		if (isRemoving) {
			setPrice((prev) => prev - removingPrice);
		}
	}, [favData]);
	const removeProduct = (index, id, username) => {
		boughtProducts.current.children[index].style.display = 'none';
		dispatch(removeFromFavPost({ id: id, name: username }));
	};
	const pay = () => {
		setPrice(0);
		dispatch(payForAllPost({ data: favData, name: username }));
		setFavData([]);
	};
	return (
		<ErrorBoundary>

		<div ref={boughtProducts} className="showFavouritee">
			{favData != undefined &&
				favData != null &&
				favData.map((item, index) => (
					<FavDataItem
						key={index}
						removeProduct={removeProduct}
						item={item}
						index={index}
						username={username}
						/>
				))}
			<button
				className="payForAll"
				onClick={() => {
					pay();
				}}
			>
				Pay for everything {price}
			</button>
		</div>
				</ErrorBoundary>
	);
};
export default ShowFavourite;
//ГОТОВО
