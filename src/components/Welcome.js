import React from 'react';

const Welcome = React.createClass({
  session() {
    this.props.createSession();
  },
  render() {
    return (
      <div className="view-welcome">
        <h1 className="display-2">How did this sprint go?</h1>
        <h4 className="text-muted">Score Builder helps teams collect feedback they need to continuously improve.</h4>
        <button type="button" className="btn btn-primary btn-lg" onClick={this.session}>Start</button>
      </div>
    );
  }
});

export default Welcome;
