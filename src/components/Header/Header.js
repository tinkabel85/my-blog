import "./Header.scss";
import Login from "../Login/Login";

function Header(props) {
	const changeTheme = () => {
		if (props.theme === "light") {
			props.setTheme("dark");
		} else {
			props.setTheme("light");
		}
	};

	return (
		<div className="Header">
			<button className="Header__btn" onClick={changeTheme}>
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
