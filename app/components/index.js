import React from 'react';
import {Link} from 'react-router';

import newListing from './newlisting'
import Profile from './profile'
import Search from './search'
import ListingPage from './listingPage'

export default class Index extends React.Component {
  render() {
    return(
      <div>
        <h2>Application Views</h2>
        <ul>
          <li><Link to={"/main/"}>Main Page</Link></li>
          <li><Link to={"/profile/" + 1}>Profile Page</Link></li>
          <li><Link to={"/search/"}>Search Results</Link></li>
          <li><Link to={"/item/" + 2}>Item Listing</Link></li>
          <li><Link to={"/make_listing/"}>Make Listing</Link></li>
        </ul>
      </div>
    )
  }
}