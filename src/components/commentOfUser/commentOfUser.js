import './commentOfUser.scss';
import User from './user.jpg';
import StarsOfUserComment from '../starsOfUserComment/starsOfUserComment.js';
const CommentOfUser = ({ author, text, rate, date }) => {
	return (
		<div className="commentOfUser">
			<img className="avatarOfUser" src={User} alt="logo" />
			<div className="blockOfUserComment">
				<p className="userCommentTitle">{author}</p>
				<p className="userCommentText">{text}</p>
			</div>

			{rate != undefined && date != undefined && (
				<>
					<StarsOfUserComment rate={rate} />
					<p className="userCommentDate">{date.slice(0, 10)}</p>
				</>
			)}
		</div>
	);
};
export default CommentOfUser;
//ГОТОВО