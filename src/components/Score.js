import React from 'react';
import { browserHistory } from 'react-router';

import ScoreInput from './ScoreInput.js';

const pushPayload = {
  sessionId: null,
  scopes: {}
};

const Score = React.createClass({
  updatePushPayload(scope, score, comment) {
    pushPayload.sessionId = this.props.params.sessionId;
    pushPayload.scopes[scope] = pushPayload.scopes[scope] || {};
    pushPayload.scopes[scope].score = score;
    pushPayload.scopes[scope].comment = comment;
  },
  submitScores() {
    // TODO: validation - pk2
    fetch('http://localhost:3000/api/score', {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(pushPayload)
    })
    .then(() => {
      browserHistory.push('/d/' + this.props.params.sessionId);
    }).catch(resp => {
      console.log(resp, 'a bad thing happened');
    });
  },
  render() {
    return (
      <div className="score-form">
        <ScoreInput updatePayload={this.updatePushPayload} scope="own"/>
        <ScoreInput updatePayload={this.updatePushPayload} scope="team"/>
        <ScoreInput updatePayload={this.updatePushPayload} scope="company"/>
        <button className="btn btn-success" onClick={this.submitScores}>I'm Finished</button>
      </div>
    );
  }
});

export default Score;
