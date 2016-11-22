import React, { Component } from 'react';
import BlogEntry        from './BlogEntry';

class PostsView extends Component {

  render(){
    const { posts } = this.props;
    if (posts.visiblePosts.length === 0) {
    	return (
			<section className="col-md-8">
				<h1 className="page-header">Nothing to show...</h1>
			</section>
		)
	}
    return (
      <section className="col-md-8">

		  <h1 className="page-header">Showing { posts.visiblePosts.length } Posts</h1>

		  { posts.visiblePosts.map((post, index)=>(<BlogEntry post={ post } key={ index } />))}

      </section>
    )
  }
}

export default PostsView;
