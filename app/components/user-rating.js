import React from 'react';

export default class UserRating extends React.Component {
  render() {
    return (
      <div>
        <h3>FigMan</h3>
        <ul className="nav nav-pills pull-left">
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
    )
  }
}
