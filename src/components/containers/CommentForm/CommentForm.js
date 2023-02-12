import React from "react";
import { useState } from "react";
import "./CommentForm.scss";

function CommentForm(props) {
	const [content, setContent] = useState("");

let verifiedUser = JSON.parse(localStorage.getItem("verifiedUser"));
	
	const handleCommentSubmit = (e) => {
		e.preventDefault();
		props.addComment({
			author: verifiedUser.userName,
			content,
		});
		setContent("");
	};

	const enableCommentButton = () => {
		return content ? false : true;
	};

	const changeButtonStyle = () => {
		return content ? "btn--enabled" : "btn--disabled";
	};

	return (
		<div>
			<form
				//onSubmit={handleCommentSubmit}
				className="CommentForm"
			>
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
					disabled={enableCommentButton()}
					id={changeButtonStyle()}
					className="CommentForm__btn"
				></input>
			</form>
		</div>
	);
}

export default CommentForm;
