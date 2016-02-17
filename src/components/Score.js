import React from 'react';
import { browserHistory } from 'react-router';

import ScoreInput from './ScoreInput.js';

const Score = React.createClass({
  submitScores() {
    browserHistory.push('/d/' + this.props.params.sessionId);
  },
  render() {
    return (
      <div>
        <ScoreInput scope="own"/>
        <ScoreInput scope="team"/>
        <ScoreInput scope="company"/>
        <button onClick={this.submitScores}>I'm Finished</button>
      </div>
    );
  }
});

export default Score;
