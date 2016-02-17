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
  updateScoreLabel(e) {
    const labelId = this.props.scope + '_label';
    document.getElementById(labelId).textContent = sliderValues[e.target.value];
  },
  render() {
    return (
      <div className="scope-input">
        <div className="score-block scope-label">Score your <strong>{this.props.scope}</strong> work.</div>
        <input className="score-block score-picker" id={this.props.scope + '_score'}
          type="range" min="1" max="5" onChange={this.updateScoreLabel} />
        <label className="score-block score-picker-label" id={this.props.scope + '_label'}>OK</label>
        <label className="score-block score-comment-label">Why did you choose that score?</label>
        <textarea className="score-block score-comment" id={this.props.scope + '_comment'}></textarea>
        <hr/>
      </div>
    );
  }
});

export default ScoreInput;
