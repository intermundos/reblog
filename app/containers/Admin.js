import React         from 'react';
import { connect }        from 'react-redux';
import { getVisiblePosts }        from '../reducers/index';

class Admin extends React.Component {

	render () {

		const childrenWithProps = React.Children.map(
			this.props.children,
			(child)=>React.cloneElement(
				child,
				{
					posts: this.props.posts
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



export default connect(mapStateToProps)(Admin);