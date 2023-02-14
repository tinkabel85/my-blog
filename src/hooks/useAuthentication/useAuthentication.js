import { useState, useEffect } from "react";
import Actions from "../../state/Actions";
import { users as storedUsers } from "../../state/models/users";

export default function useAuthentication(dispatch, isAuthenticatedStartValue) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedStartValue);

    const handleLogin = () => {
		const user = storedUsers.find(
			(user) => user.username === userName && user.password === password
		);

		if (!user) {
			return alert("Your username or password are not valid");
		} else {
			let verifiedUser = { userName, password };
			localStorage.setItem("verifiedUser", JSON.stringify(verifiedUser));
			dispatch({ type: Actions.login, payload: {user: verifiedUser} });
            setIsAuthenticated(true);
		}

		setUserName("");
		setPassword("");
    }

	useEffect(() => {
		let verifiedUser = JSON.parse(localStorage.getItem("verifiedUser"));
		if (verifiedUser) {
			const user = storedUsers.find((user) =>
                user.username === verifiedUser.userName &&
                user.password === verifiedUser.password
			);

			if (user) {
				dispatch({ type: Actions.login, payload: {user} });
			}
		}
	}, [isAuthenticated, dispatch]);

    return {setUserName, setPassword, handleLogin, userName, password};
}
