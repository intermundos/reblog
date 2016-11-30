import React                    from 'react';
import { connect }              from 'react-redux';
import { getVisiblePosts }      from '../reducers/index';
import chunk                    from 'lodash/chunk';

import Pager                    from '../components/posts/Pager';

class Posts extends React.Component {

	render(){
		let chunkSize = 3;
		const { posts, params, location } = this.props;
		const currentPage = params.page ? params.page : 1;
		const index = parseInt(currentPage);
		const chunkedPosts = chunk(posts, chunkSize);
		const visiblePosts = chunkedPosts[currentPage-1];
		const query = location.query;

		const childrenWithProps = React.Children.map(
			this.props.children,
			(child)=>React.cloneElement(
				child,
				{
					posts: visiblePosts,
					page: params.page,
				}
			)
		);

		if (posts.length === 0) {
			return (
				<section className="col-md-8">
					<h1 className="page-header">Nothing to show...</h1>
				</section>
			)
		}

		return (
			<section className="col-md-8">

				<h1 className="page-header">Showing { posts.length } Posts</h1>

				{ childrenWithProps }

				<Pager indexPage={ index } lastPage={ chunkedPosts.length } query={ query }/>

			</section>

		)
	}
}


const mapStateToProps = (state, { location }) => {
	let query = Object.keys(location.query)[0];
	let filter = location.query[query];
	return {
		posts: getVisiblePosts(state, filter, query),
		filter,
		query
	}
};


export default connect(mapStateToProps)(Posts);