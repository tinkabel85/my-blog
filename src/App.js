import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import BlogsList from "./components/BlogsList/BlogsList";
import "./App.css";

let s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};
function App() {
	const [posts, setPosts] = useState( () => {
		const postsArr = JSON.parse(localStorage.getItem("posts"));
		if (!postsArr) {
			return [
		{
			id: s4(),
			title: "Post 1",
			author: "Author1",
			content: "Content of post 1",
		},
		{
			id: s4(),
			title: "Post 2",
			author: "Author12",
			content: "Content of post 2",
		},
	];
		}
		return postsArr;
	});


	// useEffect(() => {
	// 	const postsArr = JSON.parse(localStorage.getItem("posts"));
	// 	if (!postsArr) {
	// 		return [];
	// 	}
	// 	if (postsArr.length) {
	// 		setPosts(postsArr);
	// 	}
	// }, []);

	useEffect(() => {
		localStorage.setItem("posts", JSON.stringify(posts));
	}, [posts]);

	return (
		<div className="App">
			<Header />
			{/* <Form generateId={s4} addPost={addPost} /> */}
			<Form generateId={s4} addPost={(post) => setPosts([...posts, post])} />
			<BlogsList posts={posts} setPosts={setPosts} />
		</div>
	);
}

export default App;
