import { useParams } from 'react-router';
import './userPageCard.scss';
import { useState, useEffect } from 'react';
import ShowFavourite from '../showFavourite/showFavourite.js';
import ShowBought from '../showBought/showBought.js';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from '../../redux/reducers/userPageCard/userPageCardThunk.js';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const UserPageCard = () => {
	const { id } = useParams();
	const dataa = { id: id };
	const dispatch = useDispatch();
	const [dataUser, setDataUser] = useState();
	const [selectPurchases, setSelectPurchases] = useState(false);
	const state = useSelector((state) => state.userPageReducer);
	useEffect(() => {

	dispatch(postUser(dataa));

	}, []);
	useEffect(() => {
		setDataUser(state.post);
	}, [state]);
	return (
		<ErrorBoundary>

		<div className="userPageCard">
			<button onClick={()=> {
				throw new Error("test")
			}}>csc</button>
			{dataUser != undefined && (
				<div>
					<div className="userPageCardBlock">
						<h1 className="userPageTitle">{dataUser.username}</h1>
						{dataUser.date != undefined && (
							<h2 className="userPageLogged">Date of registration: {dataUser.date.slice(0, 10)}</h2>
							)}
					</div>
				</div>
			)}
			<div className="userFavouriteAndBought">
				<p onClick={() => setSelectPurchases(false)} className="showFavourite">
					Favourite
				</p>
				<p onClick={() => setSelectPurchases(true)} className="showBought">
					Purchased
				</p>
			</div>
			{dataUser != undefined && !selectPurchases && (
				<>
					<ShowFavourite />
				</>
			)}
			{dataUser != undefined && selectPurchases && (
				<>
					<ShowBought username={dataUser.username} />
				</>
			)}

			<div className="userPageCardFon"></div>
		
		</div>
			</ErrorBoundary>
	
	);
};
export default UserPageCard;
 