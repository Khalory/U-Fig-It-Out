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
          <li><Link to={"/main/000000000000000000000001"}>Main Page</Link></li>
          <li><Link to={"/profile/000000000000000000000001"} query={{user:"000000000000000000000001"}}>Profile Page</Link></li>
          <li><Link to={"/search/000000000000000000000001"} query={{category:"000000000000000000000002"}}>Search Results</Link></li>
          <li><Link to={"/item/000000000000000000000001"} query={{itemId:"000000000000000000000002"}}>Item Listing</Link></li>
          <li><Link to={"/make_listing/000000000000000000000001"}>Make Listing</Link></li>
        </ul>
      </div>
    )
  }
}
