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
    // console.log(sliderValues[e.target.value], this.props.scope, 'updating score label!');
    document.getElementById(labelId).textContent = sliderValues[e.target.value];
  },
  render() {
    return (
      <div>
        <div className="scope-label">Score your {this.props.scope} work.</div>
        <label id={this.props.scope + '_label'}>OK</label>
        <input className="score-picker"
          id={this.props.scope + '_score'}
          type="range" min="1" max="5"
          onChange={this.updateScoreLabel} />
        <label className="helptext">Why did you choose that score?</label>
        <textarea className="score-comment" id={this.props.scope + '_comment'}></textarea>
        <hr/>
      </div>
    );
  }
});

export default ScoreInput;
