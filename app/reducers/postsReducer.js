import * as acts        from '../actions/actionTypes';

const INITIAL_STATE = {
	visiblePosts: []
};

const postsReducer = (state=INITIAL_STATE, action)=>{

	switch (action.type) {

		case acts.FETCH_POSTS :
			return {
				...state,
				visiblePosts: action.payload.posts
			};

		default :
			return state;
	}
};


export default postsReducer;