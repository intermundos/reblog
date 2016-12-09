import React, { Component } from 'react';
import orderBy        from 'lodash/orderBy';
import { Link }        from 'react-router';

import TableRow        from './TableRow';




class AdminView extends Component {

	constructor(props){
		super(props);

		this.sortPosts = this.sortPosts.bind(this);
		this.renderRows = this.renderRows.bind(this);
		this.renderArrow = this.renderArrow.bind(this);

		this.state = {
			posts: this.props.posts,
			dir: 'desc',
			activeColumn: 'date'

		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.posts !== nextProps.posts || this.state.posts !== nextState.posts) {
			return true;
		}
		return false;
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.posts !== nextProps.posts) {
			this.setState({ posts: nextProps.posts })
		}
		return false;
	}

	sortPosts(column, direction){
		this.setState({ activeColumn: column });
		if (direction == this.state.dir) {
			let sorted = orderBy(this.state.posts, [column], [direction]);
			this.setState({
				posts: sorted,
				dir: 'asc'
			});
		}

		else {
			let sorted = orderBy(this.state.posts, [column], [this.state.dir]);
			this.setState({
				posts: sorted,
				dir: 'desc'
			});
		}
	}

	renderArrow(){
		if (this.state.dir == 'desc') {
			return <i className="glyphicon glyphicon-chevron-down" />
		}

		else {
			return <i className="glyphicon glyphicon-chevron-up" />
		}
	}

	renderRows() {
		return this.state.posts.map((post, index) => <TableRow key={ index }
		                                                       index={ index + 1 }
		                                                       title={ post.title }
		                                                       author={ post.author }
		                                                       date={ new Date(parseInt(post.date)).toDateString().substr(4) }/>)
	}


	render(){

		return (
		  <section className="col-md-8">
		      <h1 className="page-header">Edit posts</h1>

			  <table className="table table-bordered table-hover table-striped postsTable">

				  <thead>
				  <tr>
					  <th>#</th>
					  <th onClick={ ()=>this.sortPosts('title', 'desc') }>
						  Title
						  <span className="pull-right">
							   { this.state.activeColumn == 'title' ? this.renderArrow() : null }
					      </span>
					  </th>
					  <th onClick={ ()=>this.sortPosts('author', 'desc') }>
						  Author
						  <span className="pull-right">
							   { this.state.activeColumn == 'author' ? this.renderArrow() : null }
					      </span>
					  </th>
					  <th onClick={ ()=>this.sortPosts('date', 'desc') }>
						  Date
						  <span className="pull-right">
							  { this.state.activeColumn == 'date' ? this.renderArrow() : null }
					      </span>
					  </th>
				  </tr>
				  </thead>

				  <tbody>
				    { this.renderRows() }
				  </tbody>

			  </table>

			  <Link to="admin/new/post" className="btn btn-primary">
				  Add New Post
			  </Link>

		  </section>
		)
	}
}

export default AdminView;