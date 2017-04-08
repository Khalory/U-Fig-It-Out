import React from 'react'
import AcceptablePayments from './acceptablePayments'
import Navbar from './navbar'
import ListingImages from './listingImages'
import {getItemListings} from '../server'

export default class ListingPage extends React.Component {

  componentDidMount() {
    getItemListings(this.props.id, (items) => {
      this.state = items[0]
    })
  }

  render() {
    return (
      <div>
        <Navbar />
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
                <ListingImages images={item.pictures} />
                <div className="col-md-5">
                  <div className="row">
                    <span className="item-header">{this.state.title}</span>
                    <br/>
                    <span className="item-price">{"$13.37"}</span>
                  </div>
                  <div className="row">
                    <ul className="nav nav-pills pull-left">
                      <li role="presentation" className="active">
                        <span className="glyphicon glyphicon-star"></span>
                      </li>
                      <li role="presentation">
                        <span className="glyphicon glyphicon-star"></span>
                      </li>
                      <li role="presentation">
                        <span className="glyphicon glyphicon-star"></span>
                      </li>
                      <li role="presentation">
                        <span className="glyphicon glyphicon-star-empty"></span>
                      </li>
                      <li role="presentation">
                        <span className="glyphicon glyphicon-star-empty"></span>
                      </li>
                    </ul>
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
                    {"This is the best fig ever, grown in a garden of magic beans which has numerous giant beanstocks. In fact, this fig\
                      actually grew on one of the giant bean stocks, thus being imbued with the power of giants. You won't find another\
                      fig like this ever, especially not for this cheap, cheap price because I don't like figs very much."}
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
