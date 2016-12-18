import React, { Component, PropTypes }        from 'react';
import { connect }                            from 'react-redux';
import { getSelectedPost }                    from '../../reducers/postsReducer';
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

class EditPost extends Component {

	constructor(props) {
		super(props);
		this.renderAlert = this.renderAlert.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.parseMarkdown = this.parseMarkdown.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.checkChanges = this.checkChanges.bind(this);
		this.updatePost = this.updatePost.bind(this);
		this.submitPost = this.submitPost.bind(this);
		this.deletePost = this.deletePost.bind(this);

		const { selectedPost } = this.props;
		const mdContent = selectedPost.body ? selectedPost.body : require(`raw-loader!../../../${selectedPost.mdPath}`);
		this.state = {
			postTitle: selectedPost.title,
			postAuthor: selectedPost.author,
			postDescription: selectedPost.description,
			postMd: mdContent,
			postTags: selectedPost.tags.join(),
			formValid: 'init',
			isChanged: false
		};
	}

	componentDidMount() {
		document.querySelector('aside').style.display = 'none';
		this.refs.htmlPreview.innerHTML = marked(this.state.postMd);
	}

	componentWillUnmount() { document.querySelector('aside').style.display = 'block'; }

	handleInput(event){ this.setState({ [event.target.name]: event.target.value }); }

	parseMarkdown(event) { this.refs.htmlPreview.innerHTML = marked(event.target.value); }

	validateForm(state){
		let keys = Object.keys(state);
		let counter = 0;
	    for (let i=0; i<keys.length; i++){
	        if (keys[i] == 'postTags' || keys[i] == 'formValid' || keys[i] == 'isChanged') { continue; }
		    else if (state[keys[i]] == '' || state[keys[i]] == 'invalid') { this.setState({ [keys[i]]: 'invalid', formValid: false }) }
		    else if (state[keys[i]] !== '' && state[keys[i]] !== 'invalid') { ++counter; }
		    counter-1 == i ? this.setState({ formValid: true }) : false;
	    }
		this.checkChanges();
	}

	checkChanges(){
		const { selectedPost } = this.props;
		const mdContent = selectedPost.body ? selectedPost.body : require(`raw-loader!../../../${selectedPost.mdPath}`);
		if (this.state.postTitle !== selectedPost.title
				|| this.state.postAuthor !== selectedPost.author
				|| this.state.postDescription !== selectedPost.description
				|| this.state.postTags !== selectedPost.tags.join()
				|| this.state.postMd !== mdContent) {
			this.setState({ isChanged: true });
			console.log('post updated');
		}

		else {
			console.log('post didnt change');
		}
	};

	submitPost(event){
		event.preventDefault();
		const { title } = this.props.selectedPost;
		if (this.state.formValid == true ) {

			if (this.state.isChanged == false) { this.context.router.push({pathname: '/admin'}); }
	        else {
				this.props.editPost(this.updatePost(), title);
				this.context.router.push({pathname: '/admin'});
			}
		}
	}

	updatePost() {
		let newPost = {};
		const { date } = this.props.selectedPost;
		let tags = this.state.postTags == '' ? ['untagged'] : this.state.postTags.split(',').map((item) => item.trim());
		return newPost = {
			title: this.state.postTitle,
			author: this.state.postAuthor,
			tags: tags,
			description: this.state.postDescription,
			date: date,
			mdPath: `data/posts/md/${this.state.postTitle}.md`,
			body: this.state.postMd
		}
	}

	deletePost(){
		const { title } = this.props.selectedPost;
		this.context.router.push({pathname: '/admin'});
		this.props.deletePost(title);
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
				<h2 className="page-header">Edit Post</h2>

				{ this.state.formValid == false ? this.renderAlert() : null }

				<form onSubmit={ this.submitPost }>
					<div className="row">
						<div className="col-sm-6">

							<FormInput inputWrapClasses={`form-group required ${ this.state.postTitle == 'invalid' ? "has-error" : ''}`}
							           inputClasses={ "form-control" }
							           label="Title"
							           inputName="postTitle"
							           placeholder="Post title"
							           value={ this.state.postTitle }
							           autofocus={ true }
							           handleInput={ this.handleInput } isInput/>

							<FormInput inputWrapClasses={`form-group required ${ this.state.postAuthor == 'invalid' ? "has-error" : ''}`}
							           inputClasses={ "form-control" }
							           label="Author"
							           inputName="postAuthor"
							           placeholder="Post author"
							           value={ this.state.postAuthor }
							           autofocus={ false }
							           handleInput={ this.handleInput } isInput/>

							<FormInput inputWrapClasses={`form-group`}
							           inputClasses={ "form-control" }
							           label="Tags"
							           inputName="postTags"
							           placeholder="Post tags"
							           value={ this.state.postTags }
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
							           value={ this.state.postDescription }
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
						           value={ this.state.postMd }
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
					<button type="submit" className="btn btn-primary" onClick={ ()=>this.validateForm(this.state)}>Save Post</button>
					<button type="button" className="btn btn-danger pull-right" onClick={ this.deletePost }>Delete Post</button>
				</form>
			</section>
		)
	}
}

const mapStateToProps = (state, { params }) => {
	return {
		selectedPost: getSelectedPost(state.posts, params.title)
	}
};

export default connect(mapStateToProps)(EditPost);

EditPost.contextTypes = {
	router: React.PropTypes.object.isRequired,
};