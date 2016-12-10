import React, { Component }        from 'react';
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

	constructor(props){
	    super(props);
	    this.submitPost = this.submitPost.bind(this);
	    this.parseMarkdown = this.parseMarkdown.bind(this);
	}

	componentDidMount(){
	    document.querySelector('aside').style.display = 'none';
	}

	componentWillUnmount() {
		document.querySelector('aside').style.display = 'block';
	}

	parseMarkdown(event){
		this.refs.htmlPreview.innerHTML = marked(event.target.value);
	}


	submitPost(event){
		event.preventDefault();
		const postStructure = {};
		postStructure.author = this.refs.postAuthor.value;
		postStructure.title = this.refs.postTitle.value;
		postStructure.description = this.refs.postDescription.value;
		postStructure.date = + new Date();
		postStructure.mdPath = `data/posts/md/${this.refs.postTitle}.md`;
		postStructure.tags = this.refs.postTags.value.split(',').map((item) => item.trim());
		postStructure.body = this.refs.postMd.value;
		this.props.saveNewPost(postStructure);
		this.context.router.push({pathname: '/admin'});
	}

	render(){
		return (
			<section className="col-sm-12">
				<h2 className="page-header">Add New Post</h2>
				{/* Invalid Input Alert */}
				{/* <div class="alert alert-danger" role="alert">
				 The entered <strong>Title</strong> already exists in another post.
				 </div> */}
				{/* <div class="alert alert-danger" role="alert">
				 One or more required fields have no value.
				 </div> */}
				<form onSubmit={ this.submitPost }>
					<div className="row">
						<div className="col-sm-6">
							<div className="form-group required">
								<label htmlFor="postTitle">Title</label>
								<input type="text" className="form-control" ref="postTitle" name="postTitle" placeholder="Post Title" required autofocus  />
							</div>
							<div className="form-group required">
								<label htmlFor="postAuthor">Author</label>
								<input type="text" className="form-control" ref="postAuthor" name="postAuthor" placeholder="Post Author" required  />
							</div>
							<div className="form-group">
								<label htmlFor="postTags">Tags</label>
								<input type="text" className="form-control" ref="postTags" name="postTags" placeholder="Post Tags"  />
								<p className="help-block">Separate multiple tags with a comma.
									e.g.<code>Grunt,Tools</code></p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group required">
								<label htmlFor="postDescription">Description</label>
								<textarea className="form-control" ref="postDescription" name="postDescription" rows={10} placeholder="Post Description" required defaultValue={""} />
							</div>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="form-group required col-sm-6">
							<label htmlFor="postMd">Markdown</label>
							<textarea className="form-control previewPane" ref="postMd" name="postMd" rows={20} placeholder="Post Markdown" required defaultValue={""} onChange={ this.parseMarkdown}/>
						</div>
						<div className="col-sm-6">
							<label>HTML Preview (read only)</label>
							<div className="form-control previewPane" ref="htmlPreview" />
						</div>
					</div>
					<hr />
					<button type="submit" className="btn btn-primary">Save Post</button>
				</form>
			</section>
		)
	}
}

export default NewPost;

NewPost.contextTypes = {
	router: React.PropTypes.object.isRequired,
};
