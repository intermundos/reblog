import React        from 'react';
import { Link }        from 'react-router';


const BlogEntry = ({ post }) => {

	return(
		<article className="blog-entry">
			<header>
				<h2>
					<Link to={`/post/${ post.title }`} >
						{post.title}
					</Link>
				</h2>
				<p>
					<small className="glyphicon glyphicon-user"> </small>
					by { post.author }
				</p>
				<p>
					<small className="glyphicon glyphicon-time"> </small>
					Posted { new Date(parseInt(post.date)).toDateString().substr(4) }
				</p>
			</header>

			<p>{ post.description }</p>
			<br/>

			<footer className="clearfix">
				<p className="pull-left">
					<b>Tags:&nbsp;</b>
					{ post.tags.map((tag, index)=>(

						<Link to={{pathname: "/posts", query: {category:`${tag.toLowerCase()}`}}}
							  key={ index }
							  onClick={ ()=> filter(tag) }
							  className="label label-default">
							{ tag }
						</Link>

					))}
				</p>

				<Link to={`/post/${ post.title }`}
					  className="btn btn-primary pull-right">
					Read More <i className="glyphicon glyphicon-chevron-right"> </i>
				</Link>

			</footer>
			<hr/>
		</article>
	)};


export default BlogEntry;
