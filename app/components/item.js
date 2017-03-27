import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <div>
        <div className="media-top media-left">
          <a href="#"><img src={this.props.picture} alt="Item" /></a>
        </div>
        <div className="media-body">
          <a href="#"><h3>{this.props.itemtitle}</h3></a>
          <a href="#">{this.props.itemdescription}</a>
        </div>
        {this.props.children}
      </div>
    )
  }
}
