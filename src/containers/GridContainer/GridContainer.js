import React from 'react';

class GridContainer extends React.Component {
  constructor (prop) {
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
