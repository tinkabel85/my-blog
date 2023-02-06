import { useState } from "react";
import "./PostArticle.css";

function PostArticle(props) {
	const { post, setPosts } = props;
	const [isEditing, setEditing] = useState(false);

	const onClickEdit = (post) => {
		setEditing(true);
		console.log("edits");
	};

	const handleSave = () => {
		setPosts()
	};

	const handleCancel = () => {
		setEditing(false);
	};

	return isEditing ? (
		<div className="post--edits">
			<input
				type="text"
				value={post.title}
				onChange={(e) => post.setPostTitle(e.target.value)}
			/>
			<input
				type="text"
				value={post.author}
				onChange={(e) => post.setPostAuthor(e.target.value)}
			/>
			<textarea
				value={post.content}
				onChange={(e) => post.setPostContent(e.target.value)}
			/>
			<div className="buttons--edits">
				<button onClick={handleSave}>Save</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	) : (
		<div className="post" onDoubleClick={() => onClickEdit()}>
			<li className="post__wrapper">
				<div className="post__header">
					<div className="post__title">{post.title}</div>
					<div className="post__author">{post.author}</div>
				</div>
				<textarea className="post__content">{post.content}</textarea>
			</li>
		</div>
	);
}

export default PostArticle;
