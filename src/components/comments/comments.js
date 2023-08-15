import './comments.scss';
import { useState, useRef, useEffect } from 'react';
import CommentOfUser from '../commentOfUser/commentOfUser.js';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthFunc } from '../../functions/authFunctions.js';
import { commentsPost } from '../../redux/reducers/comments/commentsReducerThunk.js';
import Unlogged from '../../components/unlogged/unlogged.js';
import { rating } from '../../functions/authFunctions.js';
const Comments = ({ id, item, setItem }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.commentsReducer);
	const [authData, setAuthData] = useState();
	const inputForm = useRef();
	const [isUnlogged, setIsUnlogged] = useState(false);
	const [form, setForm] = useState({
		comment: '',
		rate: '',
	});
	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};
	const stars = useRef();
	useEffect(() => {
		setAuthData(isAuthFunc());
	}, []);
	useEffect(() => {
		const handleStarClick = (event) => {
			if (stars.current.children != undefined) {
				let items = stars.current.children;
				for (let i = 0; i < items.length; i += 2) {
					if (stars.current.children[i].checked) {
						let rate = i;
						setForm({ ...form, rate: rating(rate) });
					}
				}
			}
		};

		if (stars.current.children != undefined) {
			Object.values(stars.current.children).forEach((item) => {
				item.addEventListener('click', handleStarClick);
			});
		}
	}, []);

	const handleAction = () => {
		if (authData.isAuth) {
			dispatch(
				commentsPost({
					form: form,
					id: id,
					date: new Date(),
					username: authData.user,
					textComment: inputForm.current.value,
				}),
			);
		} else {
			setIsUnlogged(true);
		}
	};

	useEffect(() => {
		if (state.post.comments != undefined) {
			setItem(state.post);
		}
	}, [state]);
	return (
		<div className="commentsForm">
			<div className="addComment">
				<input
					ref={inputForm}
					onChange={changeHandler}
					name="comment"
					type="text"
					className="addCommentForm"
					placeholder="type comment"
				/>
				<button
					className="addCommentBtn"
					onClick={() => {
						handleAction();
					}}
				>
					Send{' '}
				</button>
				<div className="starRateComment">
					<div ref={stars} className="rating">
						<input type="radio" name="rating" id="r1" />
						<label for="r1"></label>

						<input type="radio" name="rating" id="r2" />
						<label for="r2"></label>
						<input type="radio" name="rating" id="r3" />
						<label for="r3"></label>

						<input type="radio" name="rating" id="r4" />
						<label for="r4"></label>

						<input type="radio" name="rating" id="r5" />
						<label for="r5"></label>
					</div>
				</div>
			</div>

			<Unlogged setIsUnlogged={setIsUnlogged} isUnlogged={isUnlogged} />
			<h1 className="comments">Comments</h1>
			<div className="userCommentsBlock">
				<div className="commentsItems">
					{item.comments != undefined &&
						item.comments.map((elemm, index) => (
							<CommentOfUser
								key={index}
								author={elemm.author}
								rate={elemm.rate}
								text={elemm.text}
								date={elemm.date}
								id={id}
								number={index}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
export default Comments;
