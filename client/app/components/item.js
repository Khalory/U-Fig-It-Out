import React from 'react';
import { Link } from 'react-router';

export default class Item extends React.Component {
  render() {
    return (
      <div>
        <div className="media-top media-left">
          <a href="#"><img src={this.props.picture} alt="Item" /></a>
        </div>
        <div className="media-body">
          <Link to={"/item/" + this.props.id}><h3>{this.props.itemtitle}</h3></Link>
          {this.props.itemdescription}
        </div>
        {this.props.children}
      </div>
    )
  }
}
