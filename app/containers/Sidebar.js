import React         from 'react';
import { connect }        from 'react-redux';

import SidebarView        from '../components/sidebar/SidebarView';

const mapStateToProps = (state) => ({
	posts: state.posts

});

const Sidebar = connect(mapStateToProps)(SidebarView);

export default Sidebar;