import React         from 'react';
import { connect }        from 'react-redux';
import { withRouter }        from 'react-router';

import SidebarView        from '../components/sidebar/SidebarView';

const mapStateToProps = (state, ownProps) => {
	return {
		posts: state.posts,
		ownProps: location
	}

};

const Sidebar = connect(mapStateToProps)(SidebarView);

export default Sidebar;