import * as types        from './actionTypes';

export function saveNewPost(data){
	console.log('data is:', data);
	return {
		type: types.SAVE_NEW_POST,
		payload: data
	}
}