import React from 'react';
import map from 'lodash/map';

const SummaryScope = React.createClass({
  render() {
    const scoreList = map(this.props.scope.scores, (s) => {
      return (
        <div key={s.score + s.comment}>
          <div>Score: {s.score}</div>
          <div>Comment: {s.comment}</div>
        </div>
      );
    });
    return (
      <div>
        <p>Average: {this.props.scope.average}</p>
        <div>{scoreList}</div>
        <hr/>
      </div>
    );
  }
});

export default SummaryScope;
