import React from 'react';

const SessionMaker = React.createClass({
  render() {
    return <button onClick={this.props.actions.requestSession}>Create Session!</button>;
  }
});

export default SessionMaker;
