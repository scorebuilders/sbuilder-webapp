import React from 'react';
import { browserHistory } from 'react-router';

/**
  initial view, "go" button
*/

const Score = React.createClass({
  submitScores() {
    // where does sessionId come from?
    browserHistory.push('/d/' + sessionId);
  },
  render() {
    return (
      <div>
        <p>"score" page where you input scores & comments</p>
        <button onClick={this.submitScores}>I'm Finished</button>
      </div>
    );
  }
});

export default Score;
