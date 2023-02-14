import { useEffect, useReducer } from "react";
import Actions from "../../../state/Actions";
import { StateContext } from "../../../state/context";
import initialState from "../../../state/models/initialState";
import staticDefaultPosts from "../../../state/models/staticDefaultPosts";
import stateReducer from "../../../state/reducer/stateReducer";
import BlogList from "../BlogList/BlogList";
import Form from "../CreatePostForm/CreatePostForm";
import Header from "../Header/Header";
import "./App.scss";


function App() {
	const [state, dispatch] = useReducer(stateReducer, initialState);

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("verifiedUser"));
		if (user) {
			dispatch({ type: Actions.login, payload: {user} });
		}

		let postsArr = JSON.parse(localStorage.getItem("posts"));
		if (!postsArr || !postsArr.length) {
			postsArr = staticDefaultPosts;
		}

		dispatch({ type: Actions.addPosts, payload: { posts: postsArr } });
	}, []);

	useEffect(() => {
		localStorage.setItem("posts", JSON.stringify(state.posts));
	}, [state.posts]);

	useEffect(() => {
		localStorage.setItem("verifiedUser", JSON.stringify(state.verifiedUser));
	}, [state.verifiedUser]);

	useEffect(() => {
		document.body.className = state.theme;
	}, [state.theme]);

	return (<div className="App">
		<StateContext.Provider value={{ state, dispatch }}>
			<Header state={state} dispatch={dispatch} />
			{state.isAuthenticated && (<>
				<Form dispatch={dispatch} />
				<BlogList state={state} />
			</>)}
		</StateContext.Provider>
	</div>);
}

export default App;
