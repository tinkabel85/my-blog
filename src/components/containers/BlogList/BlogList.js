import postShouldBeShown from "../../../util/postShouldBeShown";
import PostArticle from "../PostArticle/PostArticle";
import "./BlogList.scss";


function isFilteredEmpty(filtered) {
	return filtered.length === 0;
}

function BlogList({ state }) {
	const { posts, filtered } = state;

	return (<ul className="Bloglist">
		{posts && posts.map((post, index) =>
			(isFilteredEmpty(filtered)
			|| postShouldBeShown(filtered, post)
			) && (
				<PostArticle key={index} post={post} />
			)
		)}
	</ul>);
}

export default BlogList;
