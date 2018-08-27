import React from 'react';
import GridItem from '../../components/GridItem';
import GridTitle from '../../components/GridTitle';
import GridFilters from '../../components/GridFilters';
import getResponse from '../../libs/getResponse';
import postResponse from '../../libs/postResponse';
import { apps } from '../../fixtures';

class GridContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      appsCount: apps.length,
        toggle: []
    };
    // Creates N amount of 'bool' elements inside the toggle array
    this.state.toggle = apps.map(() => false);
    return ;
  }
  componentDidMount () {
    getResponse('/users');
    postResponse('/users')
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
                  <React.Fragment key={ i }>
                    <GridItem
                      icon={ apps[i].icon }
                      info={ apps[i].infoBtn }
                      download={ apps[i].downloadBtn }
                      titleBold={ apps[i].title.bold }
                      titleRegular={ apps[i].title.regular }
                      category={ apps[i].category }
                      onPress={ () => this.toggleModal(i) }
                    />
                    { this.state.toggle[i] == false ? null :
                      <ModalDialog
                        description={ apps[i].description }
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
      <span> { props.description } </span>
    </React.Fragment>
  )
}

export default GridContainer;
