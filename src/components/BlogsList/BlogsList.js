import PostArticle from "../PostArticle/PostArticle";
import "./BlogList.css";

function BlogsList(props) {
    const { posts, setPosts } = props;

    // const handleEdit = post => {
    //     setPosts(posts.map(post =>))
    // }
    return (
			<ul className="list">
				{posts.map((post, i) => (
                    <PostArticle key={i} post={post}
                        // onEdit={handleEdit}
                    />
            ))}
		
			</ul>
		);
}

export default BlogsList;