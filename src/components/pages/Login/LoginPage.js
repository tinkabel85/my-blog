import React, { useContext } from "react";
import { StateContext } from "../../../state/context";
import LoginForm from "../../containers/LoginForm/LoginForm";

function LoginPage() {
	const { state, dispatch } = useContext(StateContext);

	return (
		<LoginForm
			dispatch={dispatch}
			isAuthenticated={state.isAuthenticated} />
	);
}

export default LoginPage;
