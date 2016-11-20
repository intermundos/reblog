import React, { Component } from 'react';

class PostsView extends Component {

  render(){
    const { posts } = this.props;
    return (
      <section className="col-md-8">
        <h1 className="page-header">Showing { posts.posts.length } Posts</h1>
      </section>
    )
  }
}

export default PostsView;
