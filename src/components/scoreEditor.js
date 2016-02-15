import React from 'react';

const ScopeEditor = React.createClass({
  render() {
    return (
      <div>
        <h2>You are editing!</h2>
        <button onClick={this.props.actions.sendScores}>Done!</button>
      </div>
    );
  }
});

export default ScopeEditor;
