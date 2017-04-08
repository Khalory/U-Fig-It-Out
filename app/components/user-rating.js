import React from 'react';

export default class UserRating extends React.Component {
  calcRating(){
    var stars = []
    for(var i=1; i<6; i++) {
      if (i<=this.props.rating) {
        stars.push((<li role="presentation" className="active" key={i}>
                    <span className="glyphicon glyphicon-star"></span>
                  </li>))
      }
      else {
        stars.push((<li role="presentation" className="active" key={i}>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </li>))
      }
    }
    return stars
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul className="nav nav-pills pull-left">
          {this.calcRating()}
        </ul>
      </div>
    )
  }
}
