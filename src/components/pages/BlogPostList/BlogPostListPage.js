import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../state/context";
import BlogList from "../../containers/BlogList/BlogList";
import CreatePostForm from "../../containers/CreatePostForm/CreatePostForm";

function BlogPostListPage() {
	const { state, dispatch } = useContext(StateContext);

	const navigate = useNavigate();

	useEffect(() => {
		if (!state.isAuthenticated) {
			navigate("/login");
		}
	}, [state.isAuthenticated, navigate]);

	return (
		<>
			{state.isAuthenticated && (
				<>
					<CreatePostForm dispatch={dispatch} />
					<BlogList state={state} />
				</>
			)}
		</>
	);
}

export default BlogPostListPage;
