import React, { Component }        from 'react';
import marked        from 'marked';

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false
});

class Post extends Component {

	// componentDidMount(){
	// 	const { mdPath } = this.props.selectedPost;
	// 	this.refs.post.innerHTML = marked(require(`raw-loader!../../${mdPath}`));
	// }

	render(){
		return (
			<section className="col-md-8">
				FULL POST { this.props.params.title }
			</section>
		)
	}
}

export default Post;