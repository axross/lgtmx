import React from 'react';

const Application = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
});

export default Application;
