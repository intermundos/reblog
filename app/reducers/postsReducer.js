import * as acts        from '../actions/actionTypes';

const INITIAL_STATE = {
	posts: [],
	visiblePosts: []
};

const postsReducer = (state=INITIAL_STATE, action)=>{

	switch (action.type) {

		case acts.FETCH_POSTS :
			return {
				...state,
				posts: action.payload.posts,
				visiblePosts: action.payload.posts.length
			};

		default :
			return state;
	}
};

export default postsReducer;