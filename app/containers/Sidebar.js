import React         from 'react';
import { connect }        from 'react-redux';
import { withRouter }        from 'react-router';
import { search }        from '../actions/postsActions';

import SidebarView        from '../components/sidebar/SidebarView';

const mapStateToProps = (state) => {

	return {
		posts: state.posts
	}

};

const Sidebar = withRouter(connect(mapStateToProps, {
	search: search
})(SidebarView));

export default Sidebar;