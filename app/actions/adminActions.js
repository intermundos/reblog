import * as types        from './actionTypes';

export function saveNewPost(post){
	return {
		type: types.SAVE_NEW_POST,
		payload: {
			post: post
		}
	}
}
export function editPost(post, title){
	return {
		type: types.EDIT_POST,
		payload: {
			post: post,
			title: title
		}
	}
}

export function deletePost(title) {
	return {
		type: types.DELETE_POST,
		payload: {
			title: title
		}
	}
}