import { useState } from "react";
import "./PostArticle.css";

function PostArticle(props) {
	const { post, setPosts, posts } = props;
	const [isEditing, setEditing] = useState(false);
	const [postTitle, setPostTitle] = useState(post.title);
	const [postAuthor, setPostAuthor] = useState(post.author);
	const [postContent, setPostContent] = useState(post.content);

	const onClickEdit = (post) => {
		setEditing(true);
		console.log("edits");
	};

	const handleSave = () => {
		const newPosts = [...posts].map((p) => {
			if (post.id === p.id) {
				return {
					...p,
					title: postTitle,
					author: postAuthor,
					content: postContent,
				};
			}
			return p;
		});

		setPosts(newPosts);
		setEditing(false);
	};

	const handleCancel = () => {
		setEditing(false);
	};

	return isEditing ? (
		<div className="post--edits">
			<input
				type="text"
				value={postTitle}
				onChange={(e) => setPostTitle(e.target.value)}
			/>
			<input
				type="text"
				value={postAuthor}
				onChange={(e) => setPostAuthor(e.target.value)}
			/>
			<textarea
				value={postContent}
				onChange={(e) => setPostContent(e.target.value)}
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
