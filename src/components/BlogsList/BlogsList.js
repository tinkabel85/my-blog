import PostArticle from "../PostArticle/PostArticle";
import "./BlogList.css";

function BlogsList(props) {
	const { posts, setPosts } = props;

	return (
		<ul className="list">
			{posts.map((post, index) => (
				<PostArticle
					key={index}
					posts={posts}
					post={post}
					setPosts={setPosts}
				/>
			))}
		</ul>
	);
}

export default BlogsList;
