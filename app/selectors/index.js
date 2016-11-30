import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter;
const getPosts = (state) => state.posts.all;

export const getVisibleTodos = createSelector(
	[ getVisibilityFilter, getTodos ],
	(visibilityFilter, todos) => {
		switch (visibilityFilter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter(t => t.completed);
			case 'SHOW_ACTIVE':
				return todos.filter(t => !t.completed);
		}
	}
);