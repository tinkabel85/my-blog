import React, { useContext, useEffect } from "react";
import { StateContext } from "../../../state/context";
import LoginForm from "../../containers/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const { state, dispatch } = useContext(StateContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (state.isAuthenticated) {
			navigate("/");
		}
	}, [navigate, state.isAuthenticated]);

	return (
		<LoginForm dispatch={dispatch} isAuthenticated={state.isAuthenticated} />
	);
}

export default LoginPage;
