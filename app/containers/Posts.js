import React        from 'react';
import { connect }        from 'react-redux';
import * as acts        from '../actions/postsActions';

import PostsView        from '../components/posts/PostsView';




const mapStateToProps = (state) => ({
	posts: state.posts
});

const Posts = connect(mapStateToProps, {
	fetchPosts: acts.fetchPosts
})(PostsView);

export default Posts;