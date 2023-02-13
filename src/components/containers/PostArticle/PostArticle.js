import { useState, useContext } from "react";
import { StateContext } from "../../../state/context";
import "./PostArticle.scss";
import CommentsList from "../../components/CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import Actions from "../../../state/Actions";

function PostArticle({ post, posts }) {
	const { state, dispatch } = useContext(StateContext);

	const [isEditing, setEditing] = useState(false);
	const [postTitle, setPostTitle] = useState(post.title);
	const [postAuthor, setPostAuthor] = useState(post.author);
	const [postContent, setPostContent] = useState(post.content);
	console.log("checking posts", posts);

	const onClickEdit = (post) => {
		setEditing(true);
		console.log("edits");
	};

	const handleSave = () => {
		const updatedPosts = state.posts.map((p) => {
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
		dispatch({ type: Actions.updatePosts, payload: { updatedPosts } });
		setEditing(false);
	};

	const handleCancel = () => {
		setEditing(false);
	};

	const addComment = (comment) => {
		const updatedPosts = [...posts].map((p) => {
			if (post.id === p.id) {
				return {
					...p,
					comments: [...post.comments, comment],
				};
			}
			return p;
		});
		dispatch({ type: Actions.updatePosts, payload: { updatedPosts } });
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

				<CommentForm addComment={addComment} />
					<CommentsList
						// comments={post.comments}
					/>
			</div>
		</>
	);
}

export default PostArticle;
