import { useState } from "react";

function Form(props) {
	const [postTitle, setPostTitle] = useState("");
	const [postAuthor, setPostAuthor] = useState("");
	const [postContent, setPostContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!postTitle || !postAuthor || !postContent) {
			return alert("Your should provide all info");
		}
		console.log(postTitle, postAuthor, postContent);
		props.addPost({
			title: postTitle,
			author: postAuthor,
			content: postContent,
		});
		setPostTitle("");
		setPostAuthor("");
		setPostContent("");
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				value={postTitle}
				type="text"
				className="title"
				placeholder="Create a title for your post"
				onInput={(e) => setPostTitle(e.target.value)}
			/>
			<input
				value={postAuthor}
				type="text"
				className="author"
				placeholder="Here goes your name..."
				onInput={(e) => setPostAuthor(e.target.value)}
			/>
			<input
				value={postContent}
				type="text"
				className="content"
				placeholder="Here goes your post..."
				onInput={(e) => setPostContent(e.target.value)}
			/>
			<input type="submit" value="Submit" className="form__btn" />
		</form>
	);
}

export default Form;
