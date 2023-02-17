import { useContext, useState } from "react";
import { StateContext } from "../../../state/context";
import PostArticleInputs from "./components/PostArticleInputs/PostArticleInputs";
import PostArticleView from "./components/PostArticleView/PostArticleView";
import "./PostArticle.scss";


function PostArticle({ post }) {
	const { state, dispatch } = useContext(StateContext);
	const [isEditing, setEditing] = useState(false);

const handleEditClick = () => {
	if (state.isAuthenticated) {
		setEditing(true);
	}
};

	return isEditing ? (
		<PostArticleInputs
			dispatch={dispatch}
			post={post}
			posts={state.posts}
			setEditing={setEditing}
		/>
	) : (
		<PostArticleView
			dispatch={dispatch}
			post={post}
			posts={state.posts}
			setEditing={setEditing}
			handleEditClick={handleEditClick}
		/>
	);
}

export default PostArticle;
