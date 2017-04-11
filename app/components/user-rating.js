import React from 'react';
import { getUserData } from '../server'
import { Link } from 'react-router'

export default class UserRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  componentDidMount() {
    getUserData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }

  calcRating(){
    var stars = []
    for(var i=1; i<6; i++) {
      if (i<=this.state.avg_rating) {
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
        <h3><Link to={"/profile/" + this.state._id}>{this.state.username}</Link></h3>
        <ul className="nav nav-pills pull-left">
          {this.calcRating()}
        </ul>
      </div>
    )
  }
}
