import * as types        from './actionTypes';
import data                               from '../../data/posts.json';


export const fetchPosts = () => {
	const request = data.posts;
	return {
		type: types.FETCH_POSTS,
		payload: {
			posts: request
		}
	}
};

export const selectPost = (post) =>{
	return {
		type: types.SELECT_POST,
		payload: {
			selectedPost: post
		}
	};
};