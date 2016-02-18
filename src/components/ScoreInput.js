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
    this.props.updateScore(this.props.scope, {
      score: this.refs.scorePicker.value,
      comment: this.refs.scoreComment.value
    });
  },
  updateScoreLabel(e) {
    const labelId = this.props.scope + '_label';
    document.getElementById(labelId).textContent = sliderValues[e.target.value];
  },
  render() {
    return (
      <div className="scope-input">
        <div className="score-block scope-label">Score your <mark>{this.props.scope}</mark> work.</div>
        <input ref="scorePicker" type="range" min="1" max="5" onChange={this.update} className="score-block score-picker" />
        <label id={this.props.scope + '_label'} className="score-block score-picker-label">{sliderValues[3]}</label>
        <label className="text-muted score-block score-comment-label">Explain your score</label>
        <textarea ref="scoreComment" onChange={this.update} className="score-block score-comment"></textarea>
        <hr/>
      </div>
    );
  }
});

export default ScoreInput;
