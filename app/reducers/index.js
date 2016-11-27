import { combineReducers }        from 'redux';

import posts, * as fromPosts       from './postsReducer';

const rootReducer = combineReducers({
	posts
});

export default rootReducer;

export const getVisiblePosts = (state, filter, query) =>
	fromPosts.getVisiblePosts(state.posts, filter, query);

export const getSelectedPost = (state, postTitle) =>
	fromPosts.getSelectedPost(state.posts,postTitle);
