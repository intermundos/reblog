import React from 'react';
import { render } from 'react-dom'

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>header</h1>
        <h1>main view</h1>
        <h1>sidebar</h1>
        <h1>footer</h1>
      </div>
    )
  }
}

export default Root;
