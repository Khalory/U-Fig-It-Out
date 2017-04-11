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

  componentDidMount() {
    getUserData(this.props.location.query.id, (userData) => {
      this.setState(userData);
    });
  }

  render() {
    return (
      <div>
        <Navbar user={this.state._id} name={this.state.username} />
        <SearchLeftBar activeIndex={this.props.params.category}/>
        <SearchListings category={2}/>
      </div>
    )
  }
}
