import React, { Component }        from 'react';
import { connect }        from 'react-redux';
import { getSelectedPost }        from '../../reducers/postsReducer';
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

class SinglePost extends Component {

	componentDidMount(){
		const { mdPath } = this.props.selectedPost;
		this.refs.post.innerHTML = marked(require(`raw-loader!../../../${mdPath}`));
	}

	render(){
		const { selectedPost } = this.props;
		return (
			<section className="col-md-8">
				<article className="single-post">
					<h2>
						{ selectedPost.title }
					</h2>
					<hr/>
					<p>
						<small className="glyphicon glyphicon-user"> </small>
						by { selectedPost.author }
					</p>
					<p>
						<small className="glyphicon glyphicon-time"> </small>
						Posted { new Date(parseInt(selectedPost.date)).toDateString().substr(4) }
					</p>
					<p className="pull-left">
						<b>Tags:&nbsp;</b>
						{ selectedPost.tags.map((tag, index)=>(
							<span key={ index }>
								<span className="label label-default">{tag}</span>
            				</span>
						))}
					</p>
					<br/>
					<hr/>
				</article>

				<div className="postContent" ref="post">
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state, { params }) => {
	return {
		selectedPost: getSelectedPost(state.posts, params.title)
	}
};

export default connect(mapStateToProps)(SinglePost);
