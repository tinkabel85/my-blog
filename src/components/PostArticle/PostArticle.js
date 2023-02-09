import { useState } from "react";
import "./PostArticle.scss";

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
		<div className="PostArticle-edits">
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
			<div className="PostArticle-edits__btns">
				<button onClick={handleSave}>Save</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	) : (
		<div className="PostArticle" onDoubleClick={() => onClickEdit()}>
			<li className="PostArticle-wrapper">
				<div className="PostArticle__header">
					<div className="post__title">{post.title}</div>
					<div className="post__author">{post.author}</div>
				</div>
				<div className="post__content">{post.content}</div>
			</li>
		</div>
	);
}

export default PostArticle;
