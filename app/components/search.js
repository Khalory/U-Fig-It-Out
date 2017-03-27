import React from 'react';
import SearchLeftBar from './searchleftbar';
import SearchListings from './searchlistings';
import Navbar from './navbar'

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchLeftBar />
        <SearchListings />
      </div>
    )
  }
}
