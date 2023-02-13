import { useContext } from "react";
import PostArticle from "../PostArticle/PostArticle";
import "./BlogList.scss";
import { StateContext } from "../../../state/context";

function BlogList(props) {
	const { state } = useContext(StateContext);
	const { posts } = state;

	return (
		<ul className="Bloglist">
			{posts && posts.map((post, index) => (
				<PostArticle key={index} posts={state.posts} post={post} />
			))}
		</ul>
	);
}

export default BlogList;
