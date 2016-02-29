import './styles/screen.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Welcome from './components/Welcome';
import Score from './components/Score';
import Summary from './components/Summary';
import NotFound from './components/NotFound';

const App = React.createClass({
  getInitialState() {
    return {sessionId: null};
  },
  createSession() {
    fetch('http://localhost:3000/api/session/new')
    .then(resp => resp.json())
    .then(resp => {
      this.setState({sessionId: resp.sessionId});
      browserHistory.push('/s/' + resp.sessionId);
    });
  },
  render() {
    return (
      <div className="layout-wrapper">
        <header><a href="/">Score Builder</a></header>
        {this.props.children && React.cloneElement(this.props.children,
          {createSession: this.createSession})}
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="s/:sessionId" component={Score} />
      <Route path="d/:sessionId" component={Summary} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('root'));
