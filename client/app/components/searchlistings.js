import React from 'react';
import Item from './item';
import UserRating from './user-rating'
import {getCategoryListings} from '../server'

export default class SearchListings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {category: props.category}
  }

  componentDidMount() {
    getCategoryListings(this.props.category, (items) => {
      this.setState({items: items})
    })
  }

  componentDidUpdate() {
    if (this.state.category === this.props.category)
      return
    this.setState({category: this.props.category})
    getCategoryListings(this.props.category, (items) => {
      this.setState({items: items})
    })
  }

  render() {
    // PSEUDO CODE!!! need server.getIds (or something like that)
    //var item_ids = server.getIds('Search Terms...')
    //console.log(this.state)
    var items = !this.state.items ? <div></div> : this.state.items.map((listing, i) => {
                      return (<li key={i} className="media list-group-item listing-item">
                      <Item id={listing._id} user={this.props.user} picture={listing.images[0]} itemtitle={listing.title}
                        itemdescription={listing.description}>
                        <div className="media-top media-right user-rating">
                          <UserRating user={this.props.user} owner={listing.owner}/>
                        </div>
                      </Item>
                    </li>)})

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="panel panel-default fig-listings">
                <div className="panel-body">
                  <h4>{'Books > Textbooks: '}<b>"CS 311"</b></h4>
                  <ul className="list-group">
                    {items}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
