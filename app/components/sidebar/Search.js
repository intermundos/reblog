import React, { Component }        from 'react';

class Search extends Component {

	constructor(props){
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = { inputValue: '' };
	}

	onInputChange(event){
		this.setState({ inputValue: event.target.value })
	}

	onFormSubmit(event){
		event.preventDefault();
		this.setState({ inputValue: '' });
		this.context.router.push({ query: { search: this.state.inputValue }});
		this.context.router.isActive(false);
	};

	render(){
		return (
			<div className="well">
				<h4>Search</h4>
				<form onSubmit={ this.onFormSubmit }>
					<div className="input-group">
						<input
							className="form-control"
							name="search"
							type="search"
							placeholder="Search blog..."
							onChange={ this.onInputChange }
							value={ this.state.inputValue }/>
						<span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <span className="glyphicon glyphicon-search" />
                </button>
              </span>
					</div>
				</form>
			</div>
		)
	};//end.render()
} //end.Search


export default Search;


Search.contextTypes = {
	router: React.PropTypes.object.isRequired,
};

