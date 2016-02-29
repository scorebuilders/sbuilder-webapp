import React from 'react';
import _ from 'lodash';

import SummaryScope from './SummaryScope.js';

const Summary = React.createClass({
  getInitialState() {
    return {summary: []};
  },
  componentWillMount() {
    this.fetchScore.call(this);
    setInterval(() => {
      this.fetchScore.call(this);
    }, 2000);
  },
  fetchScore() {
    fetch(`http://localhost:3000/api/report/${this.props.params.sessionId}`)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({summary: resp});
    });
  },
  render() {
    const scoreScopes = _.map(this.state.summary.scopes, (scope, key) => {
      return <SummaryScope key={key} scope={scope}/>;
    });
    return (
      <div>
        <p>"Session Summary" page where you can discuss results.</p>
        {scoreScopes}
      </div>
    );
  }
});

export default Summary;
