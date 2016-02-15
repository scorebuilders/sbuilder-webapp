import '../stylesheets/main.less';

import React from 'react';
import { connect } from 'react-redux';

import ScoreEditor from './scoreEditor';
import SessionMaker from './sessionMaker';
import SessionReport from './sessionReport';

import { bindActionCreators } from 'redux';
import * as Actions from '../actions/';

const Main = React.createClass({
  render() {
    const actions = bindActionCreators(Actions, this.props.dispatch);
    let component;
    if (this.props.session && !this.props.isDone) {
      component = <ScoreEditor session={this.props.session} actions={actions}/>;
    } else if (this.props.session && this.props.isDone) {
      component = <SessionReport session={this.props.session} actions={actions} />; // This is lazy.
    } else {
      component = <SessionMaker actions={actions} />; // This is lazy.
    }

    return (
      <div>
        <h2>Welcome Header!</h2>
        {component}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
