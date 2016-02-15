import '../stylesheets/main.less';

import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as Actions from '../actions/';

const Main = React.createClass({
  render() {
    const actions = bindActionCreators(Actions, this.props.dispatch);

    return (
      <div>
        <h2>Welcome Header!</h2>
        <button onClick={actions.requestSession}>Get Started!</button>
        {this.props.session}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
