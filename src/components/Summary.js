import React from 'react';

/**
  initial view, "go" button
*/

const Summary = React.createClass({
  componentDidMount() {
    fetch(`http://localhost:3000/api/report/${this.props.params.sessionId}`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
      // this.setState({ sessionId: resp.sessionId });
    });
  },
  render() {
    return (
      <div>
        <p>"Report" page where you can discuss results.</p>
      </div>
    );
  }
});

export default Summary;
