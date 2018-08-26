import React from 'react';
import GridContainer from '../GridContainer';

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <div>
        <GridContainer />
      </div>
    );
  }
}

export default RootContainer;
