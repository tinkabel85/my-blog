import { useState } from "react";
import "./PostArticle.scss";
import CommentsList from "../../components/CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";

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
					comments: [],
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
		<>
			<div className="PostArticle" onDoubleClick={() => onClickEdit()}>
				<li className="PostArticle-wrapper">
					<div className="PostArticle__header">
						<div className="PostArticle__header--title">
							Title: {post.title}
						</div>
						<div className="PostArticle__header--author">
							Author: {post.author}
						</div>
					</div>
					<div className="PostArticle__content">{post.content}</div>
				</li>
			</div>
			<div className="PostArticle__comments">
				<p className="PostArticle__comments-text">Join the discussion!</p>

				<CommentForm
					addComment={(comment) => {
						const newPosts = [...posts].map((p) => {
							if (post.id === p.id) {
								return {
									...p,
									comments: [...post.comments, comment],
								};
							}
							return p;
						});

						setPosts(newPosts);
					}}
				/>
					<CommentsList comments={post.comments}  />
			</div>
		</>
	);
}

export default PostArticle;
