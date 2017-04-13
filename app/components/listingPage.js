import React from 'react'
import AcceptablePayments from './acceptablePayments'
import Navbar from './navbar'
import ListingImages from './listingImages'
import UserRating from './user-rating'
import {getItemListings} from '../server'

export default class ListingPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount() {
    console.log(this.props.params.id)
    getItemListings(this.props.params.id, (items) => {
      this.setState(items[0])
    })
  }

  render() {
    if (this.state === null)
      return <div></div>
    return (
      <div>
        <Navbar user={this.state.owner._id} />
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
                <ListingImages images={this.state.pictures} />
                <div className="col-md-5">
                  <div className="row">
                    <span className="item-header">{this.state.title}</span>
                    <br/>
                    <span className="item-price">{"$" + this.state.price}</span>
                  </div>
                  <div className="row">
                    <UserRating user={this.state.owner._id} />
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
              <AcceptablePayments disabled={true} checked={[true, false, true, true, false]} />
            </div>
          </div>
        </div>
      )
    }
  }
