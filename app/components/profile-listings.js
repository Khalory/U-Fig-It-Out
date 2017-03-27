import React from 'react';
import Item from './item';
import UserRating from './user-rating'

export default class ProfileListings extends React.Component {
  render() {
    return (
      <div className="panel panel-default fig-listings">
        <div className="panel-heading">
          <ul className="nav nav-tabs nav-justified">
            <li role="presentation" className="active">
              <a href="#"><span className="glyphicon glyphicon-tag">
              </span> <strong>Selling</strong></a>
            </li>
            <li role="presentation">
              <a href="#"><span className="glyphicon glyphicon-heart"></span>
              <strong>Buying</strong></a>
            </li>
          </ul>
        </div>
        <div classNameName="panel-body">
          <ul className="list-group">
            <li className="list-group-item listing-add">
              <a href="#"><center>Add another listing!</center></a>
            </li>
            <li className="media list-group-item listing-item">
              <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                itemdescription="Like new, has no markings whatsoever!">
                <div className="media-top media-right">
                  <UserRating />
                </div>
              </Item>
            </li>
            <li className="media list-group-item listing-item">
              <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                itemdescription="Like new, has no markings whatsoever!">
                <div className="media-top media-right">
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-cog"></span>Edit</button>
                </div>
              </Item>
            </li>
            <li className="media list-group-item listing-item">
              <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                itemdescription="Like new, has no markings whatsoever!">
                <div className="media-top media-right">
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-cog"></span>Edit</button>
                </div>
              </Item>
            </li>
            <li className="media list-group-item listing-item">
              <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                itemdescription="Like new, has no markings whatsoever!">
                <div className="media-top media-right">
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-cog"></span>Edit</button>
                </div>
              </Item>
            </li>
            <li className="media list-group-item listing-item">
              <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                itemdescription="Like new, has no markings whatsoever!">
                <div className="media-top media-right">
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-cog"></span>Edit</button>
                </div>
              </Item>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
