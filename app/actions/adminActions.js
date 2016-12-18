import * as types        from './actionTypes';

export function saveNewPost(post){
	return {
		type: types.SAVE_NEW_POST,
		payload: post
	}
}
export function editPost(post){
	return {
		type: types.EDIT_POST,
		payload: post
	}
}