import Actions from "../Actions";

function stateReducer(state, action) {
	console.log(action);
	switch (action.type) {
		case Actions.verifyUser:
			return { ...state, isAuthenticated: true };
		case Actions.addPosts:
			console.log(action);
			return {
				...state,
				posts: [...state.posts, ...action.payload.posts],
			};
		case Actions.changeTheme:
			return { ...state, theme: action.payload.theme };
		case Actions.changeBtnThemeText:
			return { ...state, btnThemeText: action.payload.btnThemeText };
		case Actions.logout:
			return { ...state, isAuthenticated: false };
		case Actions.login:
			return { ...state, isAuthenticated: true };
		case Actions.updatePosts:
			return { ...state, posts: action.payload.updatedPosts };
		case Actions.setFiltered:
			return { ...state, filtered: action.payload.filtered };
		default:
			return state;
	}
}

export default stateReducer;
