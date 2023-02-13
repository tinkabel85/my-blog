import React, { useContext }  from "react";
import { StateContext } from "../../../state/context";
import Comment from "../Comment/Comment";
import "./CommentsList.scss";


function CommentsList(props) {
	const { state } = useContext(StateContext);
	const { comments } = state;

	return (
		<ul className="CommentsList">
			{comments ? comments.map((comment, i) => (
				<li key={i}>
					<Comment author={comment.author} content={comment.content} />
				</li>
			)) : null}
		</ul>
	);
}

export default CommentsList;
