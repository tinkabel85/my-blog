import React, { useState } from 'react';
import Actions from '../../../../../state/Actions';
import './PostArticleInputs.scss';

function PostArticleInputs({dispatch, posts, post, setEditing}) {
    const [postTitle, setPostTitle] = useState(post.title);
    const [postAuthor, setPostAuthor] = useState(post.author);
    const [postContent, setPostContent] = useState(post.content);

	const handleSave = () => {
		const updatedPosts = posts.map((p) => {
			if (post.id === p.id) {
				return {
					...p,
					title: postTitle,
					author: postAuthor,
					content: postContent,
					comments: [],
				};
			}

			return p;
		});

		dispatch({ type: Actions.updatePosts, payload: { updatedPosts } });
		setEditing(false);
	};

    return (<div className="PostArticleInputs">
        <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
        />
        <input
            type="text"
            value={postAuthor}
            onChange={(e) => setPostAuthor(e.target.value)}
        />
        <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
        />
        <div className="PostArticleInputs__buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
    </div>);
}

export default PostArticleInputs;
