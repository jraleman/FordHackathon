import React from 'react';

class GridFilters extends React.Component {
  constructor (props) {
    super(props);
    this._categoryOne = ".category1";
    this._categoryTwo = ".category2";
    this._categoryThree = ".category3";
    this._categoryFour = ".category4";
    this._categoryTitleOne = "{ CategoryOne }";
    this._categoryTitleTwo = "{ CategoryTwo }";
    this._categoryTitleThree = "{ CategoryThree }";
    this._categoryTitleFour = "{ CategoryFour }";
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <div
          id="filters-container"
          className="cbp-l-filters-alignCenter"
        >
          <div
            data-filter="*"
            className="cbp-filter-item-active cbp-filter-item"
          >
            {"All"}
          </div>
          <div
            data-filter={ this._categoryOne }
            className="cbp-filter-item"
          >
            { this._categoryTitleOne }
          </div>
          <div
            data-filter={ this._categoryTwo }
            className="cbp-filter-item"
          >
            { this._categoryTitleTwo }
          </div>
          <div
            data-filter={ this._categoryThree }
            className="cbp-filter-item"
          >
            { this._categoryTitleThree }
          </div>
          <div
            data-filter={ this._categoryFour }
            className="cbp-filter-item"
          >
            { this._categoryTitleFour }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GridFilters;
