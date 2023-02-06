import PostArticle from "../PostArticle/PostArticle";
import "./BlogList.css";

function BlogsList(props) {
    const { posts, setPosts } = props;

    // const handleEdit = post => {
    //     setPosts(posts.map(post =>))
    // }
    return (
			<ul className="list">
				{posts.map((post, index) => (
                    <PostArticle key={index} post={post} setPosts={setPosts}
                        // onEdit={handleEdit}
                    />
            ))}
		
			</ul>
		);
}

export default BlogsList;