import React, { Component } from 'react';
import BlogEntry        from './BlogEntry';
import { Link }        from 'react-router';

import chunk        from 'lodash/chunk';

class PostsView extends Component {

	constructor(props){
	    super(props);

	    this.renderPosts = this.renderPosts.bind(this);
	    this.loadNewer   = this.loadNewer.bind(this);
	    this.loadOlder   = this.loadOlder.bind(this);

	    this.state = {
			pageIndex: 0,
			chunked: chunk(this.props.posts.visiblePosts, 2)
	    }
	}

	renderPosts(){
		const postsToShow = this.state.chunked[this.state.pageIndex];
		return (
			postsToShow.map((post, index)=>(<BlogEntry post={ post } key={ index } />))
		)
	}

	loadOlder(){
		window.scrollTo(0, 0);
		this.setState({
			pageIndex: this.state.pageIndex + 1
		});
	}

	loadNewer(){
		window.scrollTo(0, 0);
		this.setState({
			pageIndex: this.state.pageIndex - 1
		});
	}

	render(){
		console.log(this.props.params.page);
		return (

		  <section className="col-md-8">

			  <h1 className="page-header">Showing { this.props.posts.visiblePosts.length } Posts</h1>

			  { this.renderPosts() }

			  <ul className="pager">
				  { this.state.pageIndex == this.state.chunked.length-1 ?
					  null :
					  <li className="previous">
						  <Link className="pager-control page-older"
								onClick={ this.loadOlder }>
							  ← Older
						  </Link>
					  </li>

				  }
				  { this.state.pageIndex == 0 ?
					  null :
					  <li className="next">
						  <Link className="pager-control page-older"
								onClick={ this.loadNewer }>
							  Newer →
						  </Link>
					  </li>
				  }
			  </ul>
		  </section>
		)
	}
}

export default PostsView;
