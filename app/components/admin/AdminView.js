import React, { Component } from 'react';

import TableHead        from './TableHead';
import TableRow        from './TableRow';

class AdminView extends Component {

	constructor(props){
		super(props);

		this.renderRows = this.renderRows.bind(this);

	}


	shouldComponentUpdate(nextProps, nextState) {

		if (this.props.posts !== nextProps.posts) {
			return true;
		}

		return false;
	}

	renderRows(posts){
		return posts.map((post, index) => <TableRow key={ index }
		                                            index={ index+1 }
		                                            title={ post.title }
													author={ post.author }
		                                            date={ new Date(parseInt(post.date)).toDateString().substr(4) } />)
	}

	render(){

		return (
		  <section className="col-md-8">
		      <h1 className="page-header">Edit posts</h1>

		      <table className="table table-bordered table-hover table-striped postsTable">
			      <TableHead {...this.props.admin}/>
			      <tbody>
			      { this.renderRows(this.props.posts) }
			      </tbody>
		      </table>
		  </section>
		)
	}
}

export default AdminView;