import React         from 'react';
import { connect }        from 'react-redux';
import { getVisiblePosts }        from '../reducers/index';
import { saveNewPost, editPost }        from '../actions/adminActions';

class Admin extends React.Component {

	render () {

		const childrenWithProps = React.Children.map(
			this.props.children,
			(child)=>React.cloneElement(
				child,
				{
					posts: this.props.posts,
					saveNewPost: this.props.saveNewPost,
					editPost: this.props.editPost
				}
			)
		);

		return (
			<div>
				{childrenWithProps}
			</div>
		)
	}
}


const mapStateToProps = (state, { location }) => {
	let query = Object.keys(location.query)[0];
	let filter = location.query[query];
	return {
		posts: getVisiblePosts(state, filter, query)
	}

};



export default connect(mapStateToProps, { saveNewPost, editPost })(Admin);