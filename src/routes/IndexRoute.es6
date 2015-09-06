import Bemmer from 'bemmer';
import React from 'react';
import { connect } from 'react-redux';

// import { LgtmList } from '../components';

export const IndexRoute = React.createClass({
  render() {
    return (
      <div>
        aaaaa
      </div>
    );
  },
});

export default connect(state => {
  return {
    // currentDisplayingLgtms: state.currentDisplayingLgtms.items,
  };
})(IndexRoute);
