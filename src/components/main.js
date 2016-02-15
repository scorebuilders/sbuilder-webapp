import '../stylesheets/main.less';

import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import * as Actions from '../actions/';

import Button from './button';

const Main = React.createClass({
  onClick() {
    console.log('Woot.');
  },
  render() {
    return (
      <div>
        <h2>Hi Pete!</h2>
        <Button onClick={this.onClick}/>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
