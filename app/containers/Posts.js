import React        from 'react';
import { connect }        from 'react-redux';
import * as acts        from '../actions/postsActions';
import chunk        from 'lodash/chunk';

import Pager        from '../components/posts/Pager';



class Posts extends React.Component {

	render(){
		let chunkSize = 3;
		const { posts, params } = this.props;
		const currentPage = params.page ? params.page : 1;
		const index = parseInt(currentPage);
		const chunkedPosts = chunk(posts.visiblePosts, chunkSize);
		const pToShow = chunkedPosts[currentPage-1];


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

				<Pager indexPage={ index } endPage={ chunkedPosts.length }/>

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