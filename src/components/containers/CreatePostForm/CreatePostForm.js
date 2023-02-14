import { useState } from "react";
import Actions from "../../../state/Actions";
import "./CreatePostForm.scss";

function CreatePostForm({ dispatch }) {
	const [postTitle, setPostTitle] = useState("");
	const [postAuthor, setPostAuthor] = useState("");
	const [postContent, setPostContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!postTitle || !postAuthor || !postContent) {
			return alert("Your should provide all info");
		}

		dispatch({
			type: Actions.addPosts,
			payload: {
				posts: [
					{
						title: postTitle,
						author: postAuthor,
						content: postContent,
					},
				],
			},
		});

		setPostTitle("");
		setPostAuthor("");
		setPostContent("");
	};

	return (<form onSubmit={handleSubmit} className="CreatePostForm">
		<p>Your can create here your new post</p>
		<input
			value={postTitle}
			type="text"
			className="CreatePostForm__input"
			placeholder="Create a title for your post..."
			onInput={(e) => setPostTitle(e.target.value)}
		/>
		<input
			value={postAuthor}
			type="text"
			className="CreatePostForm__input"
			placeholder="Here goes your name..."
			onInput={(e) => setPostAuthor(e.target.value)}
		/>
		<textarea
			value={postContent}
			type="text"
			className="CreatePostForm__input CreatePostForm__input--text"
			placeholder="Here goes your post..."
			onInput={(e) => setPostContent(e.target.value)}
		/>
		<input type="submit" value="Submit" className="CreatePostForm__button" />
	</form>);
}

export default CreatePostForm;
