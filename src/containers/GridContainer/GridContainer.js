import React from 'react';
import GridItem from '../../components/GridItem';
import GridTitle from '../../components/GridTitle';
import GridFilters from '../../components/GridFilters';
import getResponse from '../../libs/getResponse';

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
        <GridTitle
          leftSide={ "App" }
          rightSide={ "Store" }
        />
        <GridFilters />
        <div className="row">
          <div className="col-md-12">
            <div id="grid-container" className="cbp-l-grid-agency">
              <GridItem
                icon={ "https://picsum.photos/g/592/592/?random" }
                preview={ "https://picsum.photos/g/592/592/?random" }
                titleStrong="Item"
                titleLight="One"
                category="category1"
              />
              <GridItem
                icon={ "https://picsum.photos/g/593/593/?random" }
                preview={ "https://picsum.photos/g/593/593/?random" }
                titleStrong="Item"
                titleLight="Two"
                category="category2"
              />
              <GridItem
                icon={ "https://picsum.photos/g/594/594/?random" }
                preview={ "https://picsum.photos/g/594/594/?random" }
                titleStrong="Item"
                titleLight="Three"
                category="category3"
              />
              <GridItem
                icon={ "https://picsum.photos/g/595/595/?random" }
                preview={ "https://picsum.photos/g/595/595/?random" }
                titleStrong="Item"
                titleLight="Four"
                category="category4"
              />
              <GridItem
                icon={ "https://picsum.photos/g/596/596/?random" }
                preview={ "https://picsum.photos/g/596/596/?random" }
                titleStrong="Item"
                titleLight="Five"
                category="category1"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GridContainer;
