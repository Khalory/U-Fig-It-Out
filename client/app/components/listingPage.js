import React from 'react'
import PreferredPayments from './preferredpayments'
import Navbar from './navbar'
import ListingImages from './listingImages'
import UserRating from './user-rating'
import {getItemListings} from '../server'

export default class ListingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemId: this.props.location.query.itemId,
      title: '',
      price: '',
      owner: {
        _id: 0,
        avg_rating: 0,
        username: ''
      },
      description: '',
      preferred_payments: [],
      images: []
    }
  }

  componentDidMount() {
    getItemListings(this.props.location.query.itemId, (items) => {
      this.setState(items[0])
    })
  }

  componentDidUpdate() {
    if (this.state.itemId === this.props.location.query.itemId)
      return;
    this.setState({itemId: this.props.location.query.itemId})

    getItemListings(this.props.location.query.itemId, (items) => {
      this.setState(items[0])
    })
  }

  render() {
    return (
      <div>
        <Navbar user={this.props.params.id} />
        <div className="container">
          <div className="row">
            <div className="col-md-4 item-category">
              {"Food > Healthy > Best > Figs"}
            </div>
          </div>
          <hr className="hr-mini" />
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="row">
                <ListingImages images={this.state.images} />
                <div className="col-md-5">
                  <div className="row">
                    <span className="item-header">{this.state.title}</span>
                    <br/>
                    <span className="item-price">{"$" + this.state.price}</span>
                  </div>
                  <div className="row">
                    <UserRating user={this.props.params.id} owner={this.state.owner}/>
                  </div>
                  <div className="row">
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default navbar-btn">
                        Request Communication
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="panel panel-default">
                  <div className="panel-body">
                    {this.state.description}
                    </div>
                  </div>
                </div>
              </div>
              <PreferredPayments disabled={true} preferred_payments={this.state.preferred_payments} />
            </div>
          </div>
        </div>
      )
    }
  }
