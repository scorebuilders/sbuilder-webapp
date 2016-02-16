import React from 'react';

/**
  initial view, "go" button
*/

const Welcome = React.createClass({
  render() {
    return (
      <div>
        <h1>Get better today with Score Builder</h1>
        <h2>Click to start a new retrospective session</h2>
        <button>Go</button>
      </div>
    );
  }
});

export default Welcome;
