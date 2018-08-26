import React from 'react';

class GridItem extends React.Component {
  constructor (props) {
    super(props);
    this._appTitleStrong = this.props.titleStrong;
    this._appTitleLight = this.props.titleLight;
    this._appTitle = this.props.titleStrong + this.props.titleLight;
    this._appIcon = this.props.icon;
    this._appDescription = this.props.desc;
    this._appPreview = this.props.preview;
    this._termOfServices = this.props.tos;
    this._privacyPolicy = this.props.pc;
    this._onPress = this.props.onPress;
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <div className="cbp-item col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 category1">
          <div className="cbp-caption">
            <div className="cbp-caption-hover-gradient">
              <img
                src={ this._appIcon }
                alt={ this._appTitle }
              />
            </div>
            <div className="cbp-caption-activeWrap">
              <div className="cbp-l-caption-alignCenter">
                <div className="cbp-l-caption-body portfolio-icons">
                  { /* Check 'data-title="ItemOne"' maybe it can help me fix nostromo... { data-title }, camelCase?  */ }
                  <a
                    href={ this._appPreview }
                    className="cbp-lightbox"
                    data-title="ItemOne"
                  >
                    <i className="fa fa-info"></i>
                  </a>
                  { /* Open modal here... update MetroCube template to add Modal */ }
                  <a href="#">
                    <i className="fa fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h4 className="cbp-title">
            <strong>{ this._appTitleStrong }</strong>{ this._appTitleLight }
          </h4>
        </div>
      </React.Fragment>
    );
  }
}

export default GridItem;
