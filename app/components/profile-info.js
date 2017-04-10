import React from 'react';
import UserRating from './user-rating'
import {getUserData} from '../server'

export default class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {
    getUserData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img className="img-thumbnail prof-pic" src={this.state.profile_picture} width="80%" />
          <br />
          <UserRating name={this.state.username} rating={this.state.avg_rating} />
          <br />
          {this.state.email}
        </div>
      </div>
    )
  }
}
