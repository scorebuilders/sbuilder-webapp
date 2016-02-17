import React from 'react';

// needs https://en.wikipedia.org/wiki/Likert_scale revisions
const sliderValues = {
  1: 'Bad',
  2: 'OK',
  3: 'Good',
  4: 'Great',
  5: 'Excellent'
};

const ScoreInput = React.createClass({
  update(e) {
    if (e.target.classList.contains('score-picker')) {
      this.updateScoreLabel(e);
    }
    const scoreVal = document.getElementById(this.props.scope + '_score').value;
    const commentVal = document.getElementById(this.props.scope + '_comment').value;
    this.props.updatePayload(this.props.scope, scoreVal, commentVal);
  },
  updateScoreLabel(e) {
    const labelId = this.props.scope + '_label';
    document.getElementById(labelId).textContent = sliderValues[e.target.value];
  },
  render() {
    return (
      <div className="scope-input">
        <div className="score-block scope-label">Score your <mark>{this.props.scope}</mark> work.</div>
        <input
          id={this.props.scope + '_score'}
          type="range" min="1" max="5" onChange={this.update}
          className="score-block score-picker" />
        <label id={this.props.scope + '_label'} className="score-block score-picker-label">OK</label>
        <label className="text-muted score-block score-comment-label">Explain your score</label>
        <textarea
          id={this.props.scope + '_comment'}
          onChange={this.update}
          className="score-block score-comment"></textarea>
        <hr/>
      </div>
    );
  }
});

export default ScoreInput;
