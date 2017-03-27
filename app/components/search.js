import React from 'react';
import Navbar from './navbar'
import SearchLeftBar from './searchleftbar';
import SearchListings from './searchlistings';

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
