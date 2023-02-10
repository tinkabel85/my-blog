import { useState, useEffect } from "react";
import Header from "./components/containers/Header/Header";
import Form from "./components/containers/Form/Form";
import BlogList from "./components/containers/BlogList/BlogList";
import "./App.css";

let s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};

function App() {
	const [theme, setTheme] = useState("light");
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem("verifiedUser") ? true : false
	);
	const [posts, setPosts] = useState(() => {
		const postsArr = JSON.parse(localStorage.getItem("posts"));
		if (!postsArr) {
			return [
				{
					id: s4(),
					title: "Post 1",
					author: "Author1",
					content: "Content of post 1",
					comments: [{author: 'Oksana', content: 'Hello'}],
				},
				{
					id: s4(),
					title: "Post 2",
					author: "Author12",
					content: "Content of post 2",
					comments: [],
				},
			];
		}
		return postsArr;
	});

	useEffect(() => {
		localStorage.setItem("posts", JSON.stringify(posts));
	}, [posts]);

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	//const [filteredPosts, setFilteredPosts] = useState([]);

	return (
		<div className="App">
			<Header
				setIsAuthenticated={setIsAuthenticated}
				isAuthenticated={isAuthenticated}
				setTheme={setTheme}
				theme={theme}
				posts={posts}
				setPosts={(posts) => setPosts(posts)}
			/>
			{isAuthenticated && (
				<>
					<Form
						generateId={s4}
						addPost={(post) => setPosts([...posts, post])}
					/>
					<BlogList
						posts={posts}
						//setFilteredPost={(filteredPosts) => setFilteredPosts(posts)}
						setPosts={setPosts}
					/>
				</>
			)}
		</div>
	);
}

export default App;
