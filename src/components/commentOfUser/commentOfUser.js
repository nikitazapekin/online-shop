import "./commentOfUser.scss"
import User from "./user.jpg"
const CommentOfUser=(props)=> {
    const {author, text, rate, date}= props
    return (
        <div className="commentOfUser">
<img className="avatarOfUser" src={User}  alt="logo" />
<div className="blockOfUserComment">
    <p className="userCommentTitle">{author}</p>
    <p className="userCommentText">{text}</p>
 
</div>
<p className="userCommentDate">{date}</p>
        </div>
    )
}
export default CommentOfUser