import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../state/context";
import PostArticleView from "../../containers/PostArticle/components/PostArticleView/PostArticleView";

function BlogPostDetailPage() {
	const { id } = useParams();
	const { state, dispatch } = useContext(StateContext);
	const [post, setPost] = useState(null);

	useEffect(() => {
		setPost(state.posts.find((p) => p.id === parseInt(id)));
	}, [state.posts, id]);

	return post ? (
		<PostArticleView
			post={post}
			setEditing={() => 1}
			posts={state.posts}
			dispatch={dispatch}
			showReadMore={false}
		/>
	) : (
		<p>No post found!</p>
	);
}

export default BlogPostDetailPage;
