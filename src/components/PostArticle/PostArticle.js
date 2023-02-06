import { useState } from "react";

function PostArticle(props) {
	const { post } = props;
	const [isEditing, setEditing] = useState(false);

	const onClickEdit = (post) => {
		setEditing(true);
		console.log("edits");
	};

	return (
		<div className="post">
			<li>
				<div className="post__title">{post.title}</div>
				<div className="post__author">{post.author}</div>
				<div className="post__content">{post.content}</div>
			</li>
			<button onClick={() => onClickEdit(post)} value="edit"></button>
		</div>
	);
}

export default PostArticle;
