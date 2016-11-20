import * as acts        from './actionTypes';
import data                               from '../../data/posts.json';


export const fetchPosts = () => {
	const request = data.posts;
	return {
		type: acts.FETCH_POSTS,
		payload: {
			posts: request
		}
	}
};