import React, { Component }            from 'react';
import { modifyTitleWithRegEx }        from '../../assets/UTILS/helpers';

class TableRow extends  Component {
	render(){
		return (
			<tr onClick={ ()=> this.context.router.push(`admin/edit/post/${modifyTitleWithRegEx(this.props.title)}`) }>
				<th scope="row">{ this.props.index }</th>
				<td>{ this.props.title }</td>
				<td>{ this.props.author }</td>
				<td>{ this.props.date }</td>
			</tr>
		)
	}
}

export default TableRow;

TableRow.contextTypes = {
	router: React.PropTypes.object.isRequired,
};


