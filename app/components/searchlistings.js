import React from 'react';
import Item from './item';
import UserRating from './user-rating'
import {getItemListings} from '../server'

export default class SearchListings extends React.Component {

  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount() {
    var item_ids = [1, 1, 1, 2, 1]
    getItemListings(item_ids, (items) => {
      console.log(items)
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
                      return (<li key={i} className="media list-group-item listing-item">
                      <Item id={listing._id} picture={listing.pictures[0]} itemtitle={listing.title}
                        itemdescription={listing.description}>
                        <div className="media-top media-right">
                          <UserRating name={listing.owner.username} rating={listing.owner.avg_rating} />
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
