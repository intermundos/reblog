import * as types          from '../actions/actionTypes';
import * as helpers        from '../assets/UTILS/helpers';

const INITIAL_STATE = {
	posts: []
};

const posts = (state=INITIAL_STATE, action)=>{

	switch (action.type) {

		case types.SAVE_NEW_POST :
			let newPost = action.payload.post;
			return [newPost, ...state];

		case types.EDIT_POST :
			let updatedPost = action.payload.post;
			let indexToUpdate = state.indexOf(state.find((post)=>post.title === action.payload.title));
			return [...state.slice(0, indexToUpdate).concat(updatedPost).concat(state.slice(indexToUpdate+1))];

		case types.DELETE_POST :
			let indexToDelete = state.indexOf(state.find((post)=>post.title === action.payload.title));
			return [...state.slice(0, indexToDelete).concat(state.slice(indexToDelete+1))];

		default : return state;
	}
};

export default posts;

export const getVisiblePosts = (state, filter, query) => {
	switch (query) {
		case types.SEARCH :
			return [...helpers.blogSearch(state, filter)];

		case types.AUTHOR :
			return [...helpers.filterAuthor(state, filter)];

		case types.CATEGORY :
			return [...helpers.filterCategory(state, filter)];

		case types.DATE :
			return [...helpers.filterDate(state, filter)];

		default : {
			return state;
		}
	}
};

export const getSelectedPost = (state, title) => {
	return helpers.findIndex(state, title);
};
