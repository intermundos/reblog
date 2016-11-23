import React        from 'react';
import { connect }        from 'react-redux';
import * as acts        from '../actions/postsActions';
import chunk        from 'lodash/chunk';


class Posts extends React.Component {
	render(){

		const { posts, params } = this.props;
		const currentPage = params.page ? params.page : 1;
		const pToShow = chunk(posts.visiblePosts, 2)[currentPage-1];

		const childrenWithProps = React.Children.map(this.props.children,
			(child)=>React.cloneElement(child, {
				posts: pToShow,
				page: params.page
				}
			)
		);

		return (

			<section className="col-md-8">

				<h1 className="page-header">Showing { this.props.posts.visiblePosts.length } Posts</h1>

				{ childrenWithProps }

			</section>

		)
	}
}


const mapStateToProps = (state) => ({
	posts: state.posts
});


export default connect(mapStateToProps, {
	fetchPosts: acts.fetchPosts
})(Posts);