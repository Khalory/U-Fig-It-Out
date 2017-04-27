import React from 'react';
import Item from './item';
import {getUserListings} from '../server.js'
import {getItemListings} from '../server.js'
import {Link} from 'react-router';

export default class ProfileListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  refresh() {
    getItemListings(this.props.items, (userListings) => {
      this.setState({userListings: userListings})
    })
  }

  componentDidMount() {
    getItemListings(this.props.items, (userListings) => {
      this.setState({userListings: userListings})
    })
  }

//These two clickEvents are disabled for now
  handleBuyClick(clickEvent) {
    clickEvent.preventDefault()
    if(clickEvent.button === 2) {
      this.refresh(1);
    }
  }

  handleSellClick(clickEvent) {
    clickEvent.preventDefault()
    if(clickEvent.button === 2) {
      this.refresh(0);
    }
  }


  render() {
    var items = !this.state.userListings ? <div></div> : this.state.userListings.map((listing, i) => {
              return (<li key={i} className="media list-group-item listing-item">
              <Item id={listing._id} user={this.props.loggeduser} picture={listing.images[0]} itemtitle={listing.title}
                itemdescription={listing.description}>
                <div className="media-top media-right">
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-cog"></span>Edit</button>
                </div>
              </Item>
            </li>)
            })

    return (
      <div className="panel panel-default fig-listings">
        <div className="panel-heading">
          <ul className="nav nav-tabs nav-justified">
            <li role="presentation">
              <a href="#" onClick={(e) => this.handleSellClick(e)}><span className="glyphicon glyphicon-tag">
              </span> <strong>Selling</strong></a>
            </li>
            <li role="presentation">
              <a href="#" onClick={(e) => this.handleBuyClick(e)}><span className="glyphicon glyphicon-heart"></span>
              <strong>Buying</strong></a>
            </li>
          </ul>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item listing-add">
              <Link to={"/make_listing/" + this.props.user}><center>Add another listing!</center></Link>
            </li>
            {items}
          </ul>
        </div>
      </div>
    )
  }
}
