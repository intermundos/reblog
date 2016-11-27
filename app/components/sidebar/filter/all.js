import React            from 'react';
import { Link }         from 'react-router';


const FilterAll = (props) => {


	return (

		<div className="list-group">
			<Link to={ {pathname: props.activePath } }  className="list-group-item"
					   activeClassName={ props.search == '' ? 'active' : '' }>
				<span className="badge">{ props.postsCount }</span>
				Show All Posts
			</Link>
		</div>
	)
};

export default FilterAll;

FilterAll.contextTypes = {
	router: React.PropTypes.object.isRequired
};
