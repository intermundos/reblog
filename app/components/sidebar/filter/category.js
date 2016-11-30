import React            from 'react';
import { Link }         from 'react-router';

const FilterCategory = (props) => {

	return (

		<div className="list-group">
			<h4><small className="glyphicon glyphicon-tag"/> Category</h4>

			{ Object.keys(props.categories).map((category, i)=> (
					<Link to={{pathname: props.activePath, query: { category:`${ category.toLowerCase() }`}}}
						  key={ i }
						  className="list-group-item"
						  activeClassName={ props.query == '' ? '' : 'active' }>
						<span className="badge">{ props.categories[category] }</span>
						{ category }
					</Link>
				)
			)}

		</div>
	)
}; //end.Show_All

export default FilterCategory;