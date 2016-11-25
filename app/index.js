// import 'babel-polyfill';

// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React                              from 'react';
import { render }                         from 'react-dom';
//Router
import { Router, useRouterHistory}        from 'react-router';
import routes                             from './routes/routes';
import { createHashHistory }              from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
//Redux
import configureStore                     from './store/configureStore';
import { Provider }                       from 'react-redux';
import { saveState }        from './assets/UTILS/localStorage';


const store = configureStore();
store.subscribe(() => {
	saveState({
		posts: store.getState().posts
	})
});

render(
	<Provider store={ store }>
		<Router history={ appHistory } routes={ routes } />
	</Provider>,
	document.querySelector('#root')
);

