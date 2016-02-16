import React from 'react';
import { browserHistory } from 'react-router';

/**
  initial view, "go" button
*/

const Welcome = React.createClass({
  createSession() {
    fetch('http://localhost:3000/api/session/new')
    .then(resp => resp.json())
    .then(resp =>{
      browserHistory.push('/s/' + resp.sessionId);
    })
    .catch((resp) => {
      console.log('failtown', resp);
    });
  },
  render() {
    return (
      <div>
        <h1>Get better today with Score Builder</h1>
        <h2>Click to start a new retrospective session</h2>
        <button onClick={this.createSession}>Go</button>
      </div>
    );
  }
});

export default Welcome;
