import { useState, createContext, useEffect, useReducer } from "react";
import Header from "./components/containers/Header/Header";
import Form from "./components/containers/Form/Form";
import BlogList from "./components/containers/BlogList/BlogList";
import "./App.css";
import initialState from "./state/initialState";
import stateReducer from "./state/reducer/stateReducer";
import Actions from "./state/Actions";
import { StateContext } from "./state/context";

let s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};

function App() {
	const [state, dispatch] = useReducer(stateReducer, initialState);

	useEffect(() => {
		if (localStorage.getItem("verifiedUser")) {
			dispatch({ type: Actions.verifyUser });
		}
		let postsArr = JSON.parse(localStorage.getItem("posts"));
		if (!postsArr) {
			postsArr = [
				{
					id: s4(),
					title: "Post 1",
					author: "Author1",
					content: "Content of post 1",
					comments: [{ author: "Oksana", content: "Hello" }],
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
		dispatch({ type: Actions.addPosts, payload: { posts: postsArr } });
	}, []);

	useEffect(() => {
		localStorage.setItem("posts", JSON.stringify(state.posts));
	}, [state.posts]);

	useEffect(() => {
		document.body.className = state.theme;
	}, [state.theme]);

	//const [filteredPosts, setFilteredPosts] = useState([]);

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			<div className="App">
				<Header />
				{state.isAuthenticated && (
					<>
						<Form generateId={s4} />
						<BlogList />
					</>
				)}
			</div>
		</StateContext.Provider>
	);
}

export default App;

