import { useContext, useState, useReducer } from "react";
import { StateContext } from "../../../state/context";
import Actions from "../../../state/Actions";
import "./Form.scss";

function Form(props) {
	const { state, dispatch } = useContext(StateContext);
	const [postTitle, setPostTitle] = useState("");
	const [postAuthor, setPostAuthor] = useState("");
	const [postContent, setPostContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!postTitle || !postAuthor || !postContent) {
			return alert("Your should provide all info");
		}
		console.log(postTitle, postAuthor, postContent);
		dispatch({
			type: Actions.addPosts,
			payload: {
				posts: [
					{
						id: props.generateId(),
						title: postTitle,
						author: postAuthor,
						content: postContent,
					},
				],
			},
		});
		console.log("i am a new post added");
		setPostTitle("");
		setPostAuthor("");
		setPostContent("");
	};

	return (
		<form onSubmit={handleSubmit} className="Form">
			<p>Your can create here your new post</p>
			<input
				value={postTitle}
				type="text"
				className="Form__input"
				placeholder="Create a title for your post..."
				onInput={(e) => setPostTitle(e.target.value)}
			/>
			<input
				value={postAuthor}
				type="text"
				className="Form__input"
				placeholder="Here goes your name..."
				onInput={(e) => setPostAuthor(e.target.value)}
			/>
			<textarea
				value={postContent}
				type="text"
				className="Form__input Form__input--text"
				placeholder="Here goes your post..."
				onInput={(e) => setPostContent(e.target.value)}
			/>
			<input type="submit" value="Submit" className="Form__btn" />
		</form>
	);
}

export default Form;
