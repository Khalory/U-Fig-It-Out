import React from 'react';
import UserRating from './user-rating'
import {getUserData} from '../server'

export default class ProfileInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img className="img-thumbnail" src="img/fig-man.jpg" width="80%" />
          <br />
          <UserRating name="FigMan" />
          <br />
          figman.umass.edu
        </div>
      </div>
    )
  }
}
