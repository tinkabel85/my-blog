import { useEffect } from "react";

function Logout(props) {
	console.log(props.isAuthenticated);

	const handleLogout = () => {
		props.setIsAuthenticated(false);
		console.log("I am logged out");
		console.log(props.isAuthenticated);
	};

	useEffect(() => {
		if (!props.isAuthenticated) {
			localStorage.removeItem("verifiedUser");
		}
	}, [props.isAuthenticated]);

	return (
		<div className="Logout">
			<button className="Logout__btn" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}

export default Logout;
