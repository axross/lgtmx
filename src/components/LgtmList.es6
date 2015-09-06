import React from 'react';
import Bemmer from 'bemmer';

export const LgtmItem = React.createClass({
  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  },

  renderItems() {
    return this.props.lgtms.map(lgtm => {
      return (
        <div>
          a
        </div>
      );
    });
  },
});
