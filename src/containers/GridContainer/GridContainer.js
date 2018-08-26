import React from 'react';
import GridItem from '../../components/GridItem';

const appsList = [
  {
    "appTitleStrong": "lol",
    "appTitleLight": "lol",
    "appTitle": "lol",
    "appIcon": "lol",
    "appDescription": "lol",
    "appPreview": "lol",
    "termOfServices": "lol",
    "privacyPolicy": "lol"
  },
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
