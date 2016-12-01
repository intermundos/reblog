import React        from 'react';

export default (props) => {
	return (
		<thead>
		<tr>
			<th>#</th>
			<th>
				Title
				<span className="pull-right">
				</span>
			</th>
			<th>
				Author
				<span className="pull-right">
				</span>
			</th>
			<th>
				Date
				<span className="pull-right">
					<i className="glyphicon glyphicon-chevron-down" />
				</span>
			</th>
		</tr>
		</thead>
	)
}

