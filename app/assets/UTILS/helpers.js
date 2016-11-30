import filter        from 'lodash/filter';
import propIndex        from 'lodash/findIndex';
import includes        from 'lodash/includes';
import moment        from 'moment';

//RegEx modification
export function modifyWithRegEx(text) {
	return text.replace(/\s/g, '-').toLowerCase()
}

//Lowercase modification
export function modifyToLowerCase(object) {
	if (typeof object === 'string') {
		return object.toLowerCase();
	}
	else {
		object.forEach((item)=>{
			item = item.toLowerCase();
			console.log(item);

		});
	}

	console.log(object);
	return object;
}

export function blogSearch(state, searchInput) {

	let myExp = new RegExp(searchInput, 'i');
	let results = filter(
		state,
		function (item) {
			return  item.title.search(myExp) !== -1 ||
					item.author.search(myExp) !== -1 ||
					item.description.search(myExp) !== -1 ||
					item.tags.toString().search(myExp) !== -1;
	});
	return results;
}

export function findIndex(state, title) {
	return propIndex(state, { title });
}


//Filters state by author
export function filterAuthor(state, author){
	let results = filter(
		state,
		function (item) {
			return modifyWithRegEx(item.author) === author;
		}
	);
	return results;
}

export function filterCategory(state, category){
	let results = filter(state, function (item) {
		for (let i = 0; i<item.tags.length; i++) {
			if (item.tags[i].toLowerCase() === category)
				return item;
		}
	});
	return results;
}



