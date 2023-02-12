import { useState, useEffect } from "react";
import "./Header.scss";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import useSearch from "../../Hooks/useSearch/useSearch";

function Header(props) {
	const [filteredList, setSearchInput] = useSearch(props.posts);
	//const [filteredPosts, setFilteredPosts] = useState(props.posts);

	const changeTheme = () => {
		if (props.theme === "light") {
			props.setTheme("dark");
			props.setBtnThemeText('Light Mode');
		} else {
			props.setTheme("light");
			props.setBtnThemeText("Dark Mode");
		}
	};



	// useEffect(() => {
	// 	setFilteredPosts(filteredList);
	// }, [filteredList]);

	return (
		<div className="Header">
			<input
				className="Header__search"
				type="text"
				placeholder="Search..."
				onInput={(e) => {
					setSearchInput(e.target.value);
					props.setPosts(filteredList);
				}}
			></input>
			{props.isAuthenticated && (
				<Logout
					setIsAuthenticated={props.setIsAuthenticated}
					isAuthenticated={props.isAuthenticated}
				/>)}
			<button className="Header__btn--theme" onClick={changeTheme}>
				{props.btnThemeText}
			</button>
			<h1 className="Header__title">This is Oksana's blog</h1>
			{!props.isAuthenticated && (
				<Login
					isAuthenticated={props.isAuthenticated}
					setIsAuthenticated={props.setIsAuthenticated}
				/>
			)}
		</div>
	);
}

export default Header;
