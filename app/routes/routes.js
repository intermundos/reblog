import React                    from 'react';

import { Route, IndexRedirect, IndexRoute }   from 'react-router';


import Root        from '../components/Root';
import Admin        from '../containers/Admin';
import Posts        from '../containers/Posts';
import NotFound        from '../components/common/NotFound';


export default (
	<Route path="/" component={ Root } >
		<Route path="posts" component={ Posts } />
		<Route path="admin" component={ Admin } />

		<IndexRedirect to="posts" />
		<Route path="*" component={ NotFound } />
	</Route>
);


