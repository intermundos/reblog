import { combineReducers }         from 'redux';

import posts, * as fromPosts       from './postsReducer';
import admin        from './adminReducer';

const rootReducer = combineReducers({
	posts,
	admin
});

export default rootReducer;

export const getVisiblePosts = (state, filter, query) =>
	fromPosts.getVisiblePosts(state.posts, filter, query);

export const getSelectedPost = (state, postTitle) =>
	fromPosts.getSelectedPost(state.posts,postTitle);
