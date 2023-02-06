import PostArticle from "../PostArticle/PostArticle";

function BlogsList(props) {
    const { posts } = props;
    return (
			<ul>
				{posts.map((post, i) => (
                    <PostArticle key={i} post={post} editPost={(post) => {
                        
                    } } />
            ))}
		
			</ul>
		);
}

export default BlogsList;