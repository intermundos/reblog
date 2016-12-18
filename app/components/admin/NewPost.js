import React, { Component, PropTypes }        from 'react';
import marked                                 from 'marked';
import FormInput                              from './FormInput';

marked.setOptions({
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

class NewPost extends Component {

	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
		this.validateFormAndSubmit = this.validateFormAndSubmit.bind(this);
		this.renderAlert = this.renderAlert.bind(this);
		this.createPost = this.createPost.bind(this);
		this.parseMarkdown = this.parseMarkdown.bind(this);
		this.submitPost = this.submitPost.bind(this);

		this.state = {
			postTitle: '',
			postAuthor: '',
			postDescription: '',
			postMd: '',
			postTags: '',
			formValid: 'init'
		}
	}

	componentDidMount() { document.querySelector('aside').style.display = 'none'; }

	componentWillUnmount() { document.querySelector('aside').style.display = 'block'; }

	handleInput(event){ this.setState({ [event.target.name]: event.target.value }); }

	parseMarkdown(event) { this.refs.htmlPreview.innerHTML = marked(event.target.value); }

	validateFormAndSubmit(state){
		let keys = Object.keys(state);
		let counter = 0;
	    for (let i=0; i<keys.length; i++){
	        if (keys[i] == 'postTags' || keys[i] == 'formValid') { continue; }
		    else if (state[keys[i]] == '' || state[keys[i]] == 'invalid') { this.setState({ [keys[i]]: 'invalid', formValid: false }) }
		    else if (state[keys[i]] !== '' && state[keys[i]] !== 'invalid') { ++counter; }
		    counter-1 == i ? this.setState({ formValid: true }) : false;
	    }
	}

	submitPost(event){
		event.preventDefault();
		if (this.state.formValid == true) {
			this.props.saveNewPost(this.createPost());
			this.context.router.push({pathname: '/admin'});
		}
	}

	createPost() {
		let newPost = {};
		let tags = this.state.postTags == '' ? ['untagged'] : this.state.postTags.split(',').map((item) => item.trim());
		return newPost = {
			title: this.state.postTitle,
			author: this.state.postAuthor,
			tags: tags,
			description: this.state.postDescription,
			date: +new Date(),
			mdPath: `data/posts/md/${this.refs.postTitle}.md`,
			body: this.state.postMd
		}
	}

	renderAlert(){
		return (
			<div className="alert alert-danger" role="alert">
				One or more required fields have no value.
			</div>
		)
	}

	render() {
		return (
			<section className="col-sm-12">
				<h2 className="page-header">Add New Post</h2>

				{ this.props.posts.find((post) => post.title == this.state.postTitle) ?
					<div className="alert alert-danger" role="alert">
						The entered <strong>Title</strong> already exists in another post.
					</div>
					:
					null
				}
				{ this.state.formValid == false ? this.renderAlert() : null }

				<form onSubmit={ this.submitPost }>
					<div className="row">
						<div className="col-sm-6">

							<FormInput inputWrapClasses={`form-group required ${ this.state.postTitle == 'invalid' ? "has-error" : ''}`}
							           inputClasses={ "form-control" }
							           label="Title"
							           inputName="postTitle"
							           placeholder="Post title"
							           autofocus={ true }
							           handleInput={ this.handleInput } isInput/>

							<FormInput inputWrapClasses={`form-group required ${ this.state.postAuthor == 'invalid' ? "has-error" : ''}`}
							           inputClasses={ "form-control" }
							           label="Author"
							           inputName="postAuthor"
							           placeholder="Post author"
							           autofocus={ false }
							           handleInput={ this.handleInput } isInput/>

							<FormInput inputWrapClasses={`form-group`}
							           inputClasses={ "form-control" }
							           label="Tags"
							           inputName="postTags"
							           placeholder="Post tags"
							           autofocus={ false }
							           handleInput={ this.handleInput }
							           helpblock={ 'Separate multiple tags with a comma. e.g. <code>Grunt,Tools</code>' } isInput/>
						</div>

						<div className="col-sm-6">

							<FormInput inputWrapClasses={`form-group required ${ this.state.postDescription == 'invalid' ? "has-error" : ''}`}
							           inputClasses={ "form-control" }
							           label="Description"
							           inputName="postDescription"
							           placeholder="Post description"
							           autofocus={ false }
							           rows={10}
							           handleInput={ this.handleInput } />
						</div>
					</div>
					<hr />
					<div className="row">

						<FormInput inputWrapClasses={`col-sm-6 form-group required ${ this.state.postMd == 'invalid' ? "has-error" : ''}`}
						           inputClasses={ "form-control previewPane" }
						           label="Markdown"
						           inputName="postMd"
						           placeholder="Post markdown"
						           autofocus={ false }
						           rows={20}
						           onInput={ this.parseMarkdown }
						           handleInput={ this.handleInput } />

						<div className="col-sm-6">
							<label>HTML Preview (read only)</label>
							<div className="form-control previewPane" ref="htmlPreview"/>
						</div>

					</div>
					<hr />
					<button type="submit" className="btn btn-primary" onClick={ ()=>this.validateFormAndSubmit(this.state)}>Save Post</button>
				</form>
			</section>
		)
	}
}

export default NewPost;

NewPost.contextTypes = {
	router: React.PropTypes.object.isRequired,
};
