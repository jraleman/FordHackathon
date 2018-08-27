import React from 'react';

class GridTitle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this._titleStrong = this.props.leftSide;
    this._titleLight = this.props.rightSide;
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <div className="heading">
          <h2><strong>{ this._titleStrong }</strong>{ this._titleLight }</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default GridTitle;
