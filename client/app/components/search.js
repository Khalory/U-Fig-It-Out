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

  render() {
    return (
      <div>
        <Navbar user={this.props.params.id} />
        <SearchLeftBar activeIndex={this.props.location.query.category} user={this.props.params.id}/>
        <SearchListings category={this.props.location.query.category} user={this.props.params.id}/>
      </div>
    )
  }
}
