import { useState } from "react";
import "./PostArticle.css";

function PostArticle(props) {
	const { post, setPost } = props;
	const [isEditing, setEditing] = useState(false);

	const onClickEdit = (post) => {
		setEditing(true);
		console.log("edits");
	};

	const handleSave = () => {
	}

	const handleCancel = () => {
		setEditing(false);
		setTitle(post.title);
		setAuthor(post.author);
		setContent(post.content);
	};

	return (
		<>
			{isEditing ? (
				<div>
					<input
						type="text"
						value={post.title}
						onChange={(e) => post.setTitle(e.target.value)}
					/>
					<input
						type="text"
						value={post.author}
						onChange={(e) => post.setAuthor(e.target.value)}
					/>
					<textarea
						value={post.content}
						onChange={(e) => post.setContent(e.target.value)}
					/>
					<button>Save</button>
					<button onClick={handleCancel}>Cancel</button>
				</div>
			) : (
				<div className="post" onDoubleClick={() => onClickEdit()}>
					<li className="post__wrapper">
						<div className="post__header">
							<div className="post__title">{post.title}</div>
							<div className="post__author">{post.author}</div>
						</div>
						<p className="post__content">{post.content}</p>
					</li>
				</div>
			)}
		</>
	);
}

export default PostArticle;
