import React from 'react';
import UserRating from './user-rating'
import {getUserData} from '../server'

export default class ProfileInfo extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img className="img-thumbnail prof-pic" src={this.props.profile_picture} width="80%" />
          <br />
          USER RATING GOES HERE
          <br />
          {this.props.email}
        </div>
      </div>
    )
  }
}

//<UserRating user={this.props.user} />
