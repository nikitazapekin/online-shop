import './foundPageItemsElem.scss';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const FoundPageItemsElem = ({ item }) => {
	return (
		<>
		<ErrorBoundary>
			<Link style={{ textDecoration: 'none', color: '#fff' }} to={`/tovarInfo/${item.id}`}>
				<div className="productsPagesTableItem">
					<div className="productsPagesTableItemWrapper">
						<img src={item.logo} className="productsPagesTableItemImage" alt="logo" />
						<p className="productsPagesTableItemTitle">{item.title}</p>
						<p className="productsPagesTableItemTitle">{item.price}rub</p>
					</div>
					<div className="productsPagesTableItemFon"></div>
				</div>
			</Link>
		</ErrorBoundary>
		</>
	);
};
export default FoundPageItemsElem;
//ГОТОВо