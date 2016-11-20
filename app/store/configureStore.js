import { createStore, applyMiddleware }        from 'redux';
import rootReducer        from '../reducers/index';

const addLogging = (store) => {

	const rawDispatch = store.dispatch;

	if (!console.group){
		return rawDispatch;
	}

	return (action)=>{
		console.group(action.type);
		console.log('%c prev state', 'color: yellow', store.getState());
		console.log('%c action', 'color: red', action);
		const returnValue = rawDispatch(action);
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	}
};

const configureStore = (preloadedState) => {

	const store = createStore(
		rootReducer,
		preloadedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	if (process.env.NODE_ENV !== 'production') { store.dispatch = addLogging(store); }

	return store;
};



export default configureStore;