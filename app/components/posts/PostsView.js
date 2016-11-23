import React, { Component } from 'react';
import BlogEntry        from './BlogEntry';
import { Link }        from 'react-router';

import chunk        from 'lodash/chunk';

class PostsView extends Component {

	constructor(props){
		super(props);

		this.renderPosts = this.renderPosts.bind(this);
	}

	renderPosts(){
		const postsToShow = this.props.posts;
		console.log(postsToShow);
		return (
			postsToShow.map((post, index)=>(<BlogEntry post={ post } key={ index } />))
		)
	}


	render(){

		return (
			<div>
				{this.renderPosts()}
			</div>
		)
	}
}

export default PostsView;
