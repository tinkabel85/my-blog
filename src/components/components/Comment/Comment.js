import React from "react";
import './Comment.scss';


function Comment(props) {
	return (
		<div className="Comment">
			<div className="Comment__author">{props.author}</div>
			<div className="Comment__content">{props.content}</div>
		</div>
	);
}

export default Comment;
