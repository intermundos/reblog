import moment        from 'moment';

// RegEx modification of any string
export function modifyWithRegEx(text) {
	return text.replace(/\s/g, '-').toLowerCase();
}

// Modifies post title with given RegEx
export function modifyTitleWithRegEx(text) {
	return text.replace(/[^0-9a-zA-Z ]/g,' ').split(' ').filter(word => word).join('-');
}

// Searches blog
export function blogSearch(state, searchInput) {

	let myExp = new RegExp(searchInput, 'i');

	return state.filter((post)=>post.author.search(myExp) !== -1
								|| post.title.search(myExp) !== -1
								|| post.description.search(myExp) !== -1
								|| post.tags.toString().search(myExp) !== -1);
}

// Filters state by author
export function filterAuthor(state, author){
	return state.filter((post) => modifyWithRegEx(post.author) === author);
}

// Filters state by category(tag)
export function filterCategory(state, category){
	return state.filter((post) => {
		for (let i = 0; i<post.tags.length; i++) {
			if (post.tags[i].toLowerCase() === category)
				return post;
		}
	});
}

// Filters state by date
export function filterDate(state, date){
	return state.filter((post) => modifyWithRegEx(moment(parseInt(post.date)).format('MMMM YYYY')) === date);
}

// Selects post
export function findIndex(state, title) {
  return state.find((post) => modifyTitleWithRegEx(post.title) === title);
}



