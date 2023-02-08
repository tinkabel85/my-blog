import "./Header.css";
import Login from "../Login/Login";

function Header(props) {
	return (
		<div>
			<h1 className="Title">This is a blog</h1>
			<Login isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} />
		</div>
	);
}

export default Header;
