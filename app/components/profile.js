import React from 'react';
import Navbar from './navbar'
import ProfileInfo from './profile-info'
import ProfileListings from './profile-listings'
import ChatPopup from './chat-popup'

export default class Index extends React.Component {

  render() {
    return(
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProfileInfo user={this.props.user} />
            </div>
            <div className="col-md-8">
              <ProfileListings user={this.props.user} userListings={[]} />
            </div>
          </div>
        </div>
        <ChatPopup />
      </div>
    )
  }
}
