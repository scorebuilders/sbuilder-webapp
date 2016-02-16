import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/Welcome';

const App = React.createClass({
  render() {
    return (
      <div className="layout-wrapper">
        <Welcome/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
