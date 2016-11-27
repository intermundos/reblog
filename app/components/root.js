import React from 'react';

import Header        from './common/Header';
import Footer        from './common/Footer';
import Sidebar       from '../components/sidebar/SidebarView';

class Root extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            { this.props.children }
          <Sidebar {...this.props} />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Root;
