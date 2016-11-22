import React from 'react';
import { connect }        from 'react-redux';
import { fetchPosts }        from '../actions/postsActions';

import Header        from './common/Header';
import Footer        from './common/Footer';
import Sidebar       from '../containers/Sidebar';

class Root extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            { this.props.children }
          <Sidebar />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(Root);
