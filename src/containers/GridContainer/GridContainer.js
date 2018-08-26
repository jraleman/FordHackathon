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
      <React.Fragment>
        <div id="grid-container" className="cbp-l-grid-agency">
          <GridItem
            icon={ "https://picsum.photos/g/592/592/?random" }
            preview={ "https://picsum.photos/g/592/592/?random" }
            titleStrong="Item"
            titleLight="One"
            category="category1"
          />
          <GridItem
            icon={ "https://picsum.photos/g/592/592/?random" }
            preview={ "https://picsum.photos/g/592/592/?random" }
            titleStrong="Item"
            titleLight="One"
            category="category1"
          />
          <GridItem
            icon={ "https://picsum.photos/g/592/592/?random" }
            preview={ "https://picsum.photos/g/592/592/?random" }
            titleStrong="Item"
            titleLight="One"
            category="category1"
          />
          <GridItem
            icon={ "https://picsum.photos/g/592/592/?random" }
            preview={ "https://picsum.photos/g/592/592/?random" }
            titleStrong="Item"
            titleLight="One"
            category="category1"
          />
          <GridItem
            icon={ "https://picsum.photos/g/592/592/?random" }
            preview={ "https://picsum.photos/g/592/592/?random" }
            titleStrong="Item"
            titleLight="One"
            category="category1"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default GridContainer;
