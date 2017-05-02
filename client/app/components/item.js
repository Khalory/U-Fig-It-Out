import React from 'react';
import { Link } from 'react-router';

export default class Item extends React.Component {
  render() {
    return (
      <div>
        <div className="media-top media-left">
          <Link to={"/item/" + this.props.user} query={{itemId:this.props.id}}><img src={this.props.picture} alt="Item" /></Link>
        </div>
        <div className="media-body">
          <Link to={"/item/" + this.props.user} query={{itemId:this.props.id}}><h3>{this.props.itemtitle}</h3></Link>
          {this.props.itemdescription}
        </div>
        {this.props.children}
      </div>
    )
  }
}
