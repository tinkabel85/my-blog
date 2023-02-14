import { useState, useEffect } from "react";
import { useContext } from "react";
import "./Header.scss";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import useSearch from "../../Hooks/useSearch/useSearch";
import Actions from "../../../state/Actions";
import { StateContext } from "../../../state/context";

function Header(props) {
	const { state, dispatch } = useContext(StateContext);
	const [filteredList, setSearchInput] = useSearch(state.posts);

	const changeTheme = () => {
		if (state.theme === "light") {
			dispatch({ type: Actions.changeTheme, payload: { theme: "dark" } });
			dispatch({
				type: Actions.changeBtnThemeText,
				payload: { btnThemeText: "Light Mode" },
			});
		} else {
			dispatch({ type: Actions.changeTheme, payload: { theme: "light" } });
			dispatch({
				type: Actions.changeBtnThemeText,
				payload: { btnThemeText: "Dark Mode" },
			});
		}
	};

	const logout = () => {
		dispatch({ type: Actions.logout });
	};

	const login = () => {
		dispatch({ type: Actions.login });
	};

	useEffect(() => {
		dispatch({
			type: Actions.setFiltered,
			payload: { filtered: filteredList },
		});
	}, [filteredList]);

	return (
		<div className="Header">
			<input
				className="Header__search"
				type="text"
				placeholder="Search..."
				onInput={(e) => {
					setSearchInput(e.target.value);
				}}
			></input>
			{state.isAuthenticated && (
				<Logout
					setIsAuthenticated={logout}
					isAuthenticated={state.isAuthenticated}
				/>
			)}
			<button className="Header__btn--theme" onClick={changeTheme}>
				{state.btnThemeText}
			</button>
			<h1 className="Header__title">This is Oksana's blog</h1>
			{!state.isAuthenticated && (
				<Login
					isAuthenticated={state.isAuthenticated}
					setIsAuthenticated={login}
				/>
			)}
		</div>
	);
}

export default Header;
