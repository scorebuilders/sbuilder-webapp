import React from 'react';
import { browserHistory } from 'react-router';

import ScoreInput from './ScoreInput.js';

const Score = React.createClass({
  getInitialState() {
    return {
      scores: {}
    };
  },
  saveScore() {
    // TODO: validation - pk2
    const sessionId = this.props.params.sessionId;
    const data = JSON.stringify({
      sessionId: this.state.sessionId,
      scopes: this.state.scores
    });
    fetch('http://localhost:3000/api/score', {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: data
    })
    .then(() => {
      browserHistory.push('/d/' + sessionId);
    });
    // removing catch until we're pushing this to prod. - pk
  },
  updateScore(scope, values) {
    this.state.scores[scope] = this.state.scores[scope] || {};
    this.state.scores[scope] = values;
  },
  render() {
    return (
      <div className="score-form">
        <ScoreInput updateScore={this.updateScore} scope="own"/>
        <ScoreInput updateScore={this.updateScore} scope="team"/>
        <ScoreInput updateScore={this.updateScore} scope="company"/>
        <button className="btn btn-success" onClick={this.saveScore}>I'm Finished</button>
      </div>
    );
  }
});

export default Score;
