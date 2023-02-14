import Comment from "../Comment/Comment";
import "./CommentsList.scss";

function CommentsList(props) {
	return (
		<ul className="CommentsList">
			{props.comments
				? props.comments.map((comment, i) => (
						<li key={i}>
							<Comment author={comment.author} content={comment.content} />
						</li>
				  ))
				: null}
		</ul>
	);
}

export default CommentsList;
