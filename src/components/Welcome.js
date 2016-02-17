import React from 'react';

const Welcome = React.createClass({
  session() {
    this.props.createSession();
  },
  render() {
    return (
      <div>
        <h1>Get better today with Score Builder</h1>
        <h2>Click to start a new retrospective session</h2>
        <button type="button" className="btn btn-primary" onClick={this.session}>Go</button>
      </div>
    );
  }
});

export default Welcome;
