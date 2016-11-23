import React        from 'react';
import { Link }        from 'react-router';

const Pager = ({indexPage, endPage}) => {
	return (
		<ul className="pager">
			{ indexPage == endPage ?
				null :
				<li className="previous">
					<Link className="pager-control page-older"
						  to={{pathname: `posts/${indexPage+1}`}}>
						← Older
					</Link>
				</li>

			}
			{ indexPage == 1 ?
				null :
				<li className="next">
					<Link className="pager-control page-older"
						  to={{pathname: indexPage == 2 ? `posts` : `posts/${indexPage-1}`}}>
						Newer →
					</Link>
				</li>
			}
		</ul>
	)
};

export default Pager;