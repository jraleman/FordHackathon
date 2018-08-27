import React from 'react';
import GridItem from '../../components/GridItem';
import GridTitle from '../../components/GridTitle';
import GridFilters from '../../components/GridFilters';
import getResponse from '../../libs/getResponse';

const appsList = [
  {
    "title": {
      "bold": "Item",
      "light": "Eight"
    },
    "description": "Description of the eight item...",
    "icon": "https://picsum.photos/g/599/599/?random",
    "infoBtn": "https://picsum.photos/g/599/599/?random",
    "downloadBtn": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "legal": {
      "tos": "123",
      "pc": "321"
    },
    "category": "new"
  }
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
  componentDidMount () {
    getResponse('/users');
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
              { Array.apply(null, Array(this.state.appsCount)).map(
               function(item, i) {
                 return (
                  <React.Fragment>
                    <GridItem
                      key={ i }
                      icon={ appsList[i].icon }
                      info={ appsList[i].infoBtn }
                      download={ appsList[i].downloadBtn }
                      titleBold={ appsList[i].title.bold }
                      titleRegular={ appsList[i].title.regular}
                      category={ appsList[i].category }
                      onPress={ () => this.toggleModal(i) }
                    />
                    { this.state.toggle[i] == false ? null :
                      <ModalDialog
                        description={ appsList[i].description }
                      />
                    }
                  </React.Fragment>
                  );
                }, this)
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const ModalDialog = (props) => {
  return (
    <React.Fragment>
      <div>
        <p> { props.description } </p>
      </div>
    </React.Fragment>
  )
}

export default GridContainer;
