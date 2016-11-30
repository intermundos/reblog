import React                      from 'react';
import { Link }                   from 'react-router';
import { modifyWithRegEx }        from '../../../assets/UTILS/helpers';


const FilterDate = (props) => {

	return (

		<div className="list-group">
			<h4><small className="glyphicon glyphicon-tag"/> Month</h4>

			<div className="list-group">

			{ Object.keys(props.dates).map((date, i)=> {

					if (date.includes('2015')) {
						return (
							<div key={ i }>
								<span className="list-group-item disabled">
									{ date.substr( date.indexOf('20')) }
								</span>

								<Link to={{pathname: props.activePath, query: {date:`${ modifyWithRegEx(date).toLowerCase()}`}}}
									  key={ i }
									  className="list-group-item"
									  activeClassName={ props.query == '' ? '' : 'active'}>
									<span className="badge">{ props.dates[date] }</span>
									{ date.substr(0, date.indexOf('20')) }
								</Link>
							</div>
						)
					}

					else {
						return (
							<div key={ i }>
								<span className="list-group-item disabled">
									{ date.substr( date.indexOf('20')) }
								</span>

								<Link to={{pathname: props.activePath, query: {date:`${ modifyWithRegEx(date).toLowerCase()}`}}}

									  className="list-group-item"
									  activeClassName={ props.query == '' ? '' : 'active'}>
									<span className="badge">{ props.dates[date] }</span>
									{ date.substr(0, date.indexOf('20')) }
								</Link>
							</div>
						)
					}
				}
			)}

			</div>
		</div>
	)
};

export default FilterDate;