import React, { Component }        from 'react';
import { connect }        from 'react-redux';
import { withRouter }        from 'react-router';

import Search        from './Search';
import ShowAll        from './filter/all';


class Sidebar extends Component{
	render(){

		const { location } = this.props;
		const { router } = this.context;
		let activePath = router.isActive('admin') ? 'admin' : 'posts';


		return (
			<aside className="col-md-4 pull-right">
				<Search />
				<ShowAll postsCount={ this.props.posts.length } search={ location.search } activePath={ activePath }/>
			</aside>
		)
	}
}




const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
};


export default connect(mapStateToProps)(Sidebar);

Sidebar.contextTypes = {
	router: React.PropTypes.object.isRequired
};


