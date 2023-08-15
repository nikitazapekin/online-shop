import { useState, useEffect } from 'react';
import './starsOfUserComment.scss';
const StarsOfUserComment = (props) => {
	const [line, setLine] = useState('');
	useEffect(() => {
		let i = 0;
		while (i < rate) {
			i++;
			setLine((prev) => [...prev, '★']);
		}
	}, []);
	const { rate } = props;
	return <div className="ratingr">{line}</div>;
};
export default StarsOfUserComment;
//ГОТОВО