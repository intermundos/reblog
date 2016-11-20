import React         from 'react';
import { connect }        from 'react-redux';

import AdminView        from '../components/admin/AdminView';

const mapStateToProps = (state) => ({
	posts: state.posts

});

const Admin = connect(mapStateToProps)(AdminView);

export default Admin;