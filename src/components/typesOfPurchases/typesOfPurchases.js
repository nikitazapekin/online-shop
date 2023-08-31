import './typesOfPurchases.scss';
import { typesOfPurchases } from '../../renderingConstants.js';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const TypesOfPurchases = () => {
	const items = useRef();
	const navigate = useNavigate();
	useEffect(() => {
		const elems = Array.from(items.current.children);
		const handleClick = (item) => {
			navigate(`/catalogue/${item.textContent}`);
		};
		elems.forEach((item) => {
			item.addEventListener('click', () => handleClick(item));
		});
		return () => {
			elems.forEach((item) => {
				item.removeEventListener('click', () => handleClick(item));
			});
		};
	}, []);

	return (
		<ErrorBoundary>
		<div ref={items} className="typesOfPurchases">
			{typesOfPurchases.map((item) => (
				<p key={item} className="typeOfPurchase">
					{item}
				</p>
			))}
		</div>
			</ErrorBoundary>
	);
};

export default TypesOfPurchases;

//ГОТОВО
