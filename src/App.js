import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import BlogsList from "./components/BlogsList/BlogsList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
		{  title: "Post 1", author: "Author1",  content: "Content of post 1" },
		{ title: "Post 2", author: "Author12", content: "Content of post 2" },
	]);

	return (
		<div className="App">
			<Header />
      <Form addPost={(post) => setPosts([...posts, post]) } />
      <BlogsList posts={posts} setPosts= {setPosts}/>
		</div>
	);
}

export default App;
