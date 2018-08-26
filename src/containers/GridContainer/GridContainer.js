import React from 'react';

const appsList = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];

class GridContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      appsCount: appsList.length,
        toggle: []
    };
    // Creates N amount of 'bool' elements inside the toggle array
    this.state.toggle = appsList.map(() => false);
    return ;
  }
  render () {
    return (
      <div>
        <p>{ "GridContainer" }</p>
      </div>
    );
  }
}

export default GridContainer;
