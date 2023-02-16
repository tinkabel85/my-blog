import React from "react";
import useAuthentication from "../../../hooks/useAuthentication/useAuthentication";
import "./LoginForm.scss";

function LoginForm({ dispatch, isAuthenticated }) {

	const { setUserName, setPassword, handleLogin, userName, password } =
		useAuthentication(dispatch, isAuthenticated, );

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

export default LoginForm;
