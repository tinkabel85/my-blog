import generateId from "../../util/generateId";
import Actions from "../Actions";

function stateReducer(state, action) {
	switch (action.type) {
		case Actions.login:
			return { ...state, isAuthenticated: true, verifiedUser: action.payload.user };
		case Actions.addPosts:
			return {
				...state,
				posts: [
					...state.posts,
					...action.payload.posts.map(p => (p.id ? p : {
						...p,
						id: generateId() }
					))],
			};
		case Actions.changeTheme:
			return { ...state, theme: action.payload.theme };
		case Actions.changeBtnThemeText:
			return { ...state, btnThemeText: action.payload.btnThemeText };
		case Actions.logout:
			return { ...state, isAuthenticated: false };
		case Actions.updatePosts:
			return { ...state, posts: action.payload.updatedPosts };
		case Actions.setFiltered:
			return { ...state, filtered: action.payload.filtered };
		default:
			return state;
	}
}

export default stateReducer;
