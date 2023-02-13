import { useContext } from "react";
import { StateContext } from "../../../state/context";
import Actions from "../../../state/Actions";
import "./Logout.scss";

function Logout(props) {
	const { state, dispatch } = useContext(StateContext);

	const handleLogout = () => {
		dispatch({ type: Actions.logout });
		console.log("isAuthenticated is false");
		localStorage.removeItem("verifiedUser");
	};

	return (
		<div className="Logout">
			<button className="Logout__btn" onClick={handleLogout}>
				Sign out
			</button>
		</div>
	);
}

export default Logout;
