import React         from 'react';
import { connect }        from 'react-redux';
import { getVisiblePosts }        from '../reducers/index';

import AdminView        from '../components/admin/AdminView';

const mapStateToProps = (state, { location }) => {
	let query = Object.keys(location.query)[0];
	let filter = location.query[query];
	return {
		posts: getVisiblePosts(state, filter, query)
	}

};

const Admin = connect(mapStateToProps)(AdminView);

export default Admin;