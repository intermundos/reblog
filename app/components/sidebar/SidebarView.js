import React, { Component }        from 'react';
import { connect }        from 'react-redux';
import moment        from 'moment';

import Search        from './Search';
import FilterAll        from './filter/all';
import FilterAuthor        from './filter/author';
import FilterCategory        from './filter/category';
import FilterDate        from './filter/date';


class Sidebar extends Component{
	render(){

		const { location, posts } = this.props;
		const { router } = this.context;
		let activePath = router.isActive('admin') ? 'admin' : 'posts';

		let tags = [], authors = [], dates = [], metaData = {};

		posts.forEach((post)=>{
			tags.push(post.tags);
			authors.push(post.author);
			dates.push(moment(parseInt(post.date)).format('MMMM YYYY'));
		});

		tags = [].concat.apply([], tags);

		const sortMeta = (arr) => {
			let result = {};
			for(let i = 0; i < arr.length; ++i) {
				if(!result[arr[i]])
					result[arr[i]] = 0;
				++result[arr[i]];
			}
			return result;
		};

		metaData.authors = sortMeta(authors.sort());
		metaData.tags = sortMeta(tags.sort());
		metaData.dates = sortMeta(dates);

		return (
			<aside className="col-md-4 pull-right" ref="sidebar" id="sidebar">
				<Search activePath={ activePath }/>
				<div className="well filters">
					<h3>Filter posts:</h3>
					<FilterAll postsCount={ posts.length } search={ location.search } activePath={ activePath }/>
					<FilterCategory categories={metaData.tags} activePath={ activePath } query={ location.query }/>
					<FilterAuthor authors={metaData.authors} activePath={ activePath } query={ location.query }/>
					<FilterDate dates={metaData.dates} activePath={ activePath } query={ location.query }/>

				</div>
			</aside>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
};

export default connect(mapStateToProps)(Sidebar);

Sidebar.contextTypes = {
	router: React.PropTypes.object.isRequired
};


