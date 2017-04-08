import React from 'react';
import Item from './item';
import UserRating from './user-rating'

export default class SearchListings extends React.Component {
  render() {
    // PSEUDO CODE!!! need server.getIds (or something like that)
    var item_ids = server.getIds('Search Terms...')
    var item_listings = server.getItemListings(item_ids)

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="panel panel-default fig-listings">
                <div className="panel-body">
                  <h4>{'Books > Textbooks: '}<b>"CS 311"</b></h4>
                  <ul className="list-group">

                    {item_listings.map((listing) => {
                      var user = listing.owner
                      (<li className="media list-group-item listing-item">
                      <Item picture={listing.pictures[0]} itemtitle={listing.title}
                        itemdescription={listing.description}>
                        <div className="media-top media-right">
                          <UserRating name={user.username} rating={user.avg_rating} />
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
