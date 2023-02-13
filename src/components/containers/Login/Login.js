import { useState, useContext, useEffect } from "react";
import { StateContext } from "../../../state/context";
import Actions from "../../../state/Actions";
import "./Login.scss";

const storedUsers = [
	{ username: "oksana", password: "1234" },
	{ username: "user", password: "111" },
];

function Login(props) {
	const { state, dispatch } = useContext(StateContext);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		if (!userName || !password) {
			return alert("User name or user password cannot be empty");
		}

		const user = storedUsers.find(
			(user) => user.username === userName && user.password === password
		);
		if (!user) {
			console.log("error, user is not found");
			return alert("Your username or password are not valid");
		} else {
			let verifiedUser = { userName, password };
			localStorage.setItem("verifiedUser", JSON.stringify(verifiedUser));
			//props.setIsAuthenticated(true);
			dispatch({ type: Actions.login });
			console.log("Your are successfully logged in");
		}
		setUserName("");
		setPassword("");
	};

	useEffect(() => {
		let verifiedUser = JSON.parse(localStorage.getItem("verifiedUser"));
		if (verifiedUser) {
			const user = storedUsers.find(
				(user) =>
					user.username === verifiedUser.userName &&
					user.password === verifiedUser.password
			);
			if (user) {
				dispatch({ type: Actions.verifyUser });
				console.log('verified is true')
			}
		}
	}, [props.isAuthenticated]);

	return (
		<div className="Login">
			<div className="Login__text">
				You need to login to access posts. <br></br>Please enter your username
				and password and click Login.
			</div>
			<form onSubmit={handleLogin} className="Login__form">
				<input
					className="Login__form-input"
					value={userName}
					type="text"
					onInput={(e) => setUserName(e.target.value)}
				></input>

				<input
					className="Login__form-input"
					value={password}
					type="password"
					onInput={(e) => setPassword(e.target.value)}
				></input>

				<br></br>
				<input type="submit" value="Login" className="Login__btn" />
			</form>
		</div>
	);
}

export default Login;
