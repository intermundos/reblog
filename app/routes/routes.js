import React                    from 'react';
import { Route, IndexRedirect, IndexRoute }   from 'react-router';
import * as rcb        from './routerCallbacks';


import Root        from '../components/Root';
import Admin        from '../containers/Admin';
import Posts        from '../containers/Posts';
import SinglePost        from '../components/posts/SinglePost';
import NotFound        from '../components/common/NotFound';

import PostsView        from 'components/posts/PostsView';


export default (
	<Route path="/" component={ Root } >

		<Route path="posts" component={ Posts } onChange={ rcb.alignTop }>
			<IndexRoute component={ PostsView } />
			<Route path=":page" component={ PostsView } />
		</Route>

		<Route path="post" onEnter={ rcb.alignTop }>
			<IndexRoute component={ SinglePost }/>
			<Route path=":title" component={ SinglePost }/>
		</Route>

		<Route path="admin" component={ Admin } />

		<IndexRedirect to="posts" />
		<Route path="*" component={ NotFound } />
	</Route>
);


