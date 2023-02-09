import "./Header.scss";
import Login from "../Login/Login";
import useSearch from "../../Hooks/useSearch/useSearch";

function Header(props) {
	const [filteredList, setSearchInput] = useSearch(props.posts);

	const changeTheme = () => {
		if (props.theme === "light") {
			props.setTheme("dark");
		} else {
			props.setTheme("light");
		}
	};


	return (
		<div className="Header">
			<input
				className="Header__search"
				type="text"
				placeholder="Search..."
				onInput={(e) => {
					setSearchInput(e.target.value);
					props.setPosts(filteredList)
				}}
			></input>

			<button className="Header__btn--theme" onClick={changeTheme}>
				Change Theme
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
