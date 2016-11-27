import * as types        from '../actions/actionTypes';
import * as helpers        from '../assets/UTILS/helpers';
import find        from 'lodash/findIndex';

const INITIAL_STATE = {
	posts: []
};

const posts = (state=INITIAL_STATE, action)=>{

	switch (action.type) {


		default : return state;
	}
};

export default posts;

export const getVisiblePosts = (state, filter, query) => {
	switch (query) {
		case 'search' :
			return [...helpers.blogSearch(state, filter)];

		default : {
			return state;
		}
	}
};

export const getSelectedPost = (state, title) => {
	return state[helpers.findIndex(state, title)];
};



















// export const getFilteredPosts = (state, filterTerm, queryVar) => {
// 	switch (queryVar) {
// 		case 'author':
// 			return [...state.filter((post)=> {
// 				if (normalizeAuthor(post.author) === normalizeAuthor(filterTerm)) {
// 					return post
// 				}
// 			})];
// 			break;
// 		case 'category':
// 			return [...state.filter((post)=> {
// 				if (post.tags.some((tag)=>(normalizeTag(tag) === normalizeTag(filterTerm)))) {
// 					return post;
// 				}
// 			})];
// 			break;
// 		case 'month':
// 			return [...state.filter((post)=> {
// 				if (normalizeMonth(post.date) === filterTerm) {
// 					return post;
// 				}
// 			})];
// 			break;
// 		case 'search':
// 			return [...state.filter((post)=> {
// 				if (
// 					//testing if the post's author name includes part of the filter term
// 				_.includes(normalizeAuthor(post.author), normalizeAuthor(filterTerm)) ||
// 				//testing if one or more(some) of the post's tags includes part of the filter term
// 				post.tags.some((tag)=>_.includes(normalizeTag(tag), normalizeTag(filterTerm))) ||
// 				//testing if the post's dates includes part of the filter term
// 				_.includes(normalizeMonth(post.date), filterTerm) ||
// 				//testing if the post's descrisption includes part of the filter term
// 				_.includes(post.description.toLowerCase(), filterTerm)
//
// 				) {
// 					return post
// 				}
// 			})];
// 			break;
//
// 		default:
// 			return state;
// 	}
// };