import { useState, useEffect } from "react";
import "./Login.scss";

const storedUsers = [
	{ username: "oksana", password: "1234" },
	{ username: "user", password: "111" },
];

function Login(props) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!userName || !password) {
			return alert("User name or user password cannot be empty");
		}
		console.log(userName);
		console.log(password);

		const user = storedUsers.find(
			(user) => user.username === userName && user.password === password
		);
		if (!user) {
			console.log("error, user is not found");
			return alert("Your username or password are not valid");
		} else {
			let varifiedUsers = JSON.parse(localStorage.getItem("varifiedUsers"));
			if (!varifiedUsers) {
				varifiedUsers = [];
			}
			varifiedUsers.push(user);
			localStorage.setItem("varifiedUsers", JSON.stringify(varifiedUsers));
			props.setIsAuthenticated(true);
			console.log("Your are successfully logged in");
		}
		setUserName("");
		setPassword("");
	};

	useEffect(() => {
		console.log("smth");
		let varifiedUsers = JSON.parse(localStorage.getItem("varifiedUsers"));
		if (!varifiedUsers) {
			varifiedUsers = [];
		}
		if (props.isAuthenticated) {
			const user = storedUsers.find(
				(user) => user.username === userName && user.password === password
			);
			varifiedUsers.push(user);
			localStorage.setItem("varifiedUsers", JSON.stringify(varifiedUsers));
		}
	}, [props.isAuthenticated, userName, password]);

	return (
		<div className="Login">
			<div className="Login__text">
				You need to login to access posts. <br></br>Please enter your username
				and password and click Login.
			</div>
			<form onSubmit={handleSubmit} className="Login__form">
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
