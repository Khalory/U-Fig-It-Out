import React from 'react';
import AcceptablePayments from './acceptablePayments'
export default class newlisting extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row center">
            <div className = "col-md-2">
            </div>
            <div className = "col-md-8">
            <h1>New Listing</h1>
            <p>This page is to help you create a new listing to sell your items!</p>
          <div className="form-group">
            <h2>Name of Item:</h2>
            <input type="text" className="form-control" id="usr" />

          <h2>Price:   <input type = "text" /></h2>
          <h2>Check all that apply:</h2>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Textbook</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />ICliker</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Clothing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Furniture</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Video Games</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Television</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Housing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Figs</label>
          </div>
            <h2> Description:</h2>
            <textarea className="form-control" rows="5" id="comment"></textarea>

      <AcceptablePayments disabled={false} checked={[]}/>
          File Path:
          <input type = "text" />
          <button type="button" className="btn btn-secondary">Add Photos!</button>
          <br/>
          <button type="button" className="btn btn-secondary">Create Listing!</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}
