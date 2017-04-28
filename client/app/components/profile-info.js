import React from 'react';
import UserRating from './user-rating'

export default class ProfileInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: {
        _id: this.props.user,
        avg_rating: this.props.rating,
        username: this.props.name
      }
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img className="img-thumbnail prof-pic" src={this.props.profile_picture} width="80%" />
          <br />
          <UserRating key={this.props.user} user={this.state.owner._id} owner={this.state.owner} />
          <br />
          {this.props.email}
        </div>
      </div>
    )
  }
}
