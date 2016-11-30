import React            from 'react';
import { Link }         from 'react-router';
import { modifyWithRegEx }        from '../../../assets/UTILS/helpers';

const FilterAuthors = (props) => {


	return (

		<div className="list-group">
			<h4><small className="glyphicon glyphicon-tag"/> Author</h4>

			{ Object.keys(props.authors).map((author, i)=> (
					<Link to={{pathname: props.activePath, query: { author:`${ modifyWithRegEx(author) }`}}}
						  key={ i }
						  className="list-group-item"
						  activeClassName={ props.query == '' ? '' : 'active' }>
						<span className="badge">{ props.authors[author] }</span>
						{ author }
					</Link>
				)
			)}

		</div>
	)
}; //end.Show_All

export default FilterAuthors;