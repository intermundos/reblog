import React                                    from 'react';
import { Route, IndexRedirect, IndexRoute }     from 'react-router';
import * as rcb                                 from './routerCallbacks';


import Root                                     from '../components/Root';
import NotFound                                 from '../components/common/NotFound';
import Posts                                    from '../containers/Posts';
import PostsView                                from 'components/posts/PostsView';
import SinglePost                               from '../components/posts/SinglePost';
import Admin                                    from '../containers/Admin';
import AdminView                                from '../components/admin/AdminView';
import NewPost                                  from '../components/admin/NewPost';
import EditPost                                 from '../components/admin/EditPost';


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

		<Route path="admin" component={ Admin } >
			<IndexRoute component={ AdminView }/>
			<Route path="new/post" component={ NewPost } />
			<Route path="edit/post/:title" component={ EditPost } />
		</Route>

		<IndexRedirect to="posts" />
		<Route path="*" component={ NotFound } />
	</Route>
);


