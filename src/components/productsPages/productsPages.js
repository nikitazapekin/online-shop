import './productsPages.scss';
import { useEffect, useState } from 'react';
import ScrollArrow from '../scrollArrow/scrollArrow.js';
import ProductsPagesItem from '../productsPagesItem/productsPagesItem.js';
import { productsPagesPost } from '../../redux/reducers/productsPages/productsPagesThunk.js';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const ProductsPages = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.productsPagesReducer.post);
	const [currentPage, setCurrentPage] = useState(1);
	const [photos, setPhotos] = useState([]);
	const [fetching, setFetching] = useState(true);
	useEffect(() => {
		if (fetching) {
			dispatch(productsPagesPost(currentPage));
		}
	}, [fetching]);
	useEffect(() => {
		console.log(state);
		if (state != null) {
			const inputArray = [...photos, ...state];
			const uniqueIds = new Set();
			const filteredArray = [];

			for (const obj of inputArray) {
				if (!uniqueIds.has(obj.id)) {
					uniqueIds.add(obj.id);
					filteredArray.push(obj);
				}
			}
			setPhotos(filteredArray);
		}
	}, [state]);
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);
	const scrollHandler = (e) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
			setTimeout(() => {
				setFetching(true);
				setCurrentPage((prev) => {
					const upd = prev + 1;
					dispatch(productsPagesPost(upd));
					return upd;
				});
			}, 0);
		}
	};
	return (
		<ErrorBoundary>

		<div className="productsPages">
			<div className="productsPagesTable">
				{photos.map((item, index) => (
					<ProductsPagesItem item={item} key={index} />
				))}
			</div>
			<ScrollArrow />
		</div>
		</ErrorBoundary>
	);
};
export default ProductsPages;
//ГОТОВО