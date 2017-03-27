import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <div>
        <li className="media list-group-item">
          <div className="media-top media-left">
            <a href="#"><img src={this.props.picture} alt="Item" /></a>
          </div>
          <div className="media-body">
            <a href="#"><h3>{this.props.itemtitle}</h3></a>
            <a href="#">{this.props.itemdescription}</a>
          </div>
          <div className="media-right">
              <h3><a href="#">FigMan</a></h3>
              <ul className="nav nav-pills pull-right">
                <li role="presentation" className="active">
                  <span className="glyphicon glyphicon-star"></span>
                </li>
                <li role="presentation">
                  <span className="glyphicon glyphicon-star"></span>
                </li>
                <li role="presentation">
                  <span className="glyphicon glyphicon-star"></span>
                </li>
                <li role="presentation">
                  <span className="glyphicon glyphicon-star-empty"></span>
                </li>
                <li role="presentation">
                  <span className="glyphicon glyphicon-star-empty"></span>
                </li>
              </ul>
          </div>
        </li>
      </div>
    )
  }
}
