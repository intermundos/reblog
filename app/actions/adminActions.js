import * as types        from './actionTypes';

export function saveNewPost(data){
	return {
		type: types.SAVE_NEW_POST,
		payload: data
	}
}