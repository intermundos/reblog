import React                    from 'react';

import { Route, IndexRedirect, IndexRoute }   from 'react-router';


import Root        from '../components/Root';
import Admin        from '../containers/Admin';
import Posts        from '../containers/Posts';
import SinglePost        from '../components/posts/SinglePost';
import NotFound        from '../components/common/NotFound';


export default (
	<Route path="/" component={ Root } >

		<Route path="posts">
			<IndexRoute component={ Posts } />
			<Route path="(:page)" component={ Posts }/>
		</Route>

		<Route path="post">
			<IndexRoute component={ SinglePost }/>
			<Route path=":title" component={ SinglePost }/>
		</Route>

		<Route path="admin" component={ Admin } />

		<IndexRedirect to="posts" />
		<Route path="*" component={ NotFound } />
	</Route>
);


