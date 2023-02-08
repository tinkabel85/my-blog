import PostArticle from "../PostArticle/PostArticle";
import "./BlogList.scss";

function BlogList(props) {
	const { posts, setPosts } = props;

	return (
		<ul className="Bloglist">
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

export default BlogList;
