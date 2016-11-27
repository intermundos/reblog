import filter        from 'lodash/filter';
import propIndex        from 'lodash/findIndex';

export function blogSearch(state, searchInput) {

	let myExp = new RegExp(searchInput, 'i');
	let results = filter(state, function (item) {
		return  item.title.search(myExp) !== -1 ||
				item.author.search(myExp) !== -1 ||
				item.description.search(myExp) !== -1 ||
				item.tags.toString().search(myExp) !== -1;
	});
	return results;
}

export function findIndex(state, title) {
	console.log(propIndex(state, { 'title':title }));
	return propIndex(state, { 'title':title });
}



