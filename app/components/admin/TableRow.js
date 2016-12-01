import React        from 'react';

export default (props) => {
	return (
		<tr>
			<th scope="row">{ props.index }</th>
			<td>{ props.title }</td>
			<td>{ props.author }</td>
			<td>{ props.date }</td>
		</tr>
	)
}
