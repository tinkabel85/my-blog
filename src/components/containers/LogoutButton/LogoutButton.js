import Actions from "../../../state/Actions";
import "./LogoutButton.scss";


function LogoutButton({dispatch}) {
	const handleLogout = () => {
		dispatch({ type: Actions.logout });
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

export default LogoutButton;
