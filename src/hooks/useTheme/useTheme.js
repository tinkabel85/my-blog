import { useEffect, useState } from "react";
import Actions from "../../state/Actions";

const useTheme = (dispatch, startingValue) => {
	const [theme, setTheme] = useState(startingValue);

	useEffect(() => {
		dispatch({
			type: Actions.changeTheme,
			payload: { theme: theme === "light" ? "dark" : "light" },
		});
		dispatch({
			type: Actions.changeBtnThemeText,
			payload: { btnThemeText: theme === "light" ? "Light Mode" : "Dark Mode" },
		});
	}, [theme, dispatch]);

	return [theme, setTheme];
};
export default useTheme;