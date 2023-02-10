import React from "react";
import { useState } from "react";
import "./CommentForm.scss";

function CommentForm(props) {
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");

	const handleCommentSubmit = (e) => {
		e.preventDefault();
		props.addComment({
			author,
			content,
		});
		setAuthor("");
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
					onInput={(e) => setAuthor(e.target.value)}
					type="text"
					placeholder="your name"
					value={author}
					className="CommentForm__author"
				></input>
				<div className="CommentForm__wrapper">
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
				</div>
			</form>
		</div>
	);
}

export default CommentForm;
