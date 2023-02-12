import { useEffect } from "react";
import "./Logout.scss";

function Logout(props) {
	const handleLogout = () => {
		props.setIsAuthenticated(false);
		console.log("isAuthenticated is false");
		localStorage.removeItem("verifiedUser");
	};

	// useEffect(() => {
	// 	if (!props.isAuthenticated) {
	// 		localStorage.removeItem("verifiedUser");
	// 	}
	// }, [props.isAuthenticated]);

	return (
		<div className="Logout">
			<button className="Logout__btn" onClick={handleLogout}>
				Sign out
			</button>
		</div>
	);
}

export default Logout;
