import React from 'react';
import Item from './item';
import UserRating from './user-rating'
import {getCategoryListings} from '../server'

export default class SearchListings extends React.Component {

  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount() {
    getCategoryListings(this.props.category, (items) => {
      this.setState({items: items})
    })
  }

  render() {
    if (this.state === null)
      return <div></div>
    // PSEUDO CODE!!! need server.getIds (or something like that)
    //var item_ids = server.getIds('Search Terms...')

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="panel panel-default fig-listings">
                <div className="panel-body">
                  <h4>{'Books > Textbooks: '}<b>"CS 311"</b></h4>
                  <ul className="list-group">

                    {this.state.items.map((listing, i) => {
                      console.log(listing)
                      return (<li key={i} className="media list-group-item listing-item">
                      <Item id={listing._id} picture={listing.pictures[0]} itemtitle={listing.title}
                        itemdescription={listing.description}>
                        <div className="media-top media-right">
                          <UserRating user={listing.owner}/>
                        </div>
                      </Item>
                    </li>)
                    })}

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
