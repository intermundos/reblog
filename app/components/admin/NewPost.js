import React, {Component}        from 'react';
import marked        from 'marked';

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
		this.validateInputAndSubmit = this.validateInputAndSubmit.bind(this);
		this.renderAlert = this.renderAlert.bind(this);
		this.createPost = this.createPost.bind(this);
		// this.submitPost = this.submitPost.bind(this);
		this.parseMarkdown = this.parseMarkdown.bind(this);

		this.state = {
			postTitle: '',
			postAuthor: '',
			postTags: '',
			postDescription: '',
			postMd: '',
			formValid: true
		}
	}

	parseMarkdown(event) {
		this.refs.htmlPreview.innerHTML = marked(event.target.value);
		this.setState({ [event.target.name]: event.target.value  })
	}

	createPost() {
		let newPost = {};
		if (this.state.postTags == '') {
			return newPost = {
				title: this.state.postTitle,
				author: this.state.postAuthor,
				tags: [''],
				description: this.state.postDescription,
				date: +new Date(),
				mdPath: `data/posts/md/${this.refs.postTitle}.md`,
				body: this.state.postMd
			}
		}
		return newPost = {
			title: this.state.postTitle,
			author: this.state.postAuthor,
			tags: this.state.postTags.split(',').map((item) => item.trim()),
			description: this.state.postDescription,
			date: +new Date(),
			mdPath: `data/posts/md/${this.refs.postTitle}.md`,
			body: this.state.postMd
		}
	}

	componentDidMount() {
		document.querySelector('aside').style.display = 'none';
	}

	componentWillUnmount() {
		document.querySelector('aside').style.display = 'block';
	}

	handleInput(event){
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	validateInputAndSubmit(){

		Object.keys(this.state).forEach((key) => {

			if (key === 'formValid') { return }
			if (!this.state[key] || this.state[key].length === 0 ) {
				if (key === 'postTags') { return }
				this.setState({
					formValid: false,
					[key]: 'invalid'
				});
			}
		});

		if (this.state.formValid == true && this.state.postTitle !== '') {
			this.props.saveNewPost(this.createPost());
			this.context.router.push({pathname: '/admin'});
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
					</div> :
					null
				}
				{ this.state.formValid == false ? this.renderAlert() : null }
				<form>
					<div className="row">
						<div className="col-sm-6">
							<div className={`form-group  required ${ this.state.postTitle == 'invalid' ? "has-error" : null}`} >
								<label htmlFor="postTitle">Title</label>
								<input type="text"
								       onChange={ this.handleInput }
								       className="form-control"
								       name="postTitle"
								       placeholder="Post Title"  autofocus/>
							</div>
							<div className={`form-group  required ${ this.state.postAuthor == 'invalid' ? "has-error" : null}`} >
								<label htmlFor="postAuthor">Author</label>
								<input type="text"
								       onChange={ this.handleInput }
								       className="form-control"
								       ref="postAuthor"
								       name="postAuthor"
								       placeholder="Post Author" />
							</div>
							<div className="form-group" >
								<label htmlFor="postTags">Tags</label>
								<input type="text"
								       onChange={ this.handleInput }
								       className="form-control"
								       name="postTags"
								       placeholder="Post Tags"/>
								<p className="help-block">Separate multiple tags with a comma.
									e.g.<code>Grunt,Tools</code></p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className={`form-group  required ${ this.state.postDescription == 'invalid' ? "has-error" : null}`}>
								<label htmlFor="postDescription">Description</label>
								<textarea className="form-control"
								          onChange={ this.handleInput }
								          name="postDescription"
								          rows={10}
								          placeholder="Post Description"  defaultValue={""}/>
							</div>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className={`col-sm-6 form-group  required ${ this.state.postMd == 'invalid' ? "has-error" : null}`}>
							<label htmlFor="postMd">Markdown</label>
							<textarea className="form-control previewPane"
							          name="postMd"
							          rows={20}
							          placeholder="Post Markdown" defaultValue={""}
							          onChange={ this.parseMarkdown }/>
						</div>
						<div className="col-sm-6">
							<label>HTML Preview (read only)</label>
							<div className="form-control previewPane" ref="htmlPreview"/>
						</div>
					</div>
					<hr />
					<button type="button" className="btn btn-primary" onClick={ ()=>this.validateInputAndSubmit() }>Save Post</button>
				</form>
			</section>
		)
	}
}

export default NewPost;

NewPost.contextTypes = {
	router: React.PropTypes.object.isRequired,
};
