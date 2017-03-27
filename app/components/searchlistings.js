import React from 'react';
import Item from './item';

export default class SearchListings extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="panel panel-default fig-listings">
                <div className="panel-body">
                  <h4>Books &gt; Textbooks: <b>"CS 311"</b></h4>
                  <ul className="list-group">
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                    </Item>
                    <br />
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                    </Item>
                    <br />
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                    </Item>
                    <br />
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                    </Item>
                    <br />
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                    </Item>
                    <br />
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                    </Item>
                    <br />
                    <Item picture="img/AlgorithmsTextbook.jpeg" itemtitle="CS 311 Textbook"
                      itemdescription="Like new, has no markings whatsoever!">
                    </Item>
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
