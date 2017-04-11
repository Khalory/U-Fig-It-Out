import React from 'react';
import Navbar from './navbar'
import ProfileInfo from './profile-info'
import ProfileListings from './profile-listings'
import ChatPopup from './chat-popup'
import {getUserData} from '../server'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = null
  }

  componentDidMount() {
    getUserData(this.props.params.id, (userData) => {
      this.setState(userData);
    });
  }

  render() {
    if (this.state === null)
      return <div></div>
    return(
      <div>
        <Navbar user={this.state._id} name={this.state.username}/>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProfileInfo key={this.state._id} user={this.state._id} name={this.state.username} rating={this.state.avg_rating} profile_picture={this.state.profile_picture} email={this.state.email} />
            </div>
            <div className="col-md-8">
              <ProfileListings key={this.state._id} user={this.state._id} userListings={[]} />
            </div>
          </div>
        </div>
        <ChatPopup />
      </div>
    )
  }
}
