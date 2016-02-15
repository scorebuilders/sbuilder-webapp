import '../stylesheets/button.less';
import React from 'react';

const Button = React.createClass({
  render() {
    return (
      <div>
        <h2>Oh click me!:</h2>
        <button onClick={() => this.props.onClick(null)}>Right here.</button>
      </div>
    );
  }
});

export default Button;
