import { useContext } from "react";
import PostArticle from "../PostArticle/PostArticle";
import "./BlogList.scss";
import { StateContext } from "../../../state/context";

function BlogList(props) {
	const { state } = useContext(StateContext);
	const { posts, filtered } = state;

	function isFilteredEmpty(filtered) {
		return filtered.lengh === 0;
	}

	function postShallBeShown(filtered, post) {
		return filtered.find((r) => r.id === post.id && r.isShown);
	}

	return (
		<ul className="Bloglist">
			{posts &&
				posts.map(
					(post, index) =>
						(isFilteredEmpty(filtered) || postShallBeShown(filtered, post)) && (
							<PostArticle key={index} posts={state.posts} post={post} />
						)
				)}
		</ul>
	);
}

export default BlogList;
