// import 'babel-polyfill';

// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React                              from 'react';
import { render }                         from 'react-dom';
import configureStore                     from './store/configureStore';
import { Provider }                       from 'react-redux';
import { Router, useRouterHistory}        from 'react-router';
import routes                             from './routes/routes';
import { createHashHistory }              from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import data                               from '../data/posts.json';

const store = configureStore({
	posts: {
		all: data.posts,
	}
});

render(
	<Provider store={ store }>
		<Router history={ appHistory } routes={ routes } />
	</Provider>,
	document.querySelector('#root')
);

