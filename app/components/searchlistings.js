import React from 'react';
import Item from './item';
import UserRating from './user-rating'

export default class SearchListings extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="panel panel-default fig-listings">
                <div className="panel-body">
                  <h4>{'Books > Textbooks: '}<b>"CS 311"</b></h4>
                  <ul className="list-group">
                  <li className="media list-group-item listing-item">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                      <div className="media-top media-right">
                        <UserRating name="FigMan" />
                      </div>
                    </Item>
                  </li>
                  <li className="media list-group-item listing-item">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                      <div className="media-top media-right">
                        <UserRating name="FigMan" />
                      </div>
                    </Item>
                  </li>
                  <li className="media list-group-item listing-item">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                      <div className="media-top media-right">
                        <UserRating name="FigMan" />
                      </div>
                    </Item>
                  </li>
                  <li className="media list-group-item listing-item">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                      <div className="media-top media-right">
                        <UserRating name="FigMan" />
                      </div>
                    </Item>
                  </li>
                  <li className="media list-group-item listing-item">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                      <div className="media-top media-right">
                        <UserRating name="FigMan" />
                      </div>
                    </Item>
                  </li>
                  <li className="media list-group-item listing-item">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                      <div className="media-top media-right">
                        <UserRating name="FigMan" />
                      </div>
                    </Item>
                  </li>
                  <li className="media list-group-item listing-item">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                      <div className="media-top media-right">
                        <UserRating name="FigMan" />
                      </div>
                    </Item>
                  </li>
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
