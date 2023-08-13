import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './favDataItem.js';
const FavDataItem = ({ item, index, username, removeProduct }) => {
	return (
		<div className="favDataItem">
			<Link style={{ textDecoration: 'none' }} to={`/tovarInfo/${item.id}`}>
				<img src={item.logo} alt="logo" className="favDataImage" />
				<div className="favItemBlock">
					<div className="lineOfFav">
						<p className="favDataTitle">{item.title}</p>
						<p className="favDataPrice">{item.price}rub</p>
					</div>
					<p className="favItemDescribtion">{item.describtion}</p>
				</div>
			</Link>
			<FontAwesomeIcon
				className="favTrashCan"
				icon={faTrashCan}
				bounce
				style={{ color: '#ec0909' }}
				onClick={() => {
					removeProduct(index, item.id, username);
				}}
			/>
		</div>
	);
};
export default FavDataItem;
//ГОТОВО