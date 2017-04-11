import React from 'react';
import Navbar from './navbar'
import SearchLeftBar from './searchleftbar';
import SearchListings from './searchlistings';
import {getUserData} from '../server'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  //Only grabbing user data for navbar
  //Will need to also get category and listing data
  componentDidMount() {
    getUserData(this.props.params.id, (userData) => {
      this.setState(userData);
    });
  }

  render() {
    return (
      <div>
        <Navbar user={this.state._id} name={this.state.username} />
        <SearchLeftBar />
        <SearchListings />
      </div>
    )
  }
}
