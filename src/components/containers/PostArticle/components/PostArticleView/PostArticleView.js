import React from 'react';
import Actions from '../../../../../state/Actions';
import CommentsList from '../../../../components/CommentsList/CommentsList';
import CommentForm from '../../../CommentForm/CommentForm';
import './PostArticleView.scss';
import { Link } from "react-router-dom";


function PostArticleView({post, setEditing, posts, dispatch, showReadMore}) {
	const addComment = (comment) => {
		const updatedPosts = posts.map((p) => {
			if (post.id === p.id) {
				return {
					...p,
					comments: [...post.comments, comment],
				};
			}
			return p;
		});

		dispatch({ type: Actions.updatePosts, payload: { updatedPosts } });
	};

    return (<>
        <div className="PostArticleView" onDoubleClick={() => setEditing(true)}>
            <li className="PostArticleView-wrapper">
                <div className="PostArticleView__header">
                    <div className="PostArticleView__header--title">
                        Title: {post.title}
                    </div>
                    <div className="PostArticleView__header--author">
                        Author: {post.author}
                    </div>
                </div>
                <div className="PostArticleView__content">{post.content}</div>
            </li>
            {showReadMore !== false && <Link to={`/post/${post.id}`}>Read more...</Link>}
        </div>
        <div className="PostArticleView__comments">
            <p className="PostArticleView__comments-text">Join the discussion!</p>

            <CommentForm addComment={addComment} />
            <CommentsList comments={post.comments} />
        </div>
    </>);
}

export default PostArticleView;
