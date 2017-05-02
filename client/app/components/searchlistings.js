import React from 'react';
import Item from './item';
import UserRating from './user-rating'
import {search} from '../server'

export default class SearchListings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      owner: null,
      category: props.category,
      searchText: props.searchText
    }
  }

  componentDidMount() {
    var params = {}
    if (this.props.searchText && this.props.searchText.trim().length > 0)
      params = {$text: {$search: this.props.searchText}}
    search(params, (items) => {
      this.setState({items: items})
    })
  }

  componentDidUpdate() {
    if (this.props.category !== this.state.category)
      this.setState({category: this.props.category})
    if (this.props.searchText !== null && this.state.searchText === this.props.searchText)
      return
    this.setState({
      category: this.props.category,
      searchText: this.props.searchText
    })
    var params = {}
    if (this.props.searchText.trim().length > 0)
      params = {$text: {$search: this.props.searchText}}
    search(params, (items) => {
      this.setState({items: items})
    })
  }

  render() {
    var items = !this.state.items ? <div></div> : this.state.items
      .filter((listing) => {
        return this.state.category.length === 0 || listing.categories.indexOf(this.state.category) > -1
      }).map((listing) => {
                      return (<li key={listing._id} className="media list-group-item listing-item">
                      <Item id={listing._id} user={this.props.user} picture={listing.images[0]} itemtitle={listing.title}
                        itemdescription={listing.description}>
                        <div className="media-top media-right user-rating">
                          <UserRating key={listing.owner} owner={listing.owner}/>
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
                  <ul key={this.state.searchText} className="list-group">
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
