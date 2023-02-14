import { useEffect } from "react";
import useSearch from "../../../hooks/useSearch/useSearch";
import useTheme from "../../../hooks/useTheme/useTheme";
import Actions from "../../../state/Actions";
import LoginForm from "../LoginForm/LoginForm";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./Header.scss";


function Header({state, dispatch}) {
	const [filteredList, setSearchInput] = useSearch(state.posts);
	const [theme, setTheme] = useTheme(dispatch, state.theme);

	useEffect(() => {
		dispatch({
			type: Actions.setFiltered,
			payload: { filtered: filteredList },
		});
	}, [filteredList, dispatch]);

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
			{state.isAuthenticated && (<LogoutButton
					dispatch={dispatch}
					setIsAuthenticated={() => dispatch({ type: Actions.logout })}
					isAuthenticated={state.isAuthenticated}
				/>)
			}
			<button className="Header__btn-theme" onClick={() => setTheme(theme === 'light' ? 'dark': 'light')}>
				{state.btnThemeText}
			</button>
			<h1 className="Header__title">This is Oksana's blog</h1>
			{!state.isAuthenticated && (<LoginForm
					dispatch={dispatch}
					isAuthenticated={state.isAuthenticated}
				/>)
			}
		</div>
	);
}

export default Header;
