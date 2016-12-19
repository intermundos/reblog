import React                      from 'react';
import { Link, IndexLink }        from 'react-router';

const Header = () => {
  return (
		  <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
			  <div className="container">
				  <div className="navbar-header">
					  <button type="button" className="navbar-toggle">
						  <span className="sr-only">Toggle navigation</span>
						  <label htmlFor="toggle-nav-mobile">
							  <span className="icon-bar" />
							  <span className="icon-bar" />
							  <span className="icon-bar" />
						  </label>
					  </button>
					  <IndexLink to={"/"} className="navbar-brand">React Blog</IndexLink>
				  </div>

				  <input type="checkbox" id="toggle-nav-mobile" hidden />

				  <div className="collapse navbar-collapse">

					  <ul className="nav navbar-nav">
						  <li>
							  <Link to={`/posts`} activeClassName="nav-active">Posts</Link>
						  </li>
						  <li>
							  <IndexLink to="/admin" activeClassName="nav-active">Admin</IndexLink>
						  </li>
					  </ul>

				  </div>
			  </div>
		  </nav>
  )
};

export default Header;