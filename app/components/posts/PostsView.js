import React, { Component } from 'react';
import BlogEntry        from './BlogEntry';

class PostsView extends Component {

  render(){
    const { posts } = this.props;

    const blogEntriesList = posts.visiblePosts.map((post, index)=>(<BlogEntry post={ post } key={ index } />));

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

		  { blogEntriesList }

      </section>
    )
  }
}

export default PostsView;
