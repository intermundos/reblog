import * as types        from '../actions/actionTypes';

const INITIAL_STATE = {
	all: [],
	visiblePosts: [],
	selectedPost: {}
};

const postsReducer = (state=INITIAL_STATE, action)=>{

	switch (action.type) {

		case types.FETCH_POSTS :
			return {
				...state,
				all: action.payload.posts,
				visiblePosts: action.payload.posts
			};

		case types.SELECT_POST :
			return {
				...state,
				selectedPost: action.payload.selectedPost
			};

		default :
			return state;
	}
};


export default postsReducer;