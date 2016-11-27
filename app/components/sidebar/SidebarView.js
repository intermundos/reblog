import React        from 'react';

import Search        from './Search';



const Sidebar = (props) => {
	return (
		<aside className="col-md-4 pull-right">
			<Search search={ props.search } />
		</aside>



	)
};

export default Sidebar;