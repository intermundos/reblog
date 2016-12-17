import React, { PropTypes }        from 'react';


const FormInput = (props) => {

	return (
		<div className = { props.inputWrapClasses } >
			<label htmlFor = { props.inputName }>{ props.label }</label>
			{ props.isInput ?
				<input type = { props.type || "text"}
				       onChange = { props.handleInput }
				       className={ props.inputClasses }
				       name = { props.inputName }
				       placeholder = { props.placeholder }
				       autoFocus = { props.autofocus } />
				:
				<textarea type = { props.type || "text"}
				          onChange = { props.handleInput }
				          onInput = { props.onInput }
				          className={ props.inputClasses }
				          name = { props.inputName }
				          placeholder = { props.placeholder }
				          autoFocus = { props.autofocus }
				          rows={ props.rows } />
			}
			<p className="help-block"
			   dangerouslySetInnerHTML={{__html: props.helpblock}} />
		</div>
	)
};

export default FormInput;