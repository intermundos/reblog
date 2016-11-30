import React            from 'react';
import { Link }         from 'react-router';

const Pager = ({indexPage, lastPage, query}) => {
	return (
		<ul className="pager">
			{ indexPage == lastPage ?
				null :
				<li className="previous">
					<Link className="pager-control page-older"
						  to={{pathname: `posts/${indexPage+1}`, query}}>
						← Older
					</Link>
				</li>

			}
			{ indexPage == 1 ?
				null :
				<li className="next">
					<Link className="pager-control page-older"
						  to={{pathname: indexPage == 2 ? `posts` : `posts/${indexPage-1}`, query}}>
						Newer →
					</Link>
				</li>
			}
		</ul>
	)
};

export default Pager;