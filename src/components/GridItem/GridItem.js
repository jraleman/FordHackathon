import React from 'react';

class GridItem extends React.Component {
  constructor (props) {
    super(props);
    this._appTitle = this.props.title;
    this._appIcon = this.props.icon;
    this._appDescription = this.props.desc;
    this._termOfServices = this.props.tos;
    this._privacyPolicy = this.props.pc;
    this._onPress = this.props.onPress;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div>
        <p>{ "GridItem Component" }</p>
      </div>
    );
  }
}

export default GridItem;
