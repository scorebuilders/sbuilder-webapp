import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Welcome from './components/Welcome';
import Score from './components/Score';
import Discuss from './components/Discuss';
import NotFound from './components/NotFound';

const App = React.createClass({
  render() {
    return (
      <div className="layout-wrapper">
        <header>Score Builder</header>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="s/:sessionId" component={Score} />
      <Route path="d/:sessionId" component={Discuss} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('root'));
