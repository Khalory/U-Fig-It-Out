import React from 'react';
import { Link } from 'react-router'

export default class UserRating extends React.Component {
  calcRating(){
    var stars = []
    for(var i=1; i<6; i++) {
      if (i<=this.props.user.avg_rating) {
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
    var rating = this.calcRating()
    return (
      <div>
        <h3><Link to={"/profile/" + this.props.user._id}>{this.props.user.username}</Link></h3>
        <ul className="nav nav-pills pull-left">
          {rating}
        </ul>
      </div>
    )
  }
}
