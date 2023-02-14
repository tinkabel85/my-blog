import React, { useContext, useState } from "react";
import { StateContext } from "../../../state/context";
import "./CommentForm.scss";

function CommentForm(props) {
	const { state } = useContext(StateContext)
	const [content, setContent] = useState("");
	
	const handleCommentSubmit = (e) => {
		e.preventDefault();
		props.addComment({
			author: state.verifiedUser.userName,
			content,
		});
		setContent("");
	};

	const changeButtonStyle = () => {
		return content ? "btn--enabled" : "btn--disabled";
	};

	return (
		<div>
			<form className="CommentForm">
				<input
					onInput={(e) => setContent(e.target.value)}
					type="text"
					placeholder="add your comment..."
					value={content}
					className="CommentForm__text"
				></input>
				<input
					onClick={handleCommentSubmit}
					type="submit"
					value="post"
					disabled={!content}
					id={changeButtonStyle()}
					className="CommentForm__btn"
				></input>
			</form>
		</div>
	);
}

export default CommentForm;
