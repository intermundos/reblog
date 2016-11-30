import React, { Component }      from 'react';
import BlogEntry                 from './BlogEntry';

class PostsView extends Component {

	constructor(props){
		super(props);
		this.renderPosts = this.renderPosts.bind(this);
	}

	renderPosts(){
		const postsToShow = this.props.posts;
		return (
			postsToShow.map((post, index)=>(<BlogEntry post={ post } key={ index }/>))
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
