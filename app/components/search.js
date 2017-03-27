import React from 'react';
import SearchLeftBar from './searchleftbar';
import SearchListings from './searchlistings';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchLeftBar />
        <SearchListings />
      </div>
    )
  }
}
